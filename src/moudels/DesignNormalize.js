import { schema, normalize } from 'normalizr';

const designElementSchema = new schema.Entity('designElement');

export const getDesignElement = (designElement) => {
    return normalize(designElement, designElementSchema);
}

export const getTexts = (designElement, currentPage) => {
    return designElement.entities.page[currentPage].textElements;
}