export const BRANDS: Brand[] = [
    {
        'id': 1,
        'name': 'Arnese',
        'desc': ''
    },
    {
        'id': 2,
        'name': 'StimZet',
        'desc': ''
    },
    {
        'id': 3,
        'name': 'NAREX Ždánice',
        'desc': 'závitníky'
    },
    {
        'id': 4,
        'name': 'Bučovice tools',
        'desc': 'závitníky a závitové kruhové čeľuste'
    },
    {
        'id': 5,
        'name': 'ZPS Frézovacie nástroje',
        'desc': 'frézy'
    },
    {
        'id': 6,
        'name': 'TOS Svitavy',
        'desc': 'skľúčovadlá'
    },
    {
        'id': 7,
        'name': 'PILANA MCT',
        'desc': 'držiaky, skľučovadlá, upínače, tŕne, púzdra'
    },
    {
        'id': 8,
        'name': 'PILSEN',
        'desc': ''
    },
    {
        'id': 9,
        'name': 'DEPRAG',
        'desc': ''
    },
    {
        'id': 10,
        'name': 'Tyrolit',
        'desc': ''
    },
    {
        'id': 11,
        'name': 'Urdiamant',
        'desc': ''
    }
];

/**
 * Model of a brand
 */
export class Brand {

    public id: number;
    public name: string;
    public desc: string;

}
