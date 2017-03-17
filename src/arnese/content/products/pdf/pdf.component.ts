import { Component, Input } from '@angular/core';

import { Product } from '../../products/product.model';

@Component({
    selector: 'pdf',
    templateUrl: './pdf.html',
    styleUrls: ['./pdf.less']
})

export class PdfComponent {

    @Input('pdf') pdf: Product;

}
