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
import {Expense} from '../models';
import {ExpenseRepository} from '../repositories';

export class ExpenseController {
  constructor(
    @repository(ExpenseRepository)
    public expenseRepository : ExpenseRepository,
  ) {}

  @post('/expenses', {
    responses: {
      '200': {
        description: 'Expense model instance',
        content: {'application/json': {schema: getModelSchemaRef(Expense)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Expense, {
            title: 'NewExpense',
            
          }),
        },
      },
    })
    expense: Expense,
  ): Promise<Expense> {
    return this.expenseRepository.create(expense);
  }

  @get('/expenses/count', {
    responses: {
      '200': {
        description: 'Expense model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Expense) where?: Where<Expense>,
  ): Promise<Count> {
    return this.expenseRepository.count(where);
  }

  @get('/expenses', {
    responses: {
      '200': {
        description: 'Array of Expense model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Expense, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Expense) filter?: Filter<Expense>,
  ): Promise<Expense[]> {
    return this.expenseRepository.find(filter);
  }

  @patch('/expenses', {
    responses: {
      '200': {
        description: 'Expense PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Expense, {partial: true}),
        },
      },
    })
    expense: Expense,
    @param.where(Expense) where?: Where<Expense>,
  ): Promise<Count> {
    return this.expenseRepository.updateAll(expense, where);
  }

  @get('/expenses/{id}', {
    responses: {
      '200': {
        description: 'Expense model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Expense, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Expense, {exclude: 'where'}) filter?: FilterExcludingWhere<Expense>
  ): Promise<Expense> {
    return this.expenseRepository.findById(id, filter);
  }

  @patch('/expenses/{id}', {
    responses: {
      '204': {
        description: 'Expense PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Expense, {partial: true}),
        },
      },
    })
    expense: Expense,
  ): Promise<void> {
    await this.expenseRepository.updateById(id, expense);
  }

  @put('/expenses/{id}', {
    responses: {
      '204': {
        description: 'Expense PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() expense: Expense,
  ): Promise<void> {
    await this.expenseRepository.replaceById(id, expense);
  }

  @del('/expenses/{id}', {
    responses: {
      '204': {
        description: 'Expense DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.expenseRepository.deleteById(id);
  }
}
