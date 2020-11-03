import {Entity, model, property} from '@loopback/repository';

@model()
export class Student extends Entity {
    @property({
        type: 'number',
        id: true,
        generated: false,
    })
    studentId: number;

    @property()
    name?: string;

    @property()
    studentCode?: string;

    @property()
    wechatToken?: string;

    constructor(data?: Partial<Student>) {
        super(data);
    }
}

export interface StudentRelations {
    // describe navigational properties here
}

export type StudentWithRelations = Student & StudentRelations;
