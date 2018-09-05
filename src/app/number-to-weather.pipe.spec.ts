import { NumberToWeatherPipe } from './number-to-weather.pipe';
 const pipe = new NumberToWeatherPipe();
describe('NumberToWeatherPipe', () => {
  it('create an instance', () => {
   
    expect(pipe).toBeTruthy();
  });

it('transform kontrolü',()=>{
expect(pipe.transform(0)).toEqual('veysel');
expect(pipe.transform(1)).toEqual('yagmur');
expect(pipe.transform(2)).toEqual(2);
});

});
