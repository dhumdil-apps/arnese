import { Component, Input } from '@angular/core';

import { BRANDS, Brand } from '../content/products/brands/brand.model';
import { CATEGORIES, Category } from '../content/products/categories/category.model';

@Component({
    selector: 'footer',
    templateUrl: './footer.html',
    styleUrls: ['./footer.less']
})

export class FooterComponent {

    public brands: Brand[] = BRANDS;
    public categories: Category[] = CATEGORIES;

    @Input('activeLink') link: string;

}
