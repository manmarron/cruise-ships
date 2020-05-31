const Ships = require('../src/ships.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');


describe('constructor', () => {

    xit('returns if ship/port is an object', () => {
        const port = new Port('Dover');
        const cruiseShip = new Ships('Titanic', port.name);
        
        expect(new Port('Dover')).toBeInstanceOf(Object);
        expect(cruiseShip.currentPort).toBe('Dover')

    });

    xit('adds a passenger to the ship', () => {
        const cruiseShip = new Ships('Titanic')
        additionalPassengers = 16;


        cruiseShip.addPassengers(additionalPassengers);
        expect(cruiseShip.passengers).toEqual(additionalPassengers);
        

      });

    xit('define the starting port', () => {
        const port = new Port('Belfast');
        const cruiseShip = new Ships('Titanic', port)
        expect(cruiseShip.currentPort).toEqual(port);

      });

      xit('set sail', () => {
        const port = new Port('Belfast');
        const cruiseShip = new Ships('Titanic', port)
        
        cruiseShip.Sail();
        expect(cruiseShip.setSail).toBeTruthy();

      });

      xit('dock ship', () => {
        const Belfast = new Port('Belfast');
        const Dover = new Port('Dover');
        const cruiseShip = new Ships('Titanic', Belfast.name)
        
        cruiseShip.dock(Dover);
        expect(cruiseShip.setSail).toBeFalsy();
        console.log(cruiseShip.currentPort.name);
        expect(cruiseShip.currentPort).toBe('Dover');
      });

      it('itinerary', () => {
        const itinerary = new Itinerary('Dover');
        const port = new Port('Dover');
        const cruiseShip = new Ships('Titanic', port.name);


        expect(new Itinerary()).toBeInstanceOf(Object);

      });

      it('itinerary - set sail - change prev port to curr port. set next port', () => {
        const itinerary = new Itinerary('Dover');
        const Belfast = new Port('Belfast');
        const port = new Port('Dover');
        const cruiseShip = new Ships('Titanic', port.name);

        cruiseShip.Sail(Belfast);
        expect(cruiseShip.setSail).toBeTruthy();
        console.log(cruiseShip.nextPort);
        console.log(cruiseShip.currentPort);
        console.log(cruiseShip.prevPort);
      });

});