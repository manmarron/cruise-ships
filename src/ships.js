
function Ships(name, port) {
    this.name = name;
    this.passengers = 0;
    this.startingPort = port
};

Ships.prototype.addPassengers = function(noOfPassengers) {
    this.passengers += noOfPassengers;
};




module.exports = Ships
