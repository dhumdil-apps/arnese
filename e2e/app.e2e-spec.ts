import { ArnesePage } from './app.po';

describe('arnese App', () => {
  let page: ArnesePage;

  beforeEach(() => {
    page = new ArnesePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
