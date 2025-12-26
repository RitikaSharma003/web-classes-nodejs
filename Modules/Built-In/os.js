import os from "node:os";//!using os module we can get the system information
console.log(os);
//!arch 
console.log(os.arch()); //!it returns the architecture of the cpu 
//!console.log(os.arch());
//!cpus()->returns the cores present in the system .
 console.log(os.cpus());

//!totalmem()-> it gives us total RAM present .

console.log(os.totalmem()/(1024*1024*1024).toFixed(2));
//!freemem()->it gives us the free ram present  
console.log(os.freemem()/(1024*1024*1024).toFixed(2));

//!os.hostname-it gives us the ssystem name
console.log(os.hostname())
console.log(os.platform())
console.log(os.constants)


 console.log(os.cpus().length);//no of cores present inthe system

