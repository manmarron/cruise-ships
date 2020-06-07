const Ship = require('../src/ships.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
    it('can be installed', () => {
        const dover = new Port('Dover');
        const calais = new Port('calais');
        const itinerary = new Itinerary([dover, calais])
        expect(new Ship(itinerary)).toBeInstanceOf(Object);
    })

    it('dock at a new port', () => {
        const dover = new Port('Dover');
        const itinerary = new Itinerary([dover])
        const ship = new Ship(itinerary);
        expect(dover.shipDocked).toContain(ship)
    })

})

describe('Ship DRY', () => {
    let ship;
    let dover;
    let calais;
    let itinerary;
    
    beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port('Calais');
        itinerary = new Itinerary([dover, calais]);
        ship = new Ship(itinerary);
    })
    
    it('has a starting point', () => {
        expect(ship.currentPort).toBe(dover);
    })

    it('set sail', () => {
        ship.setSail();
        expect(ship.currentPort).toBefFalsy;
        expect(dover.shipDocked).not.toContain(ship);
    })

    it('dock at a new port', () => {
        ship.setSail();
        ship.dock()
        expect(calais.shipDocked).toContain(ship)
        //expect(ship.setSail()).toThrowError('End of itinerary reached')
    })
})