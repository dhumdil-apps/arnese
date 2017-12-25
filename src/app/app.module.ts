import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GlobalsService } from './globals.service';
import { ScrollService } from './scroll.service';

import { PDFComponent } from './pdf/pdf.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    PDFComponent,
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    GlobalsService,
    ScrollService
  ]
})

export class AppModule
{}
