import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
    selector: 'main',
    templateUrl: './main.html',
    styleUrls: ['./main.less']
})

/**
 * Manage app dimensions & scroll
 */
export class MainComponent {

    public main: any;

    constructor() {

        this.main = {
            'router': {
                'active-link': 'home'
            },
            'scrolled': false
        };
        
    }

    // bind elements
    @ViewChild('container') container;
    @ViewChild('header') header;
    @ViewChild('footer') footer;

    // listen for scroll
    @HostListener('window:scroll', ['$event']) onScroll(ev) {
        this.scroll();
    }

    // listen for resize
    @HostListener('window:resize', ['$event']) onResize(ev) {
        this.resize();
        this.scroll();
    }

    // init width/height
    ngAfterViewInit() {
        this.resize();
        this.scroll();
    }

    /**
     * Set dimensions
     */
    private resize(): void {

        // set header & footer shape
        let w = this.container.nativeElement.offsetParent.offsetWidth + 'px solid transparent';
        this.header.nativeElement.style.borderRight = w;
        this.footer.nativeElement.style.borderLeft = w;

        // set container's element height to 100% & 100px overflow
        let h =  this.container.nativeElement.offsetParent.parentElement.clientHeight;
        this.container.nativeElement.style.height = h + 50 + "px";

    }

    /**
     * Animate Scroll
     */
    private scroll(): void {

        // container elements height
        let element = this.container.nativeElement.clientHeight;
        // browsers height
        let browser = this.container.nativeElement.offsetParent.parentElement.clientHeight;
        // scrolled size
        let scrolled = this.container.nativeElement.offsetParent.scrollTop;

        // trnsform container elements height to percentage
        let percentage = (browser > element) ? 100 : Math.floor((scrolled * 100) / (element - browser) );

        this.main['scrolled'] = percentage === 100;

        // transform percentage to scrolled size
        let size = Math.floor(( (browser/2 - 100) * percentage) / 100);

        // position the header & footer based on scroll size
        this.header.nativeElement.offsetParent.style.transform = "translateY(-" + size + "px)";
        this.footer.nativeElement.offsetParent.style.transform = "translateY(" + size + "px)";

    }

    /**
     * Simulate Router
     */
    public activateLink(link: string): void {
        this.main.router['active-link'] = link;
    }

}
