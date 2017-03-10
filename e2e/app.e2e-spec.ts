import { HeadQuarterPage } from './app.po';

describe('head-quarter App', () => {
  let page: HeadQuarterPage;

  beforeEach(() => {
    page = new HeadQuarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
