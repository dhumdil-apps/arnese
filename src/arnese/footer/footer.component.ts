import { Component, Input } from '@angular/core';

@Component({
    selector: 'footer',
    templateUrl: './footer.html',
    styleUrls: ['./footer.less']
})

export class FooterComponent {

    @Input('activeLink') link: string;

}
