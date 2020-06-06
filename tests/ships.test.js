const Ship = require('../src/ships.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');



describe('with ports and an itinerary', () => {

  let ship;
  let dover;
  let calais;
  let itinerary;

  beforeEach(() => {
    dover = new Port('Dover');
    calais = new Port('Calais');
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);
  });

  it('can be instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    expect(ship.currentPort).toBe(dover);
  });

  it('can set sail', () => { 
    ship.Sail();

    expect(ship.currentPort).toBeFalsy();
    expect(dover.shipDocked).not.toContain([ship]);
  });

  it('gets added to port on instantiation', () => {
    expect(dover.shipDocked).toContain(ship);
  });
});

describe('constructor', () => {
  let ship;
  let dover;
  let calais;
  let itinerary;
  let queenMary;
  let titanic;

  beforeEach(() => {
    dover = new Port('Dover');
    calais = new Port('Calais');
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);
    queenMary = {};
    titanic = {};
    
  });


    it('adds a passenger to the ship', () => {

      additionalPassengers = 16;

      ship.addPassengers(additionalPassengers);
      expect(ship.passengers).toEqual(additionalPassengers);
        
      });


      it('dock ship', () => {
        
        ship.Sail();
        ship.dock();
        expect(ship.currentPort).toBe(dover);
        expect(dover.shipDocked).toContain(ship);
       
      });

      it('itinerary is object', () => {
        

        expect(new Itinerary([dover])).toBeInstanceOf(Object);

      });


      xit('can\'t sail further than its itinerary', () => {
      
        ship.Sail();
        ship.dock();
      
        expect(() => ship.Sail()).toThrowError('End of itinerary reached');
      });

      it('add ship to a port', () => {

        dover.addShip(ship);        
        expect(dover.shipDocked).toContain(ship);
        
      });

      it('remove ship from a port', () => {
        
       
        dover.addShip(titanic)
        dover.addShip(queenMary)

        expect(dover.shipDocked).toContain(titanic, queenMary);
        dover.removeShip(titanic);

        expect(dover.shipDocked).toEqual([queenMary]);

      });



});

