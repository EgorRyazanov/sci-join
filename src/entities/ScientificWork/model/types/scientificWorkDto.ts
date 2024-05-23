import { ScientificAreas } from 'features/catalog/Search/api/types';
import { WorkStatus } from 'entities/ScientificWork';
import { Professor } from 'entities/Professor';
import { Student } from 'entities/Student';

export interface ScientificWorkDto {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly isFavorite: boolean;
    readonly canJoin: boolean;
    readonly result: string;
    readonly problem: string;
    readonly limit: number;
    readonly fullness: number;
    readonly scientificInterests: Array<string>;
    readonly scientificArea: ScientificAreas;
    readonly workStatus: WorkStatus;
    readonly professor: Professor;
    readonly studentDtos: Array<Student>;
}