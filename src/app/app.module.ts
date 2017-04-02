import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MainComponent } from '../arnese/main';
import { ContentComponent } from '../arnese/content/content';
import { ProductsComponent } from '../arnese/content/products/products';

@NgModule({
    declarations: [
        AppComponent, MainComponent, ContentComponent, ProductsComponent
    ],
    imports: [
        BrowserModule, FormsModule, HttpModule, BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
