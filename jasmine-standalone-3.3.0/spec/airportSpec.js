describe("Airport", function() {
  var airport

  beforeEach(function() {
    airport = new Airport();
    plane = 'Airbus303'
  });

describe("a plane can land", function() {
  it('shows a landed plane', function() {
    expect(airport.land(plane)).toEqual([plane])
  });
});
describe("A plane can takeoff", function() {
  it('a plane takeoff', function() {
    airport.land(plane)
    console.log()
    expect(airport.takeoff(plane)).toEqual([])
  });
});

});
