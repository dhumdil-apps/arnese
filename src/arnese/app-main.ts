import { Component, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { SK } from './lang';

@Component({
    selector: 'app-main',
    templateUrl: './app-main.html',
    styleUrls: ['./app-main.less']
})

export class MainComponent implements AfterViewInit {

    public sk = SK;
    browsers;

    @ViewChild('container') container;
    @ViewChild('header') header;
    @ViewChild('content') content;
    @ViewChild('page') page;
    @ViewChild('footer') footer;

    @HostListener('window:scroll', ['$event']) onScroll() {
        this.scroll();
    }

    @HostListener('window:resize', ['$event']) onResize() {
        this.resize();
        this.scroll();
    }

    ngAfterViewInit() {
        this.detectBrowsers();

        this.resize();
        this.scrollTop();
    }

    private resize(): void {
        this.header.nativeElement.style.borderRight = this.container.nativeElement.offsetParent.parentElement.offsetWidth + 'px solid transparent';
        this.page.nativeElement.style.marginTop = this.container.nativeElement.offsetParent.parentElement.offsetHeight + 'px';
        this.footer.nativeElement.style.borderLeft = this.container.nativeElement.offsetParent.parentElement.offsetWidth + 'px solid transparent';
    }

    /**
     * Scroll
     */
    private scroll(): void {
        // .parentElement
        let size = this.container.nativeElement.offsetParent.parentElement.scrollTop;

        if (size >= 99) {

            this.header.nativeElement.offsetParent.style.transform = 'translateY(-100%)';
            this.header.nativeElement.style.borderTop = '51px solid #333333';

            this.content.nativeElement.style.display = 'none';

            this.footer.nativeElement.offsetParent.style.transform = 'translateY(100%)';
            this.footer.nativeElement.style.borderBottom = '51px solid #333333';

        } else {

            this.header.nativeElement.offsetParent.style.transform = 'translateY(-' + size + '%)';
            this.header.nativeElement.style.borderTop = '51px solid #fff';

            this.content.nativeElement.style.display = 'flex';
            this.content.nativeElement.style.opacity = '0.' + (1 - Number('0.' + Math.floor(size < 30 ? 0 : size) ));

            this.footer.nativeElement.offsetParent.style.transform = 'translateY(' + size + '%)';
            this.footer.nativeElement.style.borderBottom = '51px solid #fff';

        }

    }
    public scrollTop(): void {

        let start = this.container.nativeElement.offsetParent.parentElement.scrollTop + 1;
        let end = 0;

        let interval = setInterval(() => {

            start = Math.floor(start / 1.1);

            if (start > end) {
                this.container.nativeElement.offsetParent.parentElement.scrollTop = start;
                this.scroll();
            } else {
                this.container.nativeElement.offsetParent.parentElement.scrollTop = end;
                this.scroll();
                clearInterval(interval);
            }

        }, 10);

    }
    public scrollPageStart(): void {

        let start = this.container.nativeElement.offsetParent.parentElement.scrollTop + 1;
        let end = this.container.nativeElement.offsetParent.parentElement.offsetHeight / 2;
        let step = end;

        let interval = setInterval(() => {

            step = Math.floor(step / 1.001);
            start += (end - step);

            if (start < end) {
                this.container.nativeElement.offsetParent.parentElement.scrollTop = start;
            } else {
                this.container.nativeElement.offsetParent.parentElement.scrollTop = end;
                clearInterval(interval);
            }

        }, 10);

    }
    public scrollPageEnd(): void {

        let start = this.container.nativeElement.offsetParent.parentElement.scrollTop;
        let end = this.container.nativeElement.offsetParent.parentElement.scrollHeight - this.container.nativeElement.offsetParent.parentElement.offsetHeight;
        let step = end;

        let interval = setInterval(() => {

            step = Math.floor(step / 1.001);
            start += (end - step);

            if (start < end) {
                this.container.nativeElement.offsetParent.parentElement.scrollTop = start;
            } else {
                this.container.nativeElement.offsetParent.parentElement.scrollTop = end;
                clearInterval(interval);
            }

        }, 10);

    }

    public img(filename: string) : string {
        return 'assets/img/' + filename;
    }

    private detectBrowsers(): void {
        console.log(navigator.userAgent);
        let str = navigator.userAgent;
        this.browsers = [];
        if (str.indexOf('Mozilla') !== -1) {
            this.browsers.push('Mozilla');
        }
        if (str.indexOf('AppleWebKit') !== -1) {
            this.browsers.push('AppleWebKit (Safari & Chrome)');
        }
        if (str.indexOf('Safari') !== -1) {
            this.browsers.push('- Safari');
        }
        if (str.indexOf('Chrome') !== -1) {
            this.browsers.push('- Chrome');
        }
        if (this.browsers.length < 1) {
            this.browsers.push('Unknown');
        }
        console.log('browsers:', this.browsers);
    }

}
