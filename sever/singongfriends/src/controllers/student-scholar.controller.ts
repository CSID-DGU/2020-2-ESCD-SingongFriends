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
import {StudentScholar} from '../models';
import {StudentScholarRepository} from '../repositories';

export class StudentScholarController {
  constructor(
    @repository(StudentScholarRepository)
    public studentScholarRepository : StudentScholarRepository,
  ) {}

  @post('/student-scholars', {
    responses: {
      '200': {
        description: 'StudentScholar model instance',
        content: {'application/json': {schema: getModelSchemaRef(StudentScholar)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StudentScholar, {
            title: 'NewStudentScholar',
            
          }),
        },
      },
    })
    studentScholar: StudentScholar,
  ): Promise<StudentScholar> {
    return this.studentScholarRepository.create(studentScholar);
  }

  @get('/student-scholars/count', {
    responses: {
      '200': {
        description: 'StudentScholar model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(StudentScholar) where?: Where<StudentScholar>,
  ): Promise<Count> {
    return this.studentScholarRepository.count(where);
  }

  @get('/student-scholars', {
    responses: {
      '200': {
        description: 'Array of StudentScholar model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(StudentScholar, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(StudentScholar) filter?: Filter<StudentScholar>,
  ): Promise<StudentScholar[]> {
    return this.studentScholarRepository.find(filter);
  }

  @patch('/student-scholars', {
    responses: {
      '200': {
        description: 'StudentScholar PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StudentScholar, {partial: true}),
        },
      },
    })
    studentScholar: StudentScholar,
    @param.where(StudentScholar) where?: Where<StudentScholar>,
  ): Promise<Count> {
    return this.studentScholarRepository.updateAll(studentScholar, where);
  }

  @get('/student-scholars/{id}', {
    responses: {
      '200': {
        description: 'StudentScholar model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(StudentScholar, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(StudentScholar, {exclude: 'where'}) filter?: FilterExcludingWhere<StudentScholar>
  ): Promise<StudentScholar> {
    return this.studentScholarRepository.findById(id, filter);
  }

  @patch('/student-scholars/{id}', {
    responses: {
      '204': {
        description: 'StudentScholar PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StudentScholar, {partial: true}),
        },
      },
    })
    studentScholar: StudentScholar,
  ): Promise<void> {
    await this.studentScholarRepository.updateById(id, studentScholar);
  }

  @put('/student-scholars/{id}', {
    responses: {
      '204': {
        description: 'StudentScholar PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() studentScholar: StudentScholar,
  ): Promise<void> {
    await this.studentScholarRepository.replaceById(id, studentScholar);
  }

  @del('/student-scholars/{id}', {
    responses: {
      '204': {
        description: 'StudentScholar DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.studentScholarRepository.deleteById(id);
  }
}
