import {PageHeaderService} from './page-header';


describe('PageHeaderService', () => {
  const service: PageHeaderService = new PageHeaderService();

  it('should initialize title to empty string', () => {
    expect(service._title).toEqual('');
    expect(service.title).toEqual('');
  });
});
