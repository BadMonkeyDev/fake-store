export type SortType = 'asc' | 'desc';

function getFieldValue(obj: any, field: string): any {
    const fields = field.split('.');
    return fields.reduce((acc, curr) => acc && acc[curr], obj);
}

export default function sortObjectsArray<T>(products: T[], field: keyof T, sortType: SortType = 'asc'): T[] {
    const sortedProducts = [...products];

    sortedProducts.sort((a, b) => {
        const fieldA = getFieldValue(a, field as string);
        const fieldB = getFieldValue(b, field as string);
        let comparison = 0;

        if (fieldA > fieldB) {
            comparison = 1;
        } else if (fieldA < fieldB) {
            comparison = -1;
        }

        return sortType === 'desc' ? comparison * -1 : comparison;
    });

    return sortedProducts;
}