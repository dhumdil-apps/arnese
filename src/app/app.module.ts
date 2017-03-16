import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// arnese
import { MainComponent } from '../arnese/main.component';
// 1st
import { HeaderComponent } from '../arnese/header/header.component';
import { ContentComponent } from '../arnese/content/content.component';
import { FooterComponent } from '../arnese/footer/footer.component';
// 2nd
import { ProductsComponent } from '../arnese/content/products/products.component';
import { ProductService } from '../arnese/content/products/products.service';
// 3rd
import { PdfComponent } from '../arnese/content/products/pdf/pdf.component';
import { AboutComponent } from '../arnese/content/about/about.component';
import { ContactComponent } from '../arnese/content/contact/contact.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
        ContentComponent,
        FooterComponent,
        ProductsComponent,
        PdfComponent,
        AboutComponent,
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
