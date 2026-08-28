//EventEmitter is class
//emit("event param") : trigger/create/fire and on("event emit param")
const EventEmitter=require("events");
// const event=new EventEmitter();
// event.on("greet",()=>{
//     console.log("this is event emitter");
// })
// event.emit("greet");

class MyEmitter extends EventEmitter{}
const event=new MyEmitter()
event.on("greet",()=>{
    console.log("hello ${msg}");//Template literals: ${var}
}) 
event.emit("greet","cse 21");
