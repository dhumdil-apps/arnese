import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { MainComponent } from '../arnese/main.component';
import { ContentComponent } from '../arnese/content/content.component';

@NgModule({
    declarations: [
        AppComponent, MainComponent, ContentComponent
    ],
    imports: [
        BrowserModule, FormsModule, HttpModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
