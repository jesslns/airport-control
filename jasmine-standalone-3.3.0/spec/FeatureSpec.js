'use strict';

describe("Feature Test:", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

it('planes can be instructed to land at an airport', function(){
  plane.land(airport);
  expect(airport.planes()).toContain(plane);
});

it('planes can be instructed to takeoff', function(){
    plane.land(airport)
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

it('stops takeoff when stormy', function(){
  plane.land(airport)
  spyOn(airport,'isStormy').and.returnValue(true);
  expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
  expect(airport.planes()).toContain(plane);
});

it('stops landing when stormy', function(){
  spyOn(airport,'isStormy').and.returnValue(true);
  expect(function(){ plane.land(airport);}).toThrowError('cannot land during storm');
  expect(airport.planes()).not.toContain(plane);
});
});
