
function Ships(name, port) {
    this.name = name;
    this.passengers = 0;
    /* create extra class for ports(multiple) */
    this.port = port;
    this.status = 'docked';
    this.setSail = false;

};

Ships.prototype.addPassengers = function(noOfPassengers) {
    this.passengers += noOfPassengers;
};

Ships.prototype.Sail = function() {
    this.setSail = true;
    this.port = "";
};

Ships.prototype.dockShip = function(newPort) {
    this.setSail = false;
    this.port = newPort;
};



module.exports = Ships
