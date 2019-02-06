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
    spyOn(Math,'random').and.returnValue(0); //in JS, the object 0 has an in
    expect(weather.isStormy()).toBeFalsy();
  });

});
