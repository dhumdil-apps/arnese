import { Component, ViewChild } from '@angular/core';

import { ITEMS } from './item.model';

@Component({
    selector: 'app-items',
    templateUrl: './items.html',
    styleUrls: ['./items.less']
})

export class ItemsComponent {

    public main: any;

    @ViewChild('container') container;

    constructor() {

        this.main = {
            'items': ITEMS,
            'assets': {
                'images': 'assets/img/',
                'pdfs': 'assets/pdf/'
            },
        };

    }

    public size(scale: number): number {
        return this.container.nativeElement.offsetParent.clientWidth / 5 * scale;
    }

}
