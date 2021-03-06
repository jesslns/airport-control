'use strict'

describe('Weather', function(){
  var weather;
  beforeEach(function(){
    weather = new Weather();
  });
  it('generates stormy weather by chance', function(){
    spyOn(Math,'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });
  it('generates non-stormy weather by chance', function(){
    spyOn(Math,'random').and.returnValue(0); 
    expect(weather.isStormy()).toBeFalsy();
  });

});
