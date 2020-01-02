class ParkingLot {
    park(vehicle) {
        if (vehicle === null || vehicle === undefined) {
            throw Error("Car not parked..")
        } else {
            this.parkVehicle = vehicle;
            return true;
        }
    }
        unPark(vehicle) {
            if (this.parkVehicle == vehicle) {
                this.parkVehicle = null;
                return true;
            }else
                throw Error("Car Not Found..")
        }
    }

module.exports = ParkingLot;