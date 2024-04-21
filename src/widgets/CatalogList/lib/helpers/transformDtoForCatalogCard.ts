import { ICatalogCard } from 'widgets/CatalogCard/model/types/ICatalogCard';
import { Professor } from 'entities/Professor';
import { ScientificWork } from 'entities/ScientificWork';
import { Student } from 'entities/Student/types/student';

export const transformDtoForCatalogCard = (dto: Professor | ScientificWork | Student): ICatalogCard => ({
    id: dto.id,
    title: 'name' in dto ? dto.name : `${dto.firstName} ${dto.lastName} ${dto.patronymic}`,
    chips: dto.scientificInterests,
    image: undefined,
    subtitle: 'degree' in dto ? dto.degree : undefined,
    status: 'status' in dto ? dto.status : undefined,
    limit: 'limit' in dto ? dto.limit : undefined,
    fullness: 'fullness' in dto ? dto.fullness : undefined,
});
