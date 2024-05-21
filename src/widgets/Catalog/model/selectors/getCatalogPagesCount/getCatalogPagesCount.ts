import { StateSchema } from 'app/providers/StoreProvider';

export const getCatalogPagesCount = (state: StateSchema) => state.catalog.pagesCount;
