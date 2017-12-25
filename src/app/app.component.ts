import { Component, ChangeDetectorRef, AfterViewInit, HostListener, ViewChild } from '@angular/core';
import { GlobalsService } from './globals.service';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.view.html',
  styleUrls: ['app.style.scss']
})

export class AppComponent implements AfterViewInit
{
  public size: number;
  public width: number;
  public height: number;
  public section: number;
  public homeOpacity: number;
  public homeTransform: number;

  @ViewChild('page') page;

  @HostListener('window:resize') onResize() {
    this.handleResize();
  }

  @HostListener('window:scroll') onScroll() {
    this.handleScroll();
  }

  constructor(
    private cdr: ChangeDetectorRef,
    public globals: GlobalsService,
    private scroll: ScrollService
  ) {}

  ngAfterViewInit()
  {
    this.handleScroll();
    this.handleResize();
    this.cdr.detectChanges();
  }

  private handleResize(): void
  {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.size = (this.width / 5);
  }

  public handleScroll(): void
  {
    let y = window.pageYOffset;
    let h = Math.floor(this.height);

    this.homeOpacity = 0;
    if (y < 100)
    {
      this.homeOpacity = 1 - (y / 100);
      this.section = 1;
    }
    else if (y < (h + 100))
    {
      this.section = 2;
    }
    else
    {
      if (y < (this.page.nativeElement.offsetHeight + h + 50))
      {
        this.section = 3;
      }
      else
      {
        this.section = 4;
      }
    }
  }

  public scrollTo(section: string): void
  {
    switch (section)
    {
      case 'home':
      {
        this.scroll.scrollTo(0);
        break;
      }
      case 'about':
      {
        this.scroll.scrollTo(100);
        break;
      }
      case 'products':
      {
        this.scroll.scrollTo((this.height + 100));
        break;
      }
      case 'contact':
      {
        this.scroll.scrollTo((this.page.nativeElement.offsetHeight + Math.floor(this.height + 100)));
        break;
      }
      default: break;
    }
  }

  public sizeW(scale: number): string
  {
    if (this.width < 1024)
    {
      return ('100%');
    }
    return (this.size * scale) + 'px';
  }

  public sizeH(scale: number): string
  {
    if (this.width < 1024)
    {
      return ('auto');
    }
    return (this.size * scale) + 'px';
  }
}
