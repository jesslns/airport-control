'use strict';

describe("Feature Test:", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

// describe("a plane can land", function() {
  it('planes can be instrcuted to land at an airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane)
  });
});
// describe("A plane can takeoff", function() {
//   it('a plane takeoff', function() {
//     airport.land(plane)
//     console.log()
//     expect(airport.takeoff(plane)).toEqual([])
//   });
// });
