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
    public aboutSection: boolean = true;

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
        this.browser.style['height'] = this.browser.type['web-kit'] ? (this.container.nativeElement.offsetParent.offsetHeight) : (this.container.nativeElement.offsetParent.parentElement.offsetHeight);
        
        this.header.nativeElement.style.borderRight = this.browser.style['width'] + 'px solid transparent';
        this.page.nativeElement.style.marginTop = this.browser.style['height'] + 'px';
        this.page.nativeElement.style.marginBottom = this.browser.style['height'] + 'px';
        this.footer.nativeElement.style.borderLeft = this.browser.style['width'] + 'px solid transparent';
   
    }

    private scroll(): void {

        this.browser.style['scroll-top'] = this.browser.type['web-kit'] ? this.container.nativeElement.offsetParent.scrollTop : this.container.nativeElement.offsetParent.parentElement.scrollTop;
        try {
            this.aboutSection = (this.browser.style['scroll-top'] < this.browser.style['height']);
        } catch (err) {}

        if (this.browser.style['scroll-top'] >= 99) {

            this.header.nativeElement.offsetParent.style.transform = 'translateY(-100%)';
            this.header.nativeElement.style.borderTop = '51px solid #333';

            this.content.nativeElement.style.display = 'none';

            this.footer.nativeElement.offsetParent.style.transform = 'translateY(100%)';
            this.footer.nativeElement.style.borderBottom = '51px solid #333';

        } else {

            this.header.nativeElement.offsetParent.style.transform = 'translateY(-' + this.browser.style['scroll-top'] + '%)';
            this.header.nativeElement.style.borderTop = '51px solid #fff';

            this.content.nativeElement.style.display = 'flex';
            this.content.nativeElement.style.opacity = '' + (1 - Number('0.' + Math.floor(this.browser.style['scroll-top'] < 30 ? 0 : this.browser.style['scroll-top']) ));

            this.footer.nativeElement.offsetParent.style.transform = 'translateY(' + this.browser.style['scroll-top'] + '%)';
            this.footer.nativeElement.style.borderBottom = '51px solid #fff';

        }

    }
    public scrollTop(): void {

        // this.scroll();
        let start = this.browser.style['scroll-top'] + 1;
        const end = 0;

        const interval = setInterval(() => {

            start = Math.floor(start / 1.1);

            if (start > end) {
                
                if (this.browser.type['web-kit']) {
                    this.container.nativeElement.offsetParent.scrollTop = start;
                } else {
                    this.container.nativeElement.offsetParent.parentElement.scrollTop = start;
                }

                // this.scroll();

            } else {
                
                if (this.browser.type['web-kit']) {
                    this.container.nativeElement.offsetParent.scrollTop = end;
                } else {
                    this.container.nativeElement.offsetParent.parentElement.scrollTop = end;
                }

                // this.scroll();
                clearInterval(interval);

            }

        }, 10);

    }
    public scrollPageStart(): void {

        // this.scroll();
        let start = this.browser.style['scroll-top'] + 1;
        const end = 100;
        let step = end;

        const interval = setInterval(() => {

            step = Math.floor(step / 1.001);
            start += (end - step);

            if (start < end) {

                if (this.browser.type['web-kit']) {
                    this.container.nativeElement.offsetParent.scrollTop = start;
                } else {
                    this.container.nativeElement.offsetParent.parentElement.scrollTop = start;
                }

            } else {

                if (this.browser.type['web-kit']) {
                    this.container.nativeElement.offsetParent.scrollTop = end;
                } else {
                    this.container.nativeElement.offsetParent.parentElement.scrollTop = end;
                }

                clearInterval(interval);

            }

        }, 10);

    }
    public scrollPageEnd(): void {

        let start = this.browser.style['scroll-top'];
        let end = 0;
        let step = end;

        if (this.browser.type['web-kit']) {
            end += this.container.nativeElement.offsetParent.scrollHeight - this.container.nativeElement.offsetParent.offsetHeight;
        } else {
            end += this.container.nativeElement.offsetParent.parentElement.scrollHeight - this.container.nativeElement.offsetParent.parentElement.offsetHeight;
        }

        const interval = setInterval(() => {

            step = Math.floor(step / 1.001);
            start += (end - step);

            if (start < end) {

                if (this.browser.type['web-kit']) {
                    this.container.nativeElement.offsetParent.scrollTop = start;
                } else {
                    this.container.nativeElement.offsetParent.parentElement.scrollTop = start;
                }

            } else {

                if (this.browser.type['web-kit']) {
                    this.container.nativeElement.offsetParent.scrollTop = end;
                } else {
                    this.container.nativeElement.offsetParent.parentElement.scrollTop = end;
                }

                clearInterval(interval);

            }

        }, 10);

    }

    public img(filename: string): string {
        return 'arnese/assets/img/' + filename;
    }

    /**
     * Default use web-kit
     */
    private detectBrowser(): void {

        // console.log(navigator.userAgent);

        if (navigator.userAgent.indexOf('AppleWebKit') !== -1) {
            this.browser.type['web-kit'] = true;

        } else if (navigator.userAgent.indexOf('Mozilla') !== -1) {
            this.browser.type['moz'] = true;

        } else {
            this.browser.type['web-kit'] = true;

        }

    }

}
