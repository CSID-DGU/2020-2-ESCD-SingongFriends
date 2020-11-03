import {DefaultCrudRepository} from '@loopback/repository';
import {Student, StudentRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StudentRepository extends DefaultCrudRepository<
  Student,
  typeof Student.prototype.studentId,
  StudentRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Student, dataSource);
  }
}
