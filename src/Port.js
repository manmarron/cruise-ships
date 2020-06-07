
class Port{
    constructor(portName){
        this.name = portName;
        this.shipDocked = [];
    }
    addShip(ship) {
      
        this.shipDocked.push(ship)
    }
    removeShip(ship){
        this.shipDocked = this.shipDocked.filter(item => item !== ship);
       
    }
};



module.exports = Port;