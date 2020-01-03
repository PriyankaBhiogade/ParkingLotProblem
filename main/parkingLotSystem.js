// let ParkingLotOwner = require('./ParkingLotOwner');
// let AirportSecurity = require('./AirportSecurity');
// let notification = require('../main/notification')

let events = require('events').EventEmitter;
var emitter = new events.EventEmitter();
class ParkingLotSystem{
    parkVehicle = [];
    capacity = 1;

    constructor() {
        // super();
        // this.parkingLotOwner = parkingLotOwner;
        // this.airportSecurity = airportSecurity
    }
    park(vehicle,parkingLotOwner) {
        // let parkingLotOwner = new ParkingLotOwner()
        // let airportSecurity = new AirportSecurity();
        // let notification = new Notification();
        if(vehicle === null || vehicle === undefined) {
            throw Error("Car not parked..")
        } else {

            if (this.isFull()) {

                this.parkVehicle.push(vehicle);
                return true;
            } else {
                // notification.on("parkingLotOwner", () => console.log(`Notify to ${parkingLotOwner}`))
                // notification.object(parkingLotOwner);
                
                emitter.emit('parkingLotOwner',parkingLotOwner);

                // parkingLotOwner.notification();
                // airportSecurity.notification();
                // throw Error("Parking lot is full....")
            }
        }
    }

    unPark(vehicle) {
        return this.parkVehicle.map(data => {
            if (!this.isEmpty() && data == vehicle) {
                this.parkVehicle.pop();
                return true;
            } else
                throw Error("Car Not Found..")
        })
    }

    isFull() {
        return this.parkVehicle.length <= this.capacity;
    }

    isEmpty() {
        return this.parkVehicle.length == 0;
    }
}
module.exports = ParkingLotSystem;