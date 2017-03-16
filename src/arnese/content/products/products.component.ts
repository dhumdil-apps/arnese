import { Component, OnInit } from '@angular/core';

import { ProductService } from './products.service';
import { Product } from './product.model';

@Component({
    selector: 'products',
    templateUrl: './products.html',
    styleUrls: ['./products.less']
})

export class ProductsComponent implements OnInit {

    public products: Product[];
    public selectedPDF: string;
    public loading: boolean = false;

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.getProducts();
    }

    private getProducts(): void {
        this.productService.getProducts().then(products => this.products = products);
    }

}
