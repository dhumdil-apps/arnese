export const PDFs: Pdf[] = [
    {
        'title': 'Nástroje na obrábanie otvorov',
        'filenames': [
            {
                'id': 'STIMZET-nastroje_na_obrabanie_otvorov',
                'desc': '...'
            }
        ]
    },
    {
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
        'title': 'Nástroje na frézovanie',
        'filenames': [
            {
                'id': 'ZPS-nastroje_na_frezovanie',
                'desc': 'frézy'
            }
        ]
    },
    {
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
        'title': 'Meradlá',
        'filenames': [
            {
                'id': 'ARNESE-meradla',
                'desc': '...'
            }
        ]
    },
    {
        'title': 'Ručné náradie',
        'filenames': [
            {
                'id': 'ARNESE-rucne_naradie',
                'desc': '...'
            }
        ]
    },
    {
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
        'title': 'Nástroje na sústruženie',
        'filenames': [
            {
                'id': 'ARNESE-sustruh',
                'desc': '...'
            }
        ]
    },
    {
        'title': 'Tvrdokovové nástroje',
        'filenames': [
            {
                'id': '',
                'desc': '...'
            }
        ]
    },
    {
        'title': 'VÝROBA A OSTRENIE REZNÉHO NÁRADIA',
        'filenames': [
            {
                'id': '',
                'desc': 'výroba štandardného a špeciálneho rezného náradia'
            }
        ]
    }
];

export class Pdf {

    public title: string;
    public filenames: Filename[];

}

export class Filename {

    public id: string;
    public desc: string;

}
