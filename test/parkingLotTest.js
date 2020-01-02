let assert = require('assert');
let ParkingLot = require('../main/parkingLot')

describe(`Parking Lot problem Test`, () => {
    it(`given car when car is parked return true  `, () => {
        assert.ok(new ParkingLot().park(new Object));
    })
})