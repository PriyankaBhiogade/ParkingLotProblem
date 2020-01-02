let assert = require('assert');
let ParkingLot = require('../main/parkingLotSystem')


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

    it(`given car for park when want to unPark that car but car not fund should throwing an exception`, () => {
        try {
            let car1 = new Object();
            parkingLot.park(car1);
            parkingLot.unPark();
        } catch (err) {
            assert.equal(err.message, "Car Not Found..")
        }
    })

    it(`given car for park when car not fund should throwing an exception`, () => {
        try {
            let car1 = new Object();
            assert.ok(parkingLot.unPark(car1));
        }catch(err){
            assert.equal(err.message,"Car Not Found..")
        }
    })

    it(`given car for park when car not fund should throwing an exception`, () => {
        try {
            let car1 = new Object();
            parkingLot.unPark(car1);
        }catch(err){
            assert.equal(err.message,"Car Not Found..")
        }
    })

    it(`given cars for park when car parking is full should throwing an exception`, () => {
        try {
            let car = [ new Object(),new Object(),new Object()];
            car.map(car => {
               parkingLot.park(car);
            })
        }catch(err){
            assert.equal(err.message,"Parking lot is full....")
        }
    })
})