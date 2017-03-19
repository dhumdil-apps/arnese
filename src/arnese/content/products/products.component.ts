import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ProductService } from './products.service';
import { Product } from './product.model';

@Component({
    selector: 'products',
    templateUrl: './products.html',
    styleUrls: ['./products.less']
})

export class ProductsComponent implements OnInit {

    @Output() selectedPDF = new EventEmitter();

    public products: Product[];
    public loading: boolean = true;

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.getProducts();
    }

    private getProducts(): void {

        this.productService.getProducts().then(products => {
            this.products = products;
            this.loading = false;
        });

    }

}
