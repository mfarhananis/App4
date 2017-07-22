import { App4Page } from './app.po';

describe('app4 App', () => {
  let page: App4Page;

  beforeEach(() => {
    page = new App4Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
