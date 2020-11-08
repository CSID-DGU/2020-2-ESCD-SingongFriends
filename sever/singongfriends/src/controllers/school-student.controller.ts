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
  requestBody, RestBindings,
} from '@loopback/rest';
import {SchoolStudent, Student} from '../models';
import {SchoolStudentRepository} from '../repositories';
import { Response } from '@loopback/rest';
import {inject} from "@loopback/testlab";


export class SchoolStudentController {
  constructor(
    @repository(SchoolStudentRepository) public schoolStudentRepository : SchoolStudentRepository,
  ) {}

  @post('/school-students', {
    responses: {
      '200': {
        description: 'SchoolStudent model instance',
        content: {'application/json': {schema: getModelSchemaRef(SchoolStudent)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SchoolStudent, {
            title: 'NewSchoolStudent',
            exclude: ['schoolStudentId'],
          }),
        },
      },
    })
    schoolStudent: Omit<SchoolStudent, 'schoolStudentId'>,
  ): Promise<SchoolStudent> {
    return this.schoolStudentRepository.create(schoolStudent);
  }

  @get('/school-students/count', {
    responses: {
      '200': {
        description: 'SchoolStudent model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(SchoolStudent) where?: Where<SchoolStudent>,
  ): Promise<Count> {
    return this.schoolStudentRepository.count(where);
  }

  @get('/school-students', {
    responses: {
      '200': {
        description: 'Array of SchoolStudent model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(SchoolStudent, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(SchoolStudent) filter?: Filter<SchoolStudent>,
  ): Promise<SchoolStudent[]> {
    return this.schoolStudentRepository.find(filter);
  }

  @patch('/school-students', {
    responses: {
      '200': {
        description: 'SchoolStudent PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SchoolStudent, {partial: true}),
        },
      },
    })
    schoolStudent: SchoolStudent,
    @param.where(SchoolStudent) where?: Where<SchoolStudent>,
  ): Promise<Count> {
    return this.schoolStudentRepository.updateAll(schoolStudent, where);
  }

  @get('/school-students/{id}', {
    responses: {
      '200': {
        description: 'SchoolStudent model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SchoolStudent, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SchoolStudent, {exclude: 'where'}) filter?: FilterExcludingWhere<SchoolStudent>
  ): Promise<SchoolStudent> {
    return this.schoolStudentRepository.findById(id, filter);
  }

  @patch('/school-students/{id}', {
    responses: {
      '204': {
        description: 'SchoolStudent PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SchoolStudent, {partial: true}),
        },
      },
    })
    schoolStudent: SchoolStudent,
  ): Promise<void> {
    await this.schoolStudentRepository.updateById(id, schoolStudent);
  }

  @put('/school-students/{id}', {
    responses: {
      '204': {
        description: 'SchoolStudent PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() schoolStudent: SchoolStudent,
  ): Promise<void> {
    await this.schoolStudentRepository.replaceById(id, schoolStudent);
  }

  @del('/school-students/{id}', {
    responses: {
      '204': {
        description: 'SchoolStudent DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.schoolStudentRepository.deleteById(id);
  }
}
