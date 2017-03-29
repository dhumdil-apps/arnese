import { Component, Input } from '@angular/core';

import { Pdf, PDFs } from './pdf/pdf.model';
import { SK } from './lang';

@Component({
    selector: 'app-content',
    templateUrl: './app-content.html',
    styleUrls: ['./app-content.less']
})

export class ContentComponent {

    public sk = SK;
    public pdfs: Pdf[] = PDFs;

    @Input() aboutSection: boolean;

    public pdf(filename: string): string {
        return 'arnese/assets/pdf/' + filename + '.pdf';
    }

    public img(filename: string): string {
        return 'arnese/assets/img/' + filename;
    }

}
