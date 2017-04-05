import { Component, ViewChild, HostListener, OnInit, Input } from '@angular/core';

import { ITEMS } from './item/item.model';

@Component({
    selector: 'app-items',
    templateUrl: './items.html',
    styleUrls: ['./items.less']
})

export class ItemsComponent implements OnInit {

    public main: any;

    @Input() section;

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
