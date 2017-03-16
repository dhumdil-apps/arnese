// simulate DB
export const CATEGORIES: Category[] = [
    {
        'id': 1,
        'name': 'Nástroje na obrábanie otvorov'
    },
    {
        'id': 2,
        'name': 'Nástroje na rezanie závitov'
    },
    {
        'id': 3,
        'name': 'Nástroje na frézovanie'
    },
    {
        'id': 4,
        'name': 'Upínacie náradie'
    },
    {
        'id': 5,
        'name': 'Meradlá'
    },
    {
        'id': 6,
        'name': 'Ručné náradie'
    },
    {
        'id': 7,
        'name': 'Brusivo'
    },
    {
        'id': 8,
        'name': 'Nástroje na sústruženie'
    },
    {
        'id': 9,
        'name': 'Tvrdokovové nástroje'
    }
];

/**
 * Model of a category
 */
export class Category {

    public id: number;
    public name: string;

}
