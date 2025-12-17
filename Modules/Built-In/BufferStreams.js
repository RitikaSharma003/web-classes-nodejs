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
