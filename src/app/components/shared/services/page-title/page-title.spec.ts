import {PageTitleService} from './page-title';


describe('PageTitleService', () => {
  const service: PageTitleService = new PageTitleService();

  it('should initialize title to empty string', () => {
    expect(service._title).toEqual('');
    expect(service.title).toEqual('');
  });
});
