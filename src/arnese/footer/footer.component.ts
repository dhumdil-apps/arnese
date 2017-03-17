import { Component, Input } from '@angular/core';

@Component({
    selector: 'footer',
    templateUrl: './footer.html',
    styleUrls: ['./footer.less']
})

export class FooterComponent {

    public activeLink: string = '';

    @Input('activeLink') link: string;

    ngAfterViewInit() {
        this.activeLink = this.link;
    }

}
