function Airport () {
  this._planes = [];
};


Airport.prototype.land = function(plane) {
  this._planes.push(plane)
  return this._planes
};

Airport.prototype.takeoff = function(plane) {
  this._planes.pop(plane)
  return this._planes
};
