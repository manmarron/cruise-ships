var ships = [];
class Port{
    constructor(portName){
        this.name = portName;
        this.shipDocked = ships;
    }
    addShip(ship) {
        ships.push(ship)
        this.shipDocked = ships;
    }
    removeShip(ship){
        this.shipDocked = ships.filter(item => item == ship);
    }
};



module.exports = Port;