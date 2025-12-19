//!-----------------------------------------Buffer and Streams------------------------------------------------

//?use of buffer- it is like an array which is fixed in size and it stores data in binary form .
//* once a buffer is created it's size cannot be modified .
//* in node js we can assign the size of buffer but after that we cannot change it .
//* once an operation is done then the buffer is destroyed .
//* buffer is used to store the data coming into small chunks.It is temporary storage inside ram .
//* without buffer we cannot used streams.

//? network usage will be more .
//? loading time will be more.
//? Ram usage increases .
//?we are reading complete file and then storing that in ram . Buffer is called where ram stored .

//!Streams: - It is the process of sending data from source to destination  into continuous chunks .
//! It is most efficient
//!1. time taken is less
//!2.network usage is less
//!3.ram usage is less.

//*---------------------------------buffer is a global object--------------------------------
let buffer1 = Buffer.from("NodeJS"); //for passing the size using string here buffer size is become 6 and it is fixed
console.log(buffer1);
console.log(buffer1.toJSON());
buffer1.write("something"); //this is used to change the content of the buffer but buffer size is fixed so it will take the size - 6 only.

console.log(buffer1.toJSON());
console.log(buffer1.toString());
console.log("N".charCodeAt(0));

let buffer2 = Buffer.alloc(5); //using no we have to allocate size
console.log(buffer2);
buffer2.write("something");
console.log(buffer2);
console.log(buffer2.toString());
// default file size -64kb

let buffer3 = Buffer.alloc(20);
buffer3.write("       hello i am good");

console.log(buffer3.toString());
console.log(buffer3.toJSON());

//!allocUnsafe- performance priority

//?------------------------------Streams---------------------------------------------------------------------

//*IN node js we have four different streams:
//!Readable Stream->using  this we can read data in continuous chunks.
//!Writable Streams:-using this we can write data in continuous chunks
//!Duplex Streams-> using this we can write and read operation are performed parallely .
//!transform Streams-> it is similar to duplex but data can be modified.(used for compression - zlib)

//?fs-createReadStream , createWriteStream

import { createReadStream, createWriteStream } from "fs";
// createReadStream("path of the file","encoding ")

// let res=createReadStream("./fs.js","utf-8");
//console.log(res);//event ->readStreamevent

// *createReadStream(),internally emits an event named "data " and we can register or execute it using on method
//?emit("event-name","data to be passed in chunk coming from fs.js file") ->using emit method we can create an event .(for backend)

//?on("event name that is to be excuted",(callback)=>{}) -> we define what to do next.
// res.on("data",(chunk)=>{console.log("file read")
//     console.log(chunk)
// });

// let payload =createReadStream("./fs.js",{
//     highWaterMark:100, //*chunk size:100 bytes (tell thresshold)  default-64kb (64*1024) bytes
//     encoding:"utf-8",

// });
// payload.on("data",(chunk)=>{
// console.log(`chunk size ->${chunk.length}`);
// console.log("==================================");
// console.log(`chunk->${chunk}`);

// })

let res1 = createWriteStream("./demo.txt");
console.log(res1);
res1.write("this is my first chunk", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("chunk added");
});

import fs from "fs";
import { get } from "http";

//? Duplex Streams
let read = fs.createReadStream("./fs.js", {
  highWaterMark: 10,
  encoding: "utf-8",
});

 let write = fs.createWriteStream("./demo.txt");
// //?pipe()-> it connects  read to write
// //?source(readable stream).pipe(destination/writable stream)
// read.pipe(write);

// read.on("data", (chunk) => {
//   console.log("reading chunk");

// write.write(chunk, (err) => {
//   if (err) console.log(err);
//   console.log("chunk wirting");
// });
// });


//?transform-modify
// read.on("data", (chunk) => {
//   console.log("reading chunk");
// let uppercasechunk=chunk.toUpperCase();

// write.write(uppercasechunk, (err) => {
//   if (err) console.log(err);
//   console.log("chunk wirting");
// });
// });


//? we use multiple pipe to tranform or to do modification
// function toUppercase(chunk){
// let uppercase=chunk.toUppercase();
// return uppercase;

// }
//read.pipe(toUppercase).pipe(write) //like this but to implement this we need our own streams.






//!each time along with Response,  server is sending status code
//?1xx->processing
//?2xx->success
//?3xx->redirected
//?4xx->clientside error
//?5xx->server side error
//*201 code ->default message ->ok and created  
//*404 code->default message-> not found 


//?server-accepts the request , process the request and then sends back the response

//*HTTp- It is built in module it is used to create server 
//?client(ui layer, presentation layer)
//?server(application layer,business layer)

//!We have to send the content-type to let the browser know what type of adata is coming from server this will help browser to render the data on the UI.
//* 1.html data -> text/html
//* 2.css data -> text/css 
//* 3.json data -> application/json 
//*js file -> application/js

//?We have certian http methods which defines the nature of request
//!1. to get/fetch resource from server ->get 
//!2.to send data to the server ->post 
//!3. to delete some source ->delete 
//!4. to updated a resource  ->put and patch 