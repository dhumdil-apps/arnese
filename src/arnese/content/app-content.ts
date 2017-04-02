import { Component, Input, HostListener, ViewChild, AfterViewInit } from '@angular/core';

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

    @ViewChild('container') container;
    @ViewChild('b1') b1;
    @ViewChild('b2') b2;
    @ViewChild('b3') b3;

    @HostListener('window:resize', ['$event']) onResize() {
        this.resize();
    }

    @Input() aboutSection: boolean;

    ngAfterViewInit() {
        this.resize();
    }

    private resize(): void {

        console.log( this.container.nativeElement.offsetWidth );


        // this.browser.style['width'] = this.container.nativeElement.offsetParent.offsetWidth;
        // this.browser.style['height'] = this.getOffsetHeight();
        // this.header.nativeElement.style.borderRight = this.browser.style['width'] + 'px solid transparent';
        // this.page.nativeElement.style.marginTop = this.browser.style['height'] + 100 + 'px';
        // this.page.nativeElement.style.marginBottom = this.browser.style['height'] + 'px';
        // this.footer.nativeElement.style.borderLeft = this.browser.style['width'] + 'px solid transparent';
    }

    public pdf(filename: string): string {
        return 'assets/pdf/' + filename + '.pdf';
    }

    public img(filename: string): string {
        return 'assets/img/' + filename;
    }

}
