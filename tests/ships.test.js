const Ship = require('../src/ships.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');


describe('constructor', () => {

    xit('returns if ship/port is an object', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port])
        const cruiseShip = new Ship('Titanic', itinerary);
        
        expect(cruiseShip).toBeInstanceOf(Object);
        

    });

    xit('adds a passenger to the ship', () => {
      const port = new Port('Dover');
      const itinerary = new Itinerary([port])
        const cruiseShip = new Ship('Titanic', itinerary)
        additionalPassengers = 16;


        cruiseShip.addPassengers(additionalPassengers);
        expect(cruiseShip.passengers).toEqual(additionalPassengers);
        

      });

    xit('define the starting port', () => {
        const port = new Port('Belfast');
        const itinerary = new Itinerary([port])
        const cruiseShip = new Ship('Titanic', itinerary)
        expect(cruiseShip.currentPort).toEqual(port);

      });


      xit('dock ship', () => {
        const belfast = new Port('Belfast');
        const dover = new Port('Dover');
        const itinerary = new Itinerary([belfast, dover]);
        const cruiseShip = new Ship('Titanic', itinerary);
        
        cruiseShip.Sail();
        cruiseShip.dock();
        expect(cruiseShip.currentPort).toBe(belfast);
        expect(belfast.shipDocked).toContain(cruiseShip);
       
      });

      xit('itinerary is object', () => {
        const port = new Port('Belfast');
        const itinerary = new Itinerary([port])
        const cruiseShip = new Ship('Titanic', itinerary);

        expect(new Itinerary()).toBeInstanceOf(Object);

      });

      it('can set sail', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const cruiseShip = new Ship(itinerary);
      
        cruiseShip.Sail();
    
        expect(cruiseShip.currentPort).toBeFalsy();
        expect(dover.shipDocked).not.toContain([cruiseShip]);
      });

      xit('can\'t sail further than its itinerary', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const cruiseShip = new Ship('Titanic', itinerary);
      
        cruiseShip.Sail();
        cruiseShip.dock();
      
        expect(() => cruiseShip.Sail()).toThrowError('End of itinerary reached');
      });

      xit('add ship to a port', () => {
        const port = new Port('Dover');
        const cruiseShip = {};

        port.addShip(cruiseShip);
        
        expect(port.shipDocked).toContain(cruiseShip);
        
      });

      xit('remove ship from a port', () => {
        const port = new Port('Dover');
        const cruiseShip = {};
        const queenMary = {};

        port.addShip(cruiseShip);
        port.addShip(queenMary);
        expect(port.shipDocked).toContain(cruiseShip, queenMary);
        port.removeShip(cruiseShip);

        expect(port.shipDocked).toEqual([queenMary]);

      });


      xit('gets added to port on instantiation', () => {
        const dover = new Port('Dover');
        const itinerary = new Itinerary([dover]);
        const cruiseShip = new Ship('Titanic', itinerary);

        expect(dover.shipDocked).toContain(cruiseShip);
      });

});