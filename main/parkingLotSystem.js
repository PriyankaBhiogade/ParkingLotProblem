let ParkingLotOwner = require('./ParkingLotOwner');
let AirportSecurity = require('./AirportSecurity');

class ParkingLotSystem {
    parkVehicle = [];
    capacity = 1;

    park(vehicle) {
        let parkingLotOwner = new ParkingLotOwner()
        let airportSecurity = new AirportSecurity();
        if (vehicle === null || vehicle === undefined) {
            throw Error("Car not parked..")
        } else {
            if (this.isFull()) {
                this.parkVehicle.push(vehicle);
                return true;
            } else {
                parkingLotOwner.notification();
                airportSecurity.notification();
                throw Error("Parking lot is full....")
            }
        }
    }

    unPark(vehicle) {
        if (!this.isEmpty()) {
            this.parkVehicle.pop();
            return true;
        } else
            throw Error("Car Not Found..")
    }

    isFull() {
        return this.parkVehicle.length <= this.capacity;
    }

    isEmpty() {
        return this.parkVehicle.length == 0;
    }
}

module.exports = ParkingLotSystem;