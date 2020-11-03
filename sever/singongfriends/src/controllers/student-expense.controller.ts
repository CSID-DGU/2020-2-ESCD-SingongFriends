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
import {StudentExpense} from '../models';
import {StudentExpenseRepository} from '../repositories';

export class StudentExpenseController {
  constructor(
    @repository(StudentExpenseRepository)
    public studentExpenseRepository : StudentExpenseRepository,
  ) {}

  @post('/student-expenses', {
    responses: {
      '200': {
        description: 'StudentExpense model instance',
        content: {'application/json': {schema: getModelSchemaRef(StudentExpense)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StudentExpense, {
            title: 'NewStudentExpense',
            
          }),
        },
      },
    })
    studentExpense: StudentExpense,
  ): Promise<StudentExpense> {
    return this.studentExpenseRepository.create(studentExpense);
  }

  @get('/student-expenses/count', {
    responses: {
      '200': {
        description: 'StudentExpense model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(StudentExpense) where?: Where<StudentExpense>,
  ): Promise<Count> {
    return this.studentExpenseRepository.count(where);
  }

  @get('/student-expenses', {
    responses: {
      '200': {
        description: 'Array of StudentExpense model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(StudentExpense, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(StudentExpense) filter?: Filter<StudentExpense>,
  ): Promise<StudentExpense[]> {
    return this.studentExpenseRepository.find(filter);
  }

  @patch('/student-expenses', {
    responses: {
      '200': {
        description: 'StudentExpense PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StudentExpense, {partial: true}),
        },
      },
    })
    studentExpense: StudentExpense,
    @param.where(StudentExpense) where?: Where<StudentExpense>,
  ): Promise<Count> {
    return this.studentExpenseRepository.updateAll(studentExpense, where);
  }

  @get('/student-expenses/{id}', {
    responses: {
      '200': {
        description: 'StudentExpense model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(StudentExpense, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(StudentExpense, {exclude: 'where'}) filter?: FilterExcludingWhere<StudentExpense>
  ): Promise<StudentExpense> {
    return this.studentExpenseRepository.findById(id, filter);
  }

  @patch('/student-expenses/{id}', {
    responses: {
      '204': {
        description: 'StudentExpense PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StudentExpense, {partial: true}),
        },
      },
    })
    studentExpense: StudentExpense,
  ): Promise<void> {
    await this.studentExpenseRepository.updateById(id, studentExpense);
  }

  @put('/student-expenses/{id}', {
    responses: {
      '204': {
        description: 'StudentExpense PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() studentExpense: StudentExpense,
  ): Promise<void> {
    await this.studentExpenseRepository.replaceById(id, studentExpense);
  }

  @del('/student-expenses/{id}', {
    responses: {
      '204': {
        description: 'StudentExpense DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.studentExpenseRepository.deleteById(id);
  }
}
