import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
    selector: 'main',
    templateUrl: './main.html',
    styleUrls: ['./main.less']
})

/**
 * Manage app dimensions, scroll & functionality
 */
export class MainComponent {

    public scrolled: boolean = false;

    // bind elements
    @ViewChild('container') container;
    @ViewChild('header') header;
    @ViewChild('content') content;
    @ViewChild('page') page;
    @ViewChild('footer') footer;

    // listen for scroll
    @HostListener('window:scroll', ['$event']) onScroll() {
        this.scroll();
    }

    // listen for resize
    @HostListener('window:resize', ['$event']) onResize() {
        this.resize();
        this.scroll();
    }

    ngAfterViewInit() {
        this.resize();
        this.scrollTop();
    }

    private resize(): void {
        this.header.nativeElement.style.borderRight = this.container.nativeElement.offsetParent.offsetWidth + 'px solid transparent';
        this.page.nativeElement.style.marginTop = this.container.nativeElement.offsetParent.offsetHeight + 'px';
        this.footer.nativeElement.style.borderLeft = this.container.nativeElement.offsetParent.offsetWidth + 'px solid transparent';
    }

    /**
     * Scroll
     */
    private scroll(): void {
        let size = this.container.nativeElement.offsetParent.scrollTop;

        if (size >= 99) {

            this.scrolled = true;
            this.header.nativeElement.offsetParent.style.transform = "translateY(-100%)";
            this.content.nativeElement.style.display = "none";
            this.footer.nativeElement.offsetParent.style.transform = "translateY(100%)";

        } else {

            this.scrolled = false;
            this.header.nativeElement.offsetParent.style.transform = "translateY(-" + size + "%)";
            this.content.nativeElement.style.display = "flex";
            this.content.nativeElement.style.opacity = "" + (1 - Number("0." + Math.floor(size < 30 ? 0 : size) ));
            this.footer.nativeElement.offsetParent.style.transform = "translateY(" + size + "%)";

        }

    }
    public scrollTop(): void {

        let start = this.container.nativeElement.offsetParent.scrollTop + 1;
        let end = 0;

        let interval = setInterval(()=> {

            start = Math.floor(start / 1.1);

            if (start > end) {
                this.container.nativeElement.offsetParent.scrollTop = start;
                this.scroll();
            } else {
                this.container.nativeElement.offsetParent.scrollTop = end;
                this.scroll();
                clearInterval(interval);
            }

        }, 10);

    }
    public scrollPageStart(): void {

        let start = this.container.nativeElement.offsetParent.scrollTop + 1;
        let end = this.container.nativeElement.offsetParent.offsetHeight/2;
        let step = end;

        let interval = setInterval(()=> {

            step = Math.floor(step / 1.001);
            start += (end - step);

            if (start < end) {
                this.container.nativeElement.offsetParent.scrollTop = start;
            } else {
                this.container.nativeElement.offsetParent.scrollTop = end;
                clearInterval(interval);
            }

        }, 10);

    }
    public scrollPageEnd(): void {

        let start = this.container.nativeElement.offsetParent.scrollTop;
        let end = this.container.nativeElement.offsetParent.scrollHeight - this.container.nativeElement.offsetParent.offsetHeight;
        let step = end;

        let interval = setInterval(()=> {

            step = Math.floor(step / 1.001);
            start += (end - step);

            if (start < end) {
                this.container.nativeElement.offsetParent.scrollTop = start;
            } else {
                this.container.nativeElement.offsetParent.scrollTop = end;
                clearInterval(interval);
            }

        }, 10);

    }

}
