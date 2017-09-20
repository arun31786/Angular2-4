import { TesingNg2Page } from './app.po';

describe('tesing-ng2 App', () => {
  let page: TesingNg2Page;

  beforeEach(() => {
    page = new TesingNg2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to My App!!');
  });
});
