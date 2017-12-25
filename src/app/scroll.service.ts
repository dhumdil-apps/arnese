import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class ScrollService
{
  constructor(private ngZone: NgZone)
  {}

  private scrollUp(position: number, now: number): void
  {
    now -= Math.ceil((now - position) / 10 + 10);

    if (position < now)
    {
      window.scrollTo(0, now);
      requestAnimationFrame(() => this.scrollUp(position, now));
    }
    else
    {
      window.scrollTo(0, position);
    }
  }

  private scrollDown(position: number, now: number)
  {
    now += Math.ceil((position - now) / 10 + 10);

    if (position > now)
    {
      window.scrollTo(0, now);
      requestAnimationFrame(() => this.scrollDown(position, now));
    }
    else
    {
      window.scrollTo(0, position);
    }
  }

  public scrollTo(position: number): void
  {
    this.ngZone.runOutsideAngular(() =>
    {
      let now = window.pageYOffset;

      if (position < now)
      {
        requestAnimationFrame(() => this.scrollUp(position, now));
      }
      else if (position > now)
      {
        requestAnimationFrame(() => this.scrollDown(position, now));
      }
    });
  }
}
