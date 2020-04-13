import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Admin, AdminRelations} from '../models';

export type Credentials = {
  email: string;
  password: string;
};

export class AdminRepository extends DefaultCrudRepository<
  Admin,
  typeof Admin.prototype.id,
  AdminRelations
  > {

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Admin, dataSource);
  }
}
