import {DefaultCrudRepository} from '@loopback/repository';
import {Scholar, ScholarRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ScholarRepository extends DefaultCrudRepository<
  Scholar,
  typeof Scholar.prototype.scholarId,
  ScholarRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Scholar, dataSource);
  }
}
