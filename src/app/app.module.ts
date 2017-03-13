import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// arnese
import { MainComponent } from '../arnese/main.component';
import { HeaderComponent } from '../arnese/header/header.component';
import { FooterComponent } from '../arnese/footer/footer.component';
import { ProductService } from '../arnese/products/products.service';

// ng2-pdf-viewer
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
        FooterComponent,
        PdfViewerComponent
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
