let assert = require('assert');
let ParkingLot = require('../main/parkingLot')


describe(`Parking Lot problem Test`, () => {
    let parkingLot;
    beforeEach(() => {
        parkingLot = new ParkingLot();
    })

    it(`given car when car is parked should return true `, () => {
        assert.ok(parkingLot.park(new Object));
    })

    it(`given car when car not parked should throwing an exception `, () => {
        try {
            assert.ok(parkingLot.park());
        } catch (err) {
            assert.equal(err.message, "Car not parked..")
        }
    })

    it(`given car when parked car is un parked should return true`, () => {
        let car = new Object();
        parkingLot.park(car);
        assert.ok(parkingLot.unPark(car));
    })

    it(`given car when that car not found should throwing an exception`, () => {
        try {
            let car1 = new Object();
            let car2 = new Object();
            parkingLot.park(car1);
            assert.ok(parkingLot.unPark(car2));
        }catch(err){
            assert.equal(err.message,"Car Not Found..")
        }
    })
})