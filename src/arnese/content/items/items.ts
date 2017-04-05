import { Component, ViewChild, HostListener } from '@angular/core';

import { ITEMS } from './item/item.model';

@Component({
    selector: 'app-items',
    templateUrl: './items.html',
    styleUrls: ['./items.less']
})

export class ItemsComponent {

    public main: any;

    @ViewChild('container') container;

    @HostListener('window:resize', ['$event']) onResize() {
        this.main.width = this.container.nativeElement.offsetParent.clientWidth;
    }

    constructor() {

        this.main = {
            'items': ITEMS,
            'width': 0
        };

    }

}
