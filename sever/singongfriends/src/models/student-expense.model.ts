import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Student} from "./student.model";
import {Expense} from "./expense.model";

@model()
export class StudentExpense extends Entity {
    @property({
        type: 'number',
        id: true,
        generated: false,
    })
    studentExpenseId?: number;

    @belongsTo(() => Student)
    studentId: number;

    @belongsTo(() => Expense)
    expenseId: number;

    constructor(data?: Partial<StudentExpense>) {
        super(data);
    }
}

export interface StudentExpenseRelations {
    // describe navigational properties here
}

export type StudentExpenseWithRelations = StudentExpense & StudentExpenseRelations;
