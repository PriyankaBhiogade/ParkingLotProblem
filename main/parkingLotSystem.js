let ParkingLotOwner = require('./ParkingLotOwner')
class ParkingLotSystem {
    park(vehicle) {
        let counter = 0;
        let parkingLotOwner = new ParkingLotOwner();
        if (vehicle === null || vehicle === undefined) {
            throw Error("Car not parked..")
        } else {
            if(counter < 3){
                this.parkVehicle = vehicle;
                counter++;
                return true;
            }else{
                parkingLotOwner.notification()
                throw Error("Parking lot is full....")
            }
        }
    }
        unPark(vehicle) {
            if (this.parkVehicle == vehicle) {
                // this.parkVehicle = null;
                return true;
            }else
                throw Error("Car Not Found..")
        }
    }

module.exports = ParkingLotSystem;