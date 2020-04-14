import {authenticate} from '@loopback/authentication';
import {Count, CountSchema, Filter, FilterExcludingWhere, repository, Where} from '@loopback/repository';
import {del, get, getModelSchemaRef, param, patch, post, put, requestBody} from '@loopback/rest';
import {Airplane} from '../models';
import {AirplaneRepository} from '../repositories';

export class AirplaneController {
  constructor(
    @repository(AirplaneRepository)
    public airplaneRepository: AirplaneRepository,
  ) {}

  @post('/airplanes', {
    responses: {
      '200': {
        description: 'Airplane model instance',
        content: {'application/json': {schema: getModelSchemaRef(Airplane)}},
      },
    },
  })
  @authenticate('jwt')
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Airplane, {
            title: 'NewAirplane',
            exclude: ['id'],
          }),
        },
      },
    })
    airplane: Omit<Airplane, 'id'>,
  ): Promise<Airplane> {
    return this.airplaneRepository.create(airplane);
  }

  @get('/airplanes/count', {
    responses: {
      '200': {
        description: 'Airplane model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  @authenticate('jwt')
  async count(
    @param.where(Airplane) where?: Where<Airplane>,
  ): Promise<Count> {
    return this.airplaneRepository.count(where);
  }

  @get('/airplanes', {
    responses: {
      '200': {
        description: 'Array of Airplane model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Airplane, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  @authenticate('jwt')
  async find(
    @param.filter(Airplane) filter?: Filter<Airplane>,
  ): Promise<Airplane[]> {
    return this.airplaneRepository.find(filter);
  }

  @patch('/airplanes', {
    responses: {
      '200': {
        description: 'Airplane PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  @authenticate('jwt')
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Airplane, {partial: true}),
        },
      },
    })
    airplane: Airplane,
    @param.where(Airplane) where?: Where<Airplane>,
  ): Promise<Count> {
    return this.airplaneRepository.updateAll(airplane, where);
  }

  @get('/airplanes/{id}', {
    responses: {
      '200': {
        description: 'Airplane model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Airplane, {includeRelations: true}),
          },
        },
      },
    },
  })
  @authenticate('jwt')
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Airplane, {exclude: 'where'}) filter?: FilterExcludingWhere<Airplane>
  ): Promise<Airplane> {
    return this.airplaneRepository.findById(id, filter);
  }

  @patch('/airplanes/{id}', {
    responses: {
      '204': {
        description: 'Airplane PATCH success',
      },
    },
  })
  @authenticate('jwt')
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Airplane, {partial: true}),
        },
      },
    })
    airplane: Airplane,
  ): Promise<void> {
    await this.airplaneRepository.updateById(id, airplane);
  }

  @put('/airplanes/{id}', {
    responses: {
      '204': {
        description: 'Airplane PUT success',
      },
    },
  })
  @authenticate('jwt')
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() airplane: Airplane,
  ): Promise<void> {
    await this.airplaneRepository.replaceById(id, airplane);
  }

  @del('/airplanes/{id}', {
    responses: {
      '204': {
        description: 'Airplane DELETE success',
      },
    },
  })
  @authenticate('jwt')
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.airplaneRepository.deleteById(id);
  }
}
