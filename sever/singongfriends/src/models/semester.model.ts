import {Entity, model, property} from '@loopback/repository';

@model()
export class Semester extends Entity {
    @property({
        type: 'number',
        id: true,
        generated: false,
    })
    semesterId: number;

    @property()
    semesterCode: string;

    constructor(data?: Partial<Semester>) {
        super(data);
    }
}

export interface SemesterRelations {
    // describe navigational properties here
}

export type SemesterWithRelations = Semester & SemesterRelations;
