import {Entity, model, property} from '@loopback/repository';

@model()
export class Expense extends Entity {
    @property({
        type: 'number',
        id: true,
        generated: false,
    })
    expenseId?: number;

    @property()
    money: string;

    constructor(data?: Partial<Expense>) {
        super(data);
    }
}

export interface ExpenseRelations {
    // describe navigational properties here
}

export type ExpenseWithRelations = Expense & ExpenseRelations;
