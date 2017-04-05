import { Component, ViewChild, HostListener, OnInit } from '@angular/core';

import { ITEMS } from './item/item.model';

@Component({
    selector: 'app-items',
    templateUrl: './items.html',
    styleUrls: ['./items.less']
})

export class ItemsComponent implements OnInit {

    public main: any;

    @ViewChild('container') container;

    @HostListener('window:resize', ['$event']) onResize() {
        this.resize();
    }

    constructor() {
        this.main = {
            'items': ITEMS,
            'width': 0
        };
    }

    ngOnInit() {
        this.resize();
    }

    private resize(): void {
        this.main.width = this.container.nativeElement.offsetParent.clientWidth;
    }

}
