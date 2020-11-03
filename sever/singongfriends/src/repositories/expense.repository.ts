import {DefaultCrudRepository} from '@loopback/repository';
import {Expense, ExpenseRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ExpenseRepository extends DefaultCrudRepository<
  Expense,
  typeof Expense.prototype.expenseId,
  ExpenseRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Expense, dataSource);
  }
}
