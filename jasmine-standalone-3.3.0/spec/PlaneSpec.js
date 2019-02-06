'use strict';


describe('Plane',function(){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeOff']);
  }); // use createSpyObj for a mock with multiple spies
  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
  it('can takeoff from an airport', function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });
});

// is weather spec does not need to change due delegation to weather object.
// weather object was delegated from airport objecct
