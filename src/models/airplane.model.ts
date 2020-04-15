import {Entity, model, property} from '@loopback/repository';

enum AIRPLANE_TYPE {
  Easy = 'easy',
  Medium = 'intermediate',
  Advanced = 'advanced',
}

@model()
export class Airplane extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    default: AIRPLANE_TYPE.Easy,
  })
  type: string;

  @property({
    type: 'string',
    required: true,
  })
  model: string;

  @property({
    type: 'number',
    required: false,
    default: 5,
  })
  speed: number;

  @property({
    type: 'number',
    required: false,
    default: 5,
  })
  glide: number;

  @property({
    type: 'number',
    required: false,
    default: 5,
  })
  accuracy: number;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<Airplane>) {
    super(data);
  }
}

export interface AirplaneRelations {
  // describe navigational properties here
}

export type AirplaneWithRelations = Airplane & AirplaneRelations;
