import { AngularTestePage } from './app.po';

describe('angular-teste App', () => {
  let page: AngularTestePage;

  beforeEach(() => {
    page = new AngularTestePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
