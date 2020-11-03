import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
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
import {Semester} from '../models';
import {SemesterRepository} from '../repositories';

export class SemesterController {
  constructor(
    @repository(SemesterRepository)
    public semesterRepository : SemesterRepository,
  ) {}

  @post('/semesters', {
    responses: {
      '200': {
        description: 'Semester model instance',
        content: {'application/json': {schema: getModelSchemaRef(Semester)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Semester, {
            title: 'NewSemester',
            
          }),
        },
      },
    })
    semester: Semester,
  ): Promise<Semester> {
    return this.semesterRepository.create(semester);
  }

  @get('/semesters/count', {
    responses: {
      '200': {
        description: 'Semester model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Semester) where?: Where<Semester>,
  ): Promise<Count> {
    return this.semesterRepository.count(where);
  }

  @get('/semesters', {
    responses: {
      '200': {
        description: 'Array of Semester model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Semester, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Semester) filter?: Filter<Semester>,
  ): Promise<Semester[]> {
    return this.semesterRepository.find(filter);
  }

  @patch('/semesters', {
    responses: {
      '200': {
        description: 'Semester PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Semester, {partial: true}),
        },
      },
    })
    semester: Semester,
    @param.where(Semester) where?: Where<Semester>,
  ): Promise<Count> {
    return this.semesterRepository.updateAll(semester, where);
  }

  @get('/semesters/{id}', {
    responses: {
      '200': {
        description: 'Semester model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Semester, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Semester, {exclude: 'where'}) filter?: FilterExcludingWhere<Semester>
  ): Promise<Semester> {
    return this.semesterRepository.findById(id, filter);
  }

  @patch('/semesters/{id}', {
    responses: {
      '204': {
        description: 'Semester PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Semester, {partial: true}),
        },
      },
    })
    semester: Semester,
  ): Promise<void> {
    await this.semesterRepository.updateById(id, semester);
  }

  @put('/semesters/{id}', {
    responses: {
      '204': {
        description: 'Semester PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() semester: Semester,
  ): Promise<void> {
    await this.semesterRepository.replaceById(id, semester);
  }

  @del('/semesters/{id}', {
    responses: {
      '204': {
        description: 'Semester DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.semesterRepository.deleteById(id);
  }
}
