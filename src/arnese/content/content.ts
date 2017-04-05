import { Component, Input } from '@angular/core';

import { SK } from './lang';

@Component({
    selector: 'app-content',
    templateUrl: './content.html',
    styleUrls: ['./content.less']
})

export class ContentComponent {

    public main: any;

    @Input() section;

    constructor() {

        this.main = {
            'lang': SK,
            'assets': {
                'images': 'arnese/assets/img/',
                'pdfs': 'arnese/assets/pdf/'
            }
        };

    }

}
