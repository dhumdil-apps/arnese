import { Component, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { SK } from './lang';

@Component({
    selector: 'app-main',
    templateUrl: './app-main.html',
    styleUrls: ['./app-main.less']
})

export class MainComponent implements AfterViewInit {

    public sk: any = SK;
    public browser: any = {};
    public aboutSection = true;

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

    constructor() {

        this.browser = {
            'type': {
                'webkit': false,
                'moz': false
            },
            'style': {
                'content-margin': 0,
                'scroll-top': 0,
                'width': 0,
                'height': 0
            }
        };

        this.detectBrowser();
    }

    ngAfterViewInit() {
        this.resize();
        this.scroll();
        this.scrollTop();
    }

    private resize(): void {

        this.browser.style['width'] = this.container.nativeElement.offsetParent.offsetWidth;
        this.browser.style['height'] = this.getOffsetHeight();

        this.header.nativeElement.style.borderRight = this.browser.style['width'] + 'px solid transparent';
        this.page.nativeElement.style.marginTop = this.browser.style['height'] + 100 + 'px';
        this.page.nativeElement.style.marginBottom = this.browser.style['height'] + 'px';
        this.footer.nativeElement.style.borderLeft = this.browser.style['width'] + 'px solid transparent';

    }

    private scroll(): void {

        this.browser.style['scroll-top'] = this.getScrollTop();
        this.aboutSection = (this.browser.style['scroll-top'] < this.browser.style['height'] + 100);

        if (this.browser.style['scroll-top'] >= 99) {

            this.header.nativeElement.offsetParent.style.transform = 'translateY(-100%)';
            this.header.nativeElement.style.borderTop = '51px solid #333';

            this.content.nativeElement.style.display = 'none';

            this.footer.nativeElement.offsetParent.style.transform = 'translateY(100%)';
            this.footer.nativeElement.style.borderBottom = '51px solid #333';

        } else {

            this.header.nativeElement.offsetParent.style.transform = 'translateY(-' + this.browser.style['scroll-top'] + '%)';
            this.header.nativeElement.style.borderTop = '51px solid #eee';

            this.content.nativeElement.style.display = 'flex';
            this.content.nativeElement.style.opacity = '' + (1 - Number('0.' + Math.floor(this.browser.style['scroll-top'] < 30 ? 0 : this.browser.style['scroll-top']) ));

            this.footer.nativeElement.offsetParent.style.transform = 'translateY(' + this.browser.style['scroll-top'] + '%)';
            this.footer.nativeElement.style.borderBottom = '51px solid #eee';

        }

    }

    public scrollTop(): void {

        let start = this.browser.style['scroll-top'] + 1;
        const end = 0;

        const interval = setInterval(() => {

            start = Math.floor(start / 1.1);

            if (start > end) {
                this.setScrollTop(start);
            } else {
                this.setScrollTop(end);
                clearInterval(interval);
            }

        }, 10);

    }

    public scrollPageAbout(): void {

        let start = this.browser.style['scroll-top'] + 1;
        const end = 100;
        let step = end;

        const interval = setInterval(() => {

            step = Math.floor(step / 1.001);
            start += (end - step);

            if (start < end) {
                this.setScrollTop(start);
            } else {
                this.setScrollTop(end);
                clearInterval(interval);
            }

        }, 10);

    }
    public scrollPageProducts(): void {

        let start = this.browser.style['scroll-top'] + 1;
        const end = this.browser.style['height'] + 100;
        let step = end;

        const interval = setInterval(() => {

            step = Math.floor(step / 1.001);
            start += (end - step);

            if (start < end) {
                this.setScrollTop(start);
            } else {
                this.setScrollTop(end);
                clearInterval(interval);
            }

        }, 10);

    }
    public scrollPageContact(): void {

        let start = this.browser.style['scroll-top'];
        const end = this.getScrollHeight() - this.getOffsetHeight();
        let step = end;

        const interval = setInterval(() => {

            step = Math.floor(step / 1.001);
            start += (end - step);

            if (start < end) {
                this.setScrollTop(start);
            } else {
                this.setScrollTop(end);
                clearInterval(interval);
            }

        }, 10);

    }

    public img(filename: string): string {
        return 'assets/img/' + filename;
    }

    private detectBrowser(): void {
        if (navigator.userAgent.indexOf('AppleWebKit') !== -1) {
            this.browser.type['web-kit'] = true;
        } else if (navigator.userAgent.indexOf('Mozilla') !== -1) {
            this.browser.type['moz'] = true;
        } else {
            this.browser.type['web-kit'] = true;
        }
    }

    private getOffsetHeight(): number {
        if (this.browser.type['web-kit']) {
            return this.container.nativeElement.offsetParent.offsetHeight;
        } else {
            return this.container.nativeElement.offsetParent.parentElement.offsetHeight;
        }
    }

    private getScrollTop(): number {
        if (this.browser.type['web-kit']) {
            return this.container.nativeElement.offsetParent.scrollTop;
        } else {
            return this.container.nativeElement.offsetParent.parentElement.scrollTop;
        }
    }

    private setScrollTop(px: number): void {
        if (this.browser.type['web-kit']) {
            this.container.nativeElement.offsetParent.scrollTop = px;
        } else {
            this.container.nativeElement.offsetParent.parentElement.scrollTop = px;
        }
    }

    private getScrollHeight(): number {
        if (this.browser.type['web-kit']) {
            return this.container.nativeElement.offsetParent.scrollHeight;
        } else {
            return this.container.nativeElement.offsetParent.parentElement.scrollHeight;
        }
    }

}
