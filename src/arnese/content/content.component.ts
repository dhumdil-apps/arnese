import { Component, Input } from '@angular/core';


@Component({
    selector: 'content',
    templateUrl: './content.html',
    styleUrls: ['./content.less']
})

export class ContentComponent {

    @Input('activeLink') link: string;

}
