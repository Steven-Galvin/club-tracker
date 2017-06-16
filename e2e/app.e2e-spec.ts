import { ClubTrackerPage } from './app.po';

describe('club-tracker App', () => {
  let page: ClubTrackerPage;

  beforeEach(() => {
    page = new ClubTrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
