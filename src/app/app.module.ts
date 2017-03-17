import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// components
import { MainComponent } from '../arnese/main.component';

import { HeaderComponent } from '../arnese/header/header.component';
import { ContentComponent } from '../arnese/content/content.component';
import { FooterComponent } from '../arnese/footer/footer.component';

import { ProductsComponent } from '../arnese/content/products/products.component';
import { HomeComponent } from '../arnese/content/home/home.component';

import { PdfComponent } from '../arnese/content/products/pdf/pdf.component';
import { ContactComponent } from '../arnese/content/home/contact/contact.component';

// services
import { ProductService } from '../arnese/content/products/products.service';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
        ContentComponent,
        FooterComponent,
        ProductsComponent,
        HomeComponent,
        PdfComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        ProductService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
