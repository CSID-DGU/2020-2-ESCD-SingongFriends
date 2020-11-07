import {DefaultCrudRepository} from '@loopback/repository';
import {SchoolStudent, SchoolStudentRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SchoolStudentRepository extends DefaultCrudRepository<
  SchoolStudent,
  typeof SchoolStudent.prototype.schoolStudentId,
  SchoolStudentRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(SchoolStudent, dataSource);
  }
}
