import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
    selector: 'main',
    templateUrl: './main.html',
    styleUrls: ['./main.less']
})

export class MainComponent {

    @ViewChild('container') container;
    @ViewChild('header') header;
    @ViewChild('footer') footer;

    @HostListener('window:scroll', ['$event']) onScroll(ev) {
        this.setHeight();
    }

    @HostListener('window:resize', ['$event']) onResize(ev) {
        this.setWidth();
        this.setHeight();
    }

    ngAfterViewInit() {
        this.setWidth();
        this.setHeight();
    }

    /**
     * Init header & footer shape
     */
    private setWidth(): void {
        let w = this.container.nativeElement.offsetWidth + 'px solid transparent';
        this.header.nativeElement.style.borderLeft = w;
        this.footer.nativeElement.style.borderRight = w;
    }

    /**
     * Animate scroll
     */
    private setHeight(): void {

        let element = this.container.nativeElement.clientHeight;
        let browser = this.container.nativeElement.offsetParent.parentElement.clientHeight;
        let scrolled = this.container.nativeElement.offsetParent.scrollTop;

        let total;
        let percentage;
        let height;

        if ( browser > element ) {
            percentage = 100;
        } else {
            total = element - browser;
            percentage = Math.floor((scrolled * 100) / total);
        }

        total = browser/2 - 100;
        height = Math.floor((total * percentage) / 100);
        height = (total - height) + "px";

        this.header.nativeElement.offsetParent.style.height = height;
        this.footer.nativeElement.offsetParent.style.height = height;
    }

}
