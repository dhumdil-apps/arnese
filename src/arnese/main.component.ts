import { Component, OnInit } from '@angular/core';

import { ProductService } from '../arnese/products/products.service'
import { Product } from '../arnese/products/product.model'

@Component({
    selector: 'main',
    templateUrl: './main.html',
    styleUrls: ['./main.less']
})

export class MainComponent implements OnInit {

    public products: Product[];
    public selectedPDF: string;

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.getProducts();
    }

    private getProducts(): void {
        this.productService.getProducts().then(products => this.products = products);
    }

    public selectProduct(filename: string): void {
        this.selectedPDF = 'assets/pdf/' + filename + '.pdf';
    }

}
