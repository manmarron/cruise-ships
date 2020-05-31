
class Ships {
    constructor(name, currentPort) {
        this.name = name;
        this.passengers = 0;
        this.setSail = false;
        this.currentPort = currentPort;
        this.prevPort = ''
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
        this.currentPort = false;
        this.nextPort = port.name;
    }
};
module.exports = Ships
