const EventEmitter = require("events").EventEmitter;
class Person extends EventEmitter{
constructor(parkingLotOwner,airportSecurity) {
    super();
    this.parkingLotOwner = parkingLotOwner;
    this.airportSecurity = airportSecurity;
}


checkPerson(data){
    // if(data == this.parkingLotOwner)
        this.emit(data, [...data]);
    // else
    // this.emit("airportSecurity", data);

}


}

const object = () =>{
    let person = new Person("parkinglotowner","airportSecurity")
    person
    .on("parkingLotOwner",() => new ParkingLotOwner().setParkingFull())


}
// console.log("datda",object())
object()
;