// const EventEmitter = require("events").EventEmitter;

var events = require('events').EventEmitter;
var emitter = new events.EventEmitter();

emitter.on('parkingLotOwner', (person) =>{
    console.log("dadaddadadadad")
    console.log(`Notify to ${person}`)
} )

// emitter.emit("parkingLotOwner","datad")
// class Notification extends EventEmitter {

//     checkPerson(data) {
//         if (data == this.parkingLotOwner)
//             this.emit("parkingLotOwner", data);
//         else
//             this.emit("airportSecurity", data);

//     }
// }
// const object = () => {
//     let notification = new Notification()
//     notification.on(parkingLotOwner, () => console.log(`Notify to ${parkingLotOwner}`))
//     notification.checkPerson(parkingLotOwner)
// }
// object();
// module.exports = Notification