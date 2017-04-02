import { Component, Input, ViewChild } from '@angular/core';

import { Product, PRODUCTS } from './product.model';

@Component({
    selector: 'app-products',
    templateUrl: './products.html',
    styleUrls: ['./products.less']
})

export class ProductsComponent {

    public products: Product[] = PRODUCTS;

    @Input() width;

    @ViewChild('b1') b1;
    @ViewChild('b2') b2;
    @ViewChild('b3') b3;

    public pdf(filename: string): string {
        return 'assets/pdf/' + filename + '.pdf';
    }

    public img(filename: string): string {
        return 'assets/img/' + filename;
    }

}
