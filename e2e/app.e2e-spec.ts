import { FruitcakePage } from './app.po';

describe('fruitcake App', function() {
  let page: FruitcakePage;

  beforeEach(() => {
    page = new FruitcakePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
