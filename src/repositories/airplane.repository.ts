import {DefaultCrudRepository} from '@loopback/repository';
import {Airplane, AirplaneRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AirplaneRepository extends DefaultCrudRepository<
  Airplane,
  typeof Airplane.prototype.id,
  AirplaneRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Airplane, dataSource);
  }
}
