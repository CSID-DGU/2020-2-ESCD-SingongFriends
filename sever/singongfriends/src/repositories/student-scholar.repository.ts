import {DefaultCrudRepository} from '@loopback/repository';
import {StudentScholar, StudentScholarRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StudentScholarRepository extends DefaultCrudRepository<
  StudentScholar,
  typeof StudentScholar.prototype.studentScholarId,
  StudentScholarRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(StudentScholar, dataSource);
  }
}
