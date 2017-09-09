import { NestedDemoPage } from './app.po';

describe('nested-demo App', () => {
  let page: NestedDemoPage;

  beforeEach(() => {
    page = new NestedDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
