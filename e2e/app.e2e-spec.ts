import { NhlPage } from './app.po';

describe('nhl App', () => {
  let page: NhlPage;

  beforeEach(() => {
    page = new NhlPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
