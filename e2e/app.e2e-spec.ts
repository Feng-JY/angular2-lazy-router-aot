import { AngularAotRoutingPage } from './app.po';

describe('angular-aot-routing App', function() {
  let page: AngularAotRoutingPage;

  beforeEach(() => {
    page = new AngularAotRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
