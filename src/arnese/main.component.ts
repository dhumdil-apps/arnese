import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
    selector: 'main',
    templateUrl: './main.html',
    styleUrls: ['./main.less']
})

export class MainComponent {

    public W: string;
    public H: string;

    constructor() {
        // console.log(window);
    }

    @ViewChild('container') container;
    @ViewChild('header') header;
    @ViewChild('footer') footer;

    @HostListener('window:scroll', ['$event']) onScroll(ev) {
        this.setHeight();
    }

    @HostListener('window:resize', ['$event']) onResize(ev) {
        this.setWidth();
    }

    ngAfterViewInit() {
        this.setWidth();
        this.setHeight();
    }

    /**
     * Init header & footer style
     */
    private setWidth(): void {
        // console.log( this.container.nativeElement.offsetWidth );
        let w = this.container.nativeElement.offsetWidth;
        // console.log(w + 'px');
        this.W = w + 'px';
        w += 'px solid transparent';

        this.header.nativeElement.style.borderLeft = w;
        this.footer.nativeElement.style.borderRight = w;
    }

    private setHeight(): void {

        let element = this.container.nativeElement.clientHeight;
        let browser = window.innerHeight;
        let scrolled = window.scrollY;

        if ( browser > element ) {

            // console.log(100 + '%');
            this.H = 100 + '%';

        } else {

            let total = element - browser;
            let percentage = Math.floor((scrolled * 100) / total);

            // console.log(percentage + '%');
            this.H = percentage + '%';

        }

    }

}
