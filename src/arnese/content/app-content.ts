import { Component } from '@angular/core';

import { Pdf, PDFs } from './pdf/pdf.model';
import { Category } from './pdf/category.model';
import { SK } from './lang';

@Component({
    selector: 'app-content',
    templateUrl: './app-content.html',
    styleUrls: ['./app-content.less']
})

export class ContentComponent {

    public sk = SK;
    public pdfs: Pdf[] = PDFs;
    public list: any = [];

    constructor() {

        let i = 0;
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

    public img(filename: string): string {
        return 'arnese/assets/img/img.png';
    }

    public pdf(filename: string): string {
        return 'arnese/assets/pdf/' + filename + '.pdf';
    }

}
