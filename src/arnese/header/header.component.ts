import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.html',
    styleUrls: ['./header.less']
})

export class HeaderComponent {

    @Output() activate = new EventEmitter();;

    public activateLink(link: string): void {
        this.activate.emit(link);
    }

}
