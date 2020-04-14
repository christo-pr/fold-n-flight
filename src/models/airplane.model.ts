import {Entity, model, property} from '@loopback/repository';

enum AIRPLANE_TYPE {
  Dart = 'dart',
  Glidder = 'glidder'
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
    default: AIRPLANE_TYPE.Dart,
  })
  type: string;

  @property({
    type: 'string',
    required: true,
  })
  model: string;

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
