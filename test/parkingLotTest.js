let assert = require('assert');
let ParkingLot = require('../main/parkingLot')

describe(`Parking Lot problem Test`, () => {
    it(`given car when car is parked return true `, () => {
        assert.ok(new ParkingLot().park(new Object));
    })

    it(`given car when car not parked should throwing an exception `, () => {
        try {
            assert.ok(new ParkingLot().park());
        } catch (err) {
            assert.equal(err.message, "Car not parked")
        }
    })
})