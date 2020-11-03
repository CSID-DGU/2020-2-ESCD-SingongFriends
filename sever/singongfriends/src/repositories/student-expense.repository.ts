import {DefaultCrudRepository} from '@loopback/repository';
import {StudentExpense, StudentExpenseRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StudentExpenseRepository extends DefaultCrudRepository<
  StudentExpense,
  typeof StudentExpense.prototype.studentExpenseId,
  StudentExpenseRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(StudentExpense, dataSource);
  }
}
