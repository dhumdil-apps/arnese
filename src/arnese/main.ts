import { Component, HostListener, ViewChild, OnInit } from '@angular/core';
import { SK } from './lang';

@Component({
    selector: 'app-main',
    templateUrl: './main.html',
    styleUrls: ['./main.less']
})

export class MainComponent implements OnInit {

    public main: any;

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

        this.main = {
            'lang': SK,
            'assets': {
                // paths
                'images': 'assets/img/',
                'pdfs': 'assets/pdf/'
            },
            'section': {
                'items': false,
                // don't load all the images on page load,
                // rather do it after scroll was initialized
                // and moved at lest to about section
                'contact': false
            },
            'browser': {
                'type': {
                    'webkit': false,
                    // the default browser type
                    'moz': false,
                    // linux firefox exception
                    'unknown': false
                    // disable the app on unknown or very small browsers
                },
                'style': {
                    'content-margin': 0,
                    'scroll-top': 0,
                    'width': 0,
                    'height': 0
                }
            }
        };

        this.detectBrowser();
    }

    ngOnInit() {
        this.resize();
        this.scroll();
    }

    /**
     * Watcher of the Browser Size
     */
    private resize(): void {

        this.main.browser.style['width'] = this.container.nativeElement.offsetParent.offsetWidth;
        this.main.browser.style['height'] = this.getOffsetHeight();

        this.page.nativeElement.style.marginTop = this.main.browser.style['height'] + 100 + 'px';
        this.page.nativeElement.style.marginBottom = this.main.browser.style['height'] + 'px';

    }

    /**
     * Watcher of the Scroll Event
     */
    private scroll(): void {

        this.main.browser.style['scroll-top'] = this.getScrollTop();

        if (this.main.browser.style['scroll-top'] >= 100) {

            this.main.section.items = true;
            this.main.section.contact = !(this.main.browser.style['scroll-top'] < (this.main.browser.style['height'] + 50));

            this.header.nativeElement.offsetParent.style.transform = 'translateY(-100%)';
            this.content.nativeElement.style.display = 'none';
            this.footer.nativeElement.offsetParent.style.transform = 'translateY(100%)';

        } else {

            this.header.nativeElement.offsetParent.style.transform = 'translateY(-' + this.main.browser.style['scroll-top'] + '%)';

            this.content.nativeElement.style.display = 'flex';
            this.content.nativeElement.style.opacity = '' + (1 - Number('0.' + Math.floor(this.main.browser.style['scroll-top'] < 30 ? 0 : this.main.browser.style['scroll-top']) ));

            this.footer.nativeElement.offsetParent.style.transform = 'translateY(' + this.main.browser.style['scroll-top'] + '%)';

        }

    }

    /**
     * Simulate Scrolling
     * @param section
     */
    public scrollToSection(section: string) {

        let start = this.main.browser.style['scroll-top'] + 1;
        let end = 0;

        switch (section) {
            case 'home':
                end = 0;
                break;
            case 'about':
                end = 100;
                break;
            case 'items':
                end = this.main.browser.style['height'] + 50;
                break;
            case 'contact':
                end = this.getScrollHeight() - this.getOffsetHeight();
                break;
            default:
                break;
        }

        if (start > end) {

            const interval = setInterval(() => {

                start = Math.floor(start / 1.1);

                if (start > end) {
                    this.setScrollTop(start);
                } else {
                    this.setScrollTop(end);
                    clearInterval(interval);
                }

            }, 10);

        } else {

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

    }

    /**
     * Helpers
     * - cross platform browser support
     */
    private detectBrowser(): void {
        if (navigator.userAgent.indexOf('AppleWebKit') !== -1) {
            this.main.browser.type['web-kit'] = true;
        } else if (navigator.userAgent.indexOf('Mozilla') !== -1) {
            this.main.browser.type['moz'] = true;
        } else {
            this.main.browser.type['web-kit'] = true;
        }
    }
    private getOffsetHeight(): number {
        if (this.main.browser.type['web-kit']) {
            return this.container.nativeElement.offsetParent.offsetHeight;
        } else {
            return this.container.nativeElement.offsetParent.parentElement.offsetHeight;
        }
    }
    private getScrollTop(): number {
        if (this.main.browser.type['web-kit']) {
            return this.container.nativeElement.offsetParent.scrollTop;
        } else {
            return this.container.nativeElement.offsetParent.parentElement.scrollTop;
        }
    }
    private setScrollTop(px: number): void {
        if (this.main.browser.type['web-kit']) {
            this.container.nativeElement.offsetParent.scrollTop = px;
        } else {
            this.container.nativeElement.offsetParent.parentElement.scrollTop = px;
        }
    }
    private getScrollHeight(): number {
        if (this.main.browser.type['web-kit']) {
            return this.container.nativeElement.offsetParent.scrollHeight;
        } else {
            return this.container.nativeElement.offsetParent.parentElement.scrollHeight;
        }
    }

}
