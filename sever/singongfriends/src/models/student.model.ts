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

    @property({
        type: 'string',
        required: true,
    })
    password: string;

    @property({
        type: 'string',
        required: true,
    })
    major: string;

    @property({
        type: 'string',
        required: true,
    })
    studentCode?: string;

    @property({
        type: 'string',
        required: true,
    })
    wechatToken?: string;

    constructor(data?: Partial<Student>) {
        super(data);
    }
}

export interface StudentRelations {
    // describe navigational properties here
}

export type StudentWithRelations = Student & StudentRelations;
