import { ToLowerCasePipe } from './to-lower-case.pipe';

describe('ToLowerCasePipe', () => {
     const pipe = new ToLowerCasePipe(); 
  it('create an instance', () => {

    expect(pipe).toBeTruthy();
  });
  it('ToloweCasePipe test', () => {
   
    expect(pipe.transform('veysel')).toEqual('VEYSEL');
  });

});
