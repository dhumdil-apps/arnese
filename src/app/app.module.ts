import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// arnese
import { MainComponent } from '../arnese/main.component';
import { HeaderComponent } from '../arnese/header/header.component';
import { ContentComponent } from '../arnese/content/content.component';
import { PdfComponent } from '../arnese/content/pdf/pdf.component';
import { FooterComponent } from '../arnese/footer/footer.component';
import { ProductService } from '../arnese/products/products.service';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
        ContentComponent,
        PdfComponent,
        FooterComponent
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
