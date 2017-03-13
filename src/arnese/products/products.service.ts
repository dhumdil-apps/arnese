import { Injectable } from '@angular/core';

import { PRODUCTS, Product } from './product.model';

@Injectable()
export class ProductService {

    getProducts(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
    }

}
