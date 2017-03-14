import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../arnese/products/products.service';
import { Product } from '../../arnese/products/product.model';

@Component({
    selector: 'content',
    templateUrl: './content.html',
    styleUrls: ['./content.less']
})

export class ContentComponent implements OnInit {

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

    public selectProduct(filename: string): void {
        this.loading = true;
        this.selectedPDF = 'assets/pdf/' + filename + '.pdf';
    }

}
