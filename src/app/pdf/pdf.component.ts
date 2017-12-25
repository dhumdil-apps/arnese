import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pdf',
    templateUrl: './pdf.view.html',
    styleUrls: ['./pdf.style.scss']
})

export class PDFComponent
{
  @Input() item;
}
