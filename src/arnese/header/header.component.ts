import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.html',
    styleUrls: ['./header.less']
})

export class HeaderComponent {

    public active: string = 'home';

    @Output() activate = new EventEmitter();

    private activateLink(link: string): void {
        this.activate.emit(link);
    }

    public selectLink(link: string): void {
        this.active = link;
        this.activateLink(link); 
    }

}
