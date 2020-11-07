import {Entity, Model, model, property} from '@loopback/repository';

@model()
export class SchoolStudent extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  schoolStudentId?: number;

  @property({
    type: 'string',
    required: true,
  })
  studentCode: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;


  constructor(data?: Partial<SchoolStudent>) {
    super(data);
  }
}

export interface SchoolStudentRelations {
  // describe navigational properties here
}

export type SchoolStudentWithRelations = SchoolStudent & SchoolStudentRelations;
