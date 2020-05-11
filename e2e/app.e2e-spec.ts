import { NghrayrDemoPage } from './app.po';

describe('ng-hrayrDemo App', () => {
  let page: NghrayrDemoPage;

  beforeEach(() => {
    page = new NghrayrDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
