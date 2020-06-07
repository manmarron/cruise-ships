const Ship = require('../src/ships.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Itinerary', () => {
    it('can be installed', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    })

    it('can be installed', () => {
        const dover = new Port('Dover')
        const belfast = new Port('Belfast')
        const itinerary = new Itinerary([dover,belfast])
        expect(itinerary.ports).toEqual([dover,belfast]);
    })
})