
class ParkingLot {
    park(vehicle) {
        if (vehicle === null || vehicle === undefined) {
            throw Error("Car not parked")
        }
        else {
            this.parkVehicle = vehicle;
            return true;
        }
    }
}
module.exports = ParkingLot;