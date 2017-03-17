import { Component, Input } from '@angular/core';


@Component({
    selector: 'content',
    templateUrl: './content.html',
    styleUrls: ['./content.less']
})

export class ContentComponent {

    public activeLink: string = '';

    @Input('activeLink') link: string;

    ngAffterViewInit() {
        this.activeLink = this.link;
    }

}
