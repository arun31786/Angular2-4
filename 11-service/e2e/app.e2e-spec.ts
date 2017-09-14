import { PipeDemoPage } from './app.po';

describe('pipe-demo App', () => {
  let page: PipeDemoPage;

  beforeEach(() => {
    page = new PipeDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
