import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Student} from "./student.model";
import {Expense} from "./expense.model";
import {Scholar} from "./scholar.model";

@model()
export class StudentScholar extends Entity {
    @property({
        type: 'number',
        id: true,
        generated: false,
    })
    studentScholarId?: number;

    @belongsTo(() => Student)
    studentId: number;

    @belongsTo(() => Scholar)
    scholarId: number;

    constructor(data?: Partial<StudentScholar>) {
        super(data);
    }
}

export interface StudentScholarRelations {
    // describe navigational properties here
}

export type StudentScholarWithRelations = StudentScholar & StudentScholarRelations;
