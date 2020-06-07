const Ship = require('../src/ships.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Port', () => {
    it('can be installed', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })
})

describe('Ship DRY', () => {
    let port;
    
    beforeEach(() => {
        port = new Port('Dover');
    })

    it('can be installed', () => {
        expect(port.name).toBe('Dover');
    })

    it('can add a ship', () => {
        const ship = jest.fn();
        port.addShip(ship);
        expect(port.shipDocked).toContain(ship);
    })

    it('can remove a ship', () => {
        const titanic = jest.fn();
        const queenMary = jest.fn()
        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);
        expect(port.shipDocked).toContain(titanic);
    })
})