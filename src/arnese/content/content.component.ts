import { Component } from '@angular/core';

import { Pdf, PDFs } from './pdf/pdf.model';
import { Category } from './pdf/category.model';

@Component({
    selector: 'content',
    templateUrl: './content.html',
    styleUrls: ['./content.less']
})

export class ContentComponent {

    public pdfs: Pdf[] = PDFs;
    public list: any = [];

    constructor() {

        let i: number = 0;
        let category: Category = this.pdfs[0].category;
        this.list[i] = [];

        this.pdfs.forEach( (item: Pdf) => {

            if (category === item.category) {
                this.list[i].push( item );
            } else {
                category = item.category;
                this.list[++i] = [];
                this.list[i].push( item );
            }

        });

    }

    public img(name: string): string {
        return 'assets/img/img.png';
    }

    public pdf(name: string): string {
        return 'assets/pdf/' + name + '.pdf';
    }

}
