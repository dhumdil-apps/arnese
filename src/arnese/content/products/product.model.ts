import { BRANDS, Brand } from './brands/brand.model';
import { CATEGORIES, Category } from './categories/category.model';

export const PRODUCTS: Product[] = [
    {
        'name': 'STIMZET-nastroje_na_obrabanie_otvorov',
        'brand': BRANDS[1],
        'category': CATEGORIES[0]
    },
    {
        'name': 'NAREX-nastroje_na_rezanie_zavitov',
        'brand': BRANDS[2],
        'category': CATEGORIES[1]
    },
    {
        'name': 'BUCOVICE-nastroje_na_rezanie_zavitov',
        'brand': BRANDS[3],
        'category': CATEGORIES[1]
    },
    {
        'name': 'ZPS-nastroje_na_frezovanie',
        'brand': BRANDS[4],
        'category': CATEGORIES[2]
    },
    {
        'name': 'TOS-sklicidla',
        'brand': BRANDS[5],
        'category': CATEGORIES[3]
    },
    {
        'name': 'PILANA-katalog_1_cz',
        'brand': BRANDS[6],
        'category': CATEGORIES[3]
    },
    {
        'name': 'PILANA-katalog_2_cz',
        'brand': BRANDS[6],
        'category': CATEGORIES[3]
    },
    {
        'name': 'PILANA-katalog_3_cz',
        'brand': BRANDS[6],
        'category': CATEGORIES[3]
    },
    {
        'name': 'PILANA-katalog_4_cz',
        'brand': BRANDS[6],
        'category': CATEGORIES[3]
    },
    {
        'name': 'PILSEN-otocne_hroty',
        'brand': BRANDS[7],
        'category': CATEGORIES[3]
    },
    {
        'name': 'DEPRAG-kliestiny',
        'brand': BRANDS[8],
        'category': CATEGORIES[3]
    },
    {
        'name': 'DEPRAG-rychl_hlavy',
        'brand': BRANDS[8],
        'category': CATEGORIES[3]
    },
    {
        'name': 'ARNESE-meradla',
        'brand': BRANDS[0],
        'category': CATEGORIES[4]
    },
    {
        'name': 'ARNESE-rucne_naradie',
        'brand': BRANDS[0],
        'category': CATEGORIES[5]
    },
    {
        'name': 'TYROLIT-brusivo',
        'brand': BRANDS[9],
        'category': CATEGORIES[6]
    },
    {
        'name': 'URDIAMANT-brusivo',
        'brand': BRANDS[10],
        'category': CATEGORIES[6]
    },
    {
        'name': 'ARNESE-sustruh',
        'brand': BRANDS[0],
        'category': CATEGORIES[7]
    }
];

/**
 * Model of a product
 */
export class Product {

    public name: string; // 'BRAND-file_name'
    public brand: Brand; // 'Brand name'
    public category: Category; // Category name

}
