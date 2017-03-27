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

        // default use webkit
        this.browser = {
            'webkit': false,
            'moz': false
        };

        this.detectBrowser();
    }

    ngAfterViewInit() {
        this.resize();
        this.scrollTop();
    }

    private resize(): void {
        this.header.nativeElement.style.borderRight = this.container.nativeElement.offsetParent.offsetWidth + 'px solid transparent';
        this.page.nativeElement.style.marginTop = this.browser['web-kit'] ? (100 + this.container.nativeElement.offsetParent.offsetHeight + 'px') : (100 + this.container.nativeElement.offsetParent.parentElement.offsetHeight + 'px');
        this.footer.nativeElement.style.borderLeft = this.container.nativeElement.offsetParent.offsetWidth + 'px solid transparent';
    }

    /**
     * Scroll
     */
    private scroll(): void {
        const size = this.browser['web-kit'] ? this.container.nativeElement.offsetParent.scrollTop : this.container.nativeElement.offsetParent.parentElement.scrollTop;

        if (size >= 99) {

            this.header.nativeElement.offsetParent.style.transform = 'translateY(-100%)';
            this.header.nativeElement.style.borderTop = '51px solid #333';

            this.content.nativeElement.style.display = 'none';

            this.footer.nativeElement.offsetParent.style.transform = 'translateY(100%)';
            this.footer.nativeElement.style.borderBottom = '51px solid #333';

        } else {

            this.header.nativeElement.offsetParent.style.transform = 'translateY(-' + size + '%)';
            this.header.nativeElement.style.borderTop = '51px solid #fff';

            this.content.nativeElement.style.display = 'flex';
            this.content.nativeElement.style.opacity = '' + (1 - Number('0.' + Math.floor(size < 30 ? 0 : size) ));

            this.footer.nativeElement.offsetParent.style.transform = 'translateY(' + size + '%)';
            this.footer.nativeElement.style.borderBottom = '51px solid #fff';

        }

    }
    public scrollTop(): void {

        let start = 1;
        if (this.browser['web-kit']) {
            start += this.container.nativeElement.offsetParent.scrollTop;
        } else {
            start += this.container.nativeElement.offsetParent.parentElement.scrollTop;
        }
        const end = 0;

        const interval = setInterval(() => {

            start = Math.floor(start / 1.1);

            if (start > end) {
                if (this.browser['web-kit']) {
                    this.container.nativeElement.offsetParent.scrollTop = start;
                } else {
                    this.container.nativeElement.offsetParent.parentElement.scrollTop = start;
                }
                this.scroll();
            } else {
                if (this.browser['web-kit']) {
                    this.container.nativeElement.offsetParent.scrollTop = end;
                } else {
                    this.container.nativeElement.offsetParent.parentElement.scrollTop = end;
                }
                this.scroll();
                clearInterval(interval);
            }

        }, 10);

    }
    public scrollPageStart(): void {

        let start = 1;
        if (this.browser['web-kit']) {
            start += this.container.nativeElement.offsetParent.scrollTop;
        } else {
            start += this.container.nativeElement.offsetParent.parentElement.scrollTop;
        }

        const end = 100;
        // if (this.browser['web-kit']) {
        //     end += this.container.nativeElement.offsetParent.offsetHeight;
        // } else {
        //     end += this.container.nativeElement.offsetParent.parentElement.offsetHeight;
        // }
        let step = end;

        const interval = setInterval(() => {

            step = Math.floor(step / 1.001);
            start += (end - step);

            if (start < end) {
                if (this.browser['web-kit']) {
                    this.container.nativeElement.offsetParent.scrollTop = start;
                } else {
                    this.container.nativeElement.offsetParent.parentElement.scrollTop = start;
                }
            } else {
                if (this.browser['web-kit']) {
                    this.container.nativeElement.offsetParent.scrollTop = end;
                } else {
                    this.container.nativeElement.offsetParent.parentElement.scrollTop = end;
                }
                clearInterval(interval);
            }

        }, 10);

    }
    public scrollPageEnd(): void {

        let start = 0;
        if (this.browser['web-kit']) {
            start += this.container.nativeElement.offsetParent.scrollTop;
        } else {
            start += this.container.nativeElement.offsetParent.parentElement.scrollTop;
        }

        let end = 0;
        if (this.browser['web-kit']) {
            end += this.container.nativeElement.offsetParent.scrollHeight - this.container.nativeElement.offsetParent.offsetHeight;
        } else {
            end += this.container.nativeElement.offsetParent.parentElement.scrollHeight - this.container.nativeElement.offsetParent.parentElement.offsetHeight;
        }

        let step = end;

        const interval = setInterval(() => {

            step = Math.floor(step / 1.001);
            start += (end - step);

            if (start < end) {
                if (this.browser['web-kit']) {
                    this.container.nativeElement.offsetParent.scrollTop = start;
                } else {
                    this.container.nativeElement.offsetParent.parentElement.scrollTop = start;
                }
            } else {
                if (this.browser['web-kit']) {
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
            this.browser['web-kit'] = true;

        } else if (navigator.userAgent.indexOf('Mozilla') !== -1) {
            this.browser['moz'] = true;

        } else {
            this.browser['web-kit'] = true;

        }

    }

}
