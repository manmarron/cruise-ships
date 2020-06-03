
class Ship {
    constructor(name, itinerary) {
        this.name = name;
        this.passengers = 0;
        this.setSail = false;
        this.itinerary = itinerary;
        this.currentPort = itinerary.ports[0];
        this.prevPort = null;
    };

    dock() {
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.prevPort);
      
        this.currentPort = itinerary.ports[previousPortIndex + 1];
    };

    addPassengers(noOfPassengers) {
        this.passengers += noOfPassengers;
    }
    Sail() {

        const itinerary = this.itinerary;
        const currentPortIndex = itinerary.ports.indexOf(this.currentPort);
      
        if (currentPortIndex === (itinerary.ports.length - 1)) {
          throw new Error('End of itinerary reached');
        }
      
        this.previousPort = this.currentPort;
        this.currentPort = null;

        this.setSail = true;


        
    }
};
module.exports = Ship
