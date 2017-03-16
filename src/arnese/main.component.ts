import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
    selector: 'main',
    templateUrl: './main.html',
    styleUrls: ['./main.less']
})

export class MainComponent {

    /**
     * Manage app width, height & scroll
     */

    // bind elements
    @ViewChild('container') container;
    @ViewChild('header') header;
    @ViewChild('footer') footer;

    // listen for scroll
    @HostListener('window:scroll', ['$event']) onScroll(ev) {
        this.setScroller();
    }

    // listen for resize
    @HostListener('window:resize', ['$event']) onResize(ev) {
        this.setDimensions();
        this.setScroller();
    }

    // init width/height
    ngAfterViewInit() {
        this.setDimensions();
        this.setScroller();
    }

    // on resize, fix width/height
    private setDimensions(): void {

        // set width
        let w = this.container.nativeElement.offsetWidth + 'px solid transparent';
        this.header.nativeElement.style.borderLeft = w;
        this.footer.nativeElement.style.borderRight = w;

        // set height
        let h =  this.container.nativeElement.offsetParent.parentElement.clientHeight;
        this.container.nativeElement.style.height = h + 100 + "px";

    }

    // on scroll, hide/show header/footer
    private setScroller(): void {

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
