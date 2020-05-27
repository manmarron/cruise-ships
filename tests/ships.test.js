const Ships = require('../src/ships');


describe('constructor', () => {

    it('returns if ship is an object', () => {
        const cruiseShip = new Ships('Titanic')
        expect(new Ships('Titanic')).toBeInstanceOf(Object);
    });

    it('adds a passenger to the ship', () => {
        const cruiseShip = new Ships('Titanic')
        additionalPassengers = 16;


        cruiseShip.addPassengers(additionalPassengers);
        expect(cruiseShip.passengers).toEqual(additionalPassengers);
        

      });

    it('define the starting port', () => {
        portPassedthrough = 'Dublin';
        const cruiseShip = new Ships('Titanic', portPassedthrough)
        
        expect(cruiseShip.startingPort).toEqual(portPassedthrough);
        console.log(cruiseShip.name)
        console.log(cruiseShip.passengers)
        console.log(cruiseShip.startingPort)
      });

});