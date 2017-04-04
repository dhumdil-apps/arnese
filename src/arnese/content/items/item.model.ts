export const ITEMS: Item[] = [
    {
        'id': '1.jpg',
        'title': 'Nástroje na obrábanie otvorov',
        'pdfs': [
            {
                'id': 'STIMZET-nastroje_na_obrabanie_otvorov',
                'desc': '...'
            }
        ]
    },
    {
        'id': '2.png',
        'title': 'Nástroje na rezanie závitov',
        'pdfs': [
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
        'pdfs': [
            {
                'id': 'ZPS-nastroje_na_frezovanie',
                'desc': 'frézy'
            }
        ]
    },
    {
        'id': '4.png',
        'title': 'Upínacie náradie',
        'pdfs': [
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
                'desc': ''
            },
            {
                'id': 'PILANA-katalog_3_cz',
                'desc': ''
            },
            {
                'id': 'PILANA-katalog_4_cz',
                'desc': ''
            },
            {
                'id': 'PILSEN-otocne_hroty',
                'desc': 'frézy'
            },
            {
                'id': 'DEPRAG-kliestiny',
                'desc': ''
            },
            {
                'id': 'DEPRAG-rychl_hlavy',
                'desc': ''
            }
        ]
    },
    {
        'id': '5.png',
        'title': 'Meradlá',
        'pdfs': [
            {
                'id': 'ARNESE-meradla',
                'desc': '...'
            }
        ]
    },
    {
        'id': '6.jpg',
        'title': 'Ručné náradie',
        'pdfs': [
            {
                'id': 'ARNESE-rucne_naradie',
                'desc': '...'
            }
        ]
    },
    {
        'id': '7.jpg',
        'title': 'Brusivo',
        'pdfs': [
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
        'pdfs': [
            {
                'id': 'ARNESE-sustruh',
                'desc': '...'
            }
        ]
    },
    {
        'id': '9',
        'title': 'Tvrdokovové nástroje',
        'pdfs': []
    },
    {
        'id': '10.jpg',
        'title': 'VÝROBA A OSTRENIE REZNÉHO NÁRADIA',
        'pdfs': [
            {
                'id': '',
                'desc': 'výroba štandardného a špeciálneho rezného náradia'

            }
        ]
    }
];

export class Item {

    public id: string;
    public title: string;
    public pdfs: Pdf[];

}

export class Pdf {

    public id: string;
    public desc: string;

}
