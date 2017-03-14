import { Component, Input } from '@angular/core';

@Component({
    selector: 'item',
    templateUrl: './item.html',
    styleUrls: ['./item.less']
})

export class ItemComponent {

    @Input() selectedPDF: string;
    @Input() loading: boolean;

    public pageIndex: number = 1;
    public totalPages: number = 0;

    public nextPage(): void {
        if (this.pageIndex < this.totalPages) {
            this.pageIndex++;
        }
    }

    public previousPage(): void {
        if (this.pageIndex > 1) {
            this.pageIndex--;
        }
    }

    public afterLoadPDF(pdf: PDFDocumentProxy) {

        console.log(pdf);
        this.loading = false;
        this.totalPages = pdf['pdfInfo'].numPages;

    }

}
