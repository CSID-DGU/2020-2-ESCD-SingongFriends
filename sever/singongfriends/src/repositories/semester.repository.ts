import {DefaultCrudRepository} from '@loopback/repository';
import {Semester, SemesterRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SemesterRepository extends DefaultCrudRepository<
  Semester,
  typeof Semester.prototype.semesterId,
  SemesterRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Semester, dataSource);
  }
}
