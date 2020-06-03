
class Ships {
    constructor(name, currentPort) {
        this.name = name;
        this.passengers = 0;
        this.setSail = false;
        this.currentPort = currentPort;
        this.prevPort = null;
    };

    dock(port) {
        this.currentPort = port.name;

        this.setSail = false;
    };

    addPassengers(noOfPassengers) {
        this.passengers += noOfPassengers;
    }
    Sail(port) {
        this.setSail = true;
        this.prevPort = this.currentPort;
        this.currentPort = null;
        this.nextPort = port.nextPort;
    }
};
module.exports = Ships
