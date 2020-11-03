import {Entity, model, property} from '@loopback/repository';

@model()
export class Scholar extends Entity {
    @property({
        type: 'number',
        id: true,
        generated: false,
    })
    scholarId?: number;

    @property()
    fund: string;

    @property()
    money: number;

    constructor(data?: Partial<Scholar>) {
        super(data);
    }
}

export interface ScholarRelations {
    // describe navigational properties here
}

export type ScholarWithRelations = Scholar & ScholarRelations;
