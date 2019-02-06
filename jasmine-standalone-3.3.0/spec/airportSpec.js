'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    plane = jasmine.createSpy('plane',['land']);
    airport = new Airport(weather); // why do i not need weather in brackets?
  }); // use createSpyObj for a mock with multiple spies

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal conditions',function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });
    it('can clear planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane])
    });
    it('can clear planes for takeoff', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]); // use toContain in feature test, to be less specific?
    });
  });

  describe('under stormy conditions',function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });

    it('does not clear planes for landing', function(){
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    });
    it('does not clear planes for takeoff', function(){
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    });
  });
});
