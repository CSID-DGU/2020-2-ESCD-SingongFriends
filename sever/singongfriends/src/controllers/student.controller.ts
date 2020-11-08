import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere, model, property,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {SchoolStudent, Student, StudentRelations} from '../models';
import {StudentRepository} from '../repositories';

@model()
class loginDTO {
  @property()
  studentCode: string;
  @property()
  password: string;
  @property()
  wechatToken: string;
}

export class StudentController {
  constructor(
    @repository(StudentRepository)
    public studentRepository : StudentRepository,
  ) {}

  @get('/current-semester', {
    responses: {
      '200': {
        description:
            `
              현재 학기를 반환해준다. 2020년 2학기 이면 20202, 2020년 1학기면 20201
            `,
      },
    },
  })
  async getCurrentSemester(
  ): Promise<number> {
    return 20202;
  }

  @post('/students', {
    responses: {
      '200': {
        description: 'Student model instance',
        content: {'application/json': {schema: getModelSchemaRef(Student)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Student, {
            title: 'NewStudent',

          }),
        },
      },
    })
    student: Student,
  ): Promise<Student> {
    return this.studentRepository.create(student);
  }

  @get('/students/count', {
    responses: {
      '200': {
        description: 'Student model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Student) where?: Where<Student>,
  ): Promise<Count> {
    return this.studentRepository.count(where);
  }

  @get('/students', {
    responses: {
      '200': {
        description: 'Array of Student model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Student, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Student) filter?: Filter<Student>,
  ): Promise<Student[]> {
    return this.studentRepository.find(filter);
  }

  @get('/students/token/{wechatToken}', {
    responses: {
      '200': {
        description:
            `
              예시) /students/token/1.a.b
              예시) /students/token/위챗토큰
             
              입력한 위챗토큰을 가진 유저가 있으면 true 를 반환
              입력한 위챗토큰을 가진 유저가 없으면 false 를 반환
              
            `,
      },
    },
  })
  async findByWechatToken(
      @param.path.string('wechatToken') token: string,
  ): Promise<Boolean> {
    console.log("입력받은 토큰 = ", token);
    const result = await this.studentRepository.find({ where: { wechatToken: token }});
    if (result.length) return true;
    return false;
  }

  @patch('/students', {
    responses: {
      '200': {
        description: 'Student PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Student, {partial: true}),
        },
      },
    })
    student: Student,
    @param.where(Student) where?: Where<Student>,
  ): Promise<Count> {
    return this.studentRepository.updateAll(student, where);
  }

  @get('/students/{id}', {
    responses: {
      '200': {
        description: 'Student model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Student, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Student, {exclude: 'where'}) filter?: FilterExcludingWhere<Student>
  ): Promise<Student> {
    return this.studentRepository.findById(id, filter);
  }

  @patch('/students/{id}', {
    responses: {
      '204': {
        description: 'Student PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Student, {partial: true}),
        },
      },
    })
    student: Student,
  ): Promise<void> {
    await this.studentRepository.updateById(id, student);
  }

  @put('/students/{id}', {
    responses: {
      '204': {
        description: 'Student PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() student: Student,
  ): Promise<void> {
    await this.studentRepository.replaceById(id, student);
  }

  @del('/students/{id}', {
    responses: {
      '204': {
        description: 'Student DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.studentRepository.deleteById(id);
  }

  @post('/login', {
    responses: {
      '200': {
        description:
            `
             입력한 학번과 패스워드가 일치하면 로그인에 성공한 것 임. 
             로그인 성공시 : true
             로그인 실패시 : false
             성공 시에 요청자 위챗 토큰으로 계정의 토큰이 설정됨
             `,
      },
    },
  })
  async login(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(loginDTO, {
              title: 'loginInfo',
            }),
          },
        },
      })
      loginInfo: loginDTO,
  ): Promise<Boolean> {
    console.log("로그인 정보 =  " , loginInfo);
    const dbStudents: (Student & StudentRelations)[] = await this.studentRepository.find({ where: { studentCode: loginInfo.studentCode }});
    const student = dbStudents[0];
    if (student.password != loginInfo.password) {
      return false
    }
    student.wechatToken = loginInfo.wechatToken;
    await this.studentRepository.update(student);
    return true;
  }
}
