import { DynamicComponentsPage } from './app.po';

describe('dynamic-components App', function() {
  let page: DynamicComponentsPage;

  beforeEach(() => {
    page = new DynamicComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
