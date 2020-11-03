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
import {Scholar} from '../models';
import {ScholarRepository} from '../repositories';

export class ScholarController {
  constructor(
    @repository(ScholarRepository)
    public scholarRepository : ScholarRepository,
  ) {}

  @post('/scholars', {
    responses: {
      '200': {
        description: 'Scholar model instance',
        content: {'application/json': {schema: getModelSchemaRef(Scholar)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Scholar, {
            title: 'NewScholar',
            
          }),
        },
      },
    })
    scholar: Scholar,
  ): Promise<Scholar> {
    return this.scholarRepository.create(scholar);
  }

  @get('/scholars/count', {
    responses: {
      '200': {
        description: 'Scholar model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Scholar) where?: Where<Scholar>,
  ): Promise<Count> {
    return this.scholarRepository.count(where);
  }

  @get('/scholars', {
    responses: {
      '200': {
        description: 'Array of Scholar model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Scholar, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Scholar) filter?: Filter<Scholar>,
  ): Promise<Scholar[]> {
    return this.scholarRepository.find(filter);
  }

  @patch('/scholars', {
    responses: {
      '200': {
        description: 'Scholar PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Scholar, {partial: true}),
        },
      },
    })
    scholar: Scholar,
    @param.where(Scholar) where?: Where<Scholar>,
  ): Promise<Count> {
    return this.scholarRepository.updateAll(scholar, where);
  }

  @get('/scholars/{id}', {
    responses: {
      '200': {
        description: 'Scholar model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Scholar, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Scholar, {exclude: 'where'}) filter?: FilterExcludingWhere<Scholar>
  ): Promise<Scholar> {
    return this.scholarRepository.findById(id, filter);
  }

  @patch('/scholars/{id}', {
    responses: {
      '204': {
        description: 'Scholar PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Scholar, {partial: true}),
        },
      },
    })
    scholar: Scholar,
  ): Promise<void> {
    await this.scholarRepository.updateById(id, scholar);
  }

  @put('/scholars/{id}', {
    responses: {
      '204': {
        description: 'Scholar PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() scholar: Scholar,
  ): Promise<void> {
    await this.scholarRepository.replaceById(id, scholar);
  }

  @del('/scholars/{id}', {
    responses: {
      '204': {
        description: 'Scholar DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.scholarRepository.deleteById(id);
  }
}
