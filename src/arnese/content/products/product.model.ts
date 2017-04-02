export const PRODUCTS: Product[] = [
    {
        'id': '1.jpg',
        'title': 'Nástroje na obrábanie otvorov',
        'filenames': [
            {
                'id': 'STIMZET-nastroje_na_obrabanie_otvorov',
                'desc': '...'
            }
        ]
    },
    {
        'id': '2.png',
        'title': 'Nástroje na rezanie závitov',
        'filenames': [
            {
                'id': 'NAREX-nastroje_na_rezanie_zavitov',
                'desc': 'závitníky'
            },
            {
                'id': 'BUCOVICE-nastroje_na_rezanie_zavitov',
                'desc': 'závitníky a závitové kruhové čeľuste'
            }
        ]
    },
    {
        'id': '3.png',
        'title': 'Nástroje na frézovanie',
        'filenames': [
            {
                'id': 'ZPS-nastroje_na_frezovanie',
                'desc': 'frézy'
            }
        ]
    },
    {
        'id': '4.png',
        'title': 'Upínacie náradie',
        'filenames': [
            {
                'id': 'TOS-sklicidla',
                'desc': 'skľúčovadlá'
            },
            {
                'id': 'PILANA-katalog_1_cz',
                'desc': 'držiaky, skľučovadlá, upínače, tŕne, púzdra'
            },
            {
                'id': 'PILANA-katalog_2_cz',
                'desc': '...'
            },
            {
                'id': 'PILANA-katalog_3_cz',
                'desc': '...'
            },
            {
                'id': 'PILANA-katalog_4_cz',
                'desc': '...'
            },
            {
                'id': 'PILSEN-otocne_hroty',
                'desc': 'frézy'
            },
            {
                'id': 'DEPRAG-kliestiny',
                'desc': 'frézy'
            },
            {
                'id': 'DEPRAG-rychl_hlavy',
                'desc': 'frézy'
            }
        ]
    },
    {
        'id': '5.png',
        'title': 'Meradlá',
        'filenames': [
            {
                'id': 'ARNESE-meradla',
                'desc': '...'
            }
        ]
    },
    {
        'id': '6.jpg',
        'title': 'Ručné náradie',
        'filenames': [
            {
                'id': 'ARNESE-rucne_naradie',
                'desc': '...'
            }
        ]
    },
    {
        'id': '7.jpg',
        'title': 'Brusivo',
        'filenames': [
            {
                'id': 'TYROLIT-brusivo',
                'desc': '...'
            },
            {
                'id': 'URDIAMANT-brusivo',
                'desc': '...'
            }
        ]
    },
    {
        'id': '8.jpg',
        'title': 'Nástroje na sústruženie',
        'filenames': [
            {
                'id': 'ARNESE-sustruh',
                'desc': '...'
            }
        ]
    },
    {
        'id': '9.',
        'title': 'Tvrdokovové nástroje',
        'filenames': [
            {
                'id': '',
                'desc': '...'
            }
        ]
    },
    {
        'id': '10.jpg',
        'title': 'VÝROBA A OSTRENIE REZNÉHO NÁRADIA',
        'filenames': [
            {
                'id': '',
                'desc': 'výroba štandardného a špeciálneho rezného náradia'
            }
        ]
    }
];

export class Product {

    public id: string;
    public title: string;
    public filenames: Filename[];

}

export class Filename {

    public id: string;
    public desc: string;

}
