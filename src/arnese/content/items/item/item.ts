import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-item',
    templateUrl: './item.html',
    styleUrls: ['./item.less']
})

export class ItemComponent {

    public assets: any;

    @Input() item;
    @Input() width;
    @Input() w;
    @Input() h;

    constructor() {

        this.assets = {
            'images': 'arnese/assets/img/',
            'pdfs': 'arnese/assets/pdf/'
        };

    }

    public size(scale: number): number {
        return this.width / 5 * scale;
    }

}
