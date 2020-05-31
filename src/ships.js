
class Ships {
    constructor(name, currentPort) {
        this.name = name;
        this.passengers = 0;
        this.status = 'docked';
        this.setSail = false;
        this.currentPort = currentPort;
    };

    dock(port) {
        this.currentPort = port.name;
        this.setSail = false;
    };

    addPassengers(noOfPassengers) {
        this.passengers += noOfPassengers;
    }
    Sail() {
        this.setSail = true;
    }
};
module.exports = Ships
