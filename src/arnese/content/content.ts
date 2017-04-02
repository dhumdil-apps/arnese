import { Component, Input } from '@angular/core';

import { SK } from './lang';

@Component({
    selector: 'app-content',
    templateUrl: './content.html',
    styleUrls: ['./content.less']
})

export class ContentComponent {

    public sk = SK;

    @Input() section;
    @Input() width;

    public img(filename: string): string {
        return 'assets/img/' + filename;
    }

}
