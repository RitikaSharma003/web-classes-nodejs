// !fs->file system(this module is used to interact with files and folders present in the os .)
import fs, { readFileSync } from  "node:fs";

//*interactions means crud operation 
//const fs=require("node:fs"); //name of the module
                 //representation 
// console.log(fs);


//? -------=----------------------------------------using fs synchornously--------------------------------------
//?----------------create a file-------------------------
//!1.)create a file
//!2.)method name -> writeFileSync("path/name" ,"data/content")
console.log("1");

// fs.writeFileSync("./demo.csv","this is content of file");
// console.log("filecreated")
// console.log("2");
console.log("1");
//?--------------------------wrrite a file---------------------------------------
fs.writeFileSync("./new.js",`str="hi"`);
fs.writeFileSync("./new.js",`str="helloi"`);
console.log("2"); //! if the file is already present then all the previous data will be over-written .



//?-------------------------Read a file------------------------------
// readFileSync("path","encoding")


//?character set=> each english letter and some special charcters and numbers are reprsented by unique charcter set(number) designated by ASCII (126 character )UNICODE 

//*character encoding  ->while convert int to binary  ,encoding defines how many bits it will store  a value .
// *1byte=8bits


//? why ut-8 is popular ? :- ("utf-8") //?backeward compatibility and variable length encoding .

let read=fs.readFileSync("./new.js","utf-8");
console.log(read);

// {/* <Buffer 6c 65 74 20 75 65 72 6e 6 6d 65 20 3d 20 22 61 62 63 22 3b 0d 0a 6c 65 74 ...60 more bytes></Buffer> */} buffer is an array which stores data in a binary form 

let readable_content=read.toString(); //?default encoding value to string 
//? () is utf-8 (unicode transformation format );
console.log(readable_content);
console.log("end");


let res=fs.readFileSync("../modules.js","utf-8");
console.log(res);
console.log(Buffer.from(res));



//?---------------------------Updating(appending) a file ---------------------------------------
fs.appendFileSync("./new.js",`str2="hello are you"`);
// *using appendFileSync() if the file is not present at the specified path  then it will create new file otherwise it will apned the data at the end of the file .

//?---------------------deleting a file--------------------------------------------------
fs.unlinkSync("./new.js");


//?------------------------create a folder-----------------------------------------
// mkdirSync()
// fs.mkdirSync("./Demo");

//?----------------------------open a folder--------------------------------
// create a folder 
// backend/controller/user.js


// fs.mkdirSync("../../backend"); //?make directory 

// fs.mkdirSync("../.././backend/controller");
// let a=fs.writeFileSync("../../backend/controller/user.js","hello");
// console.log(a);


//* using function ek sath 

//   function createstructure(){
//      fs.mkdirSync("../../backend1");
//  fs.mkdirSync("../.././backend1/controller1");
// let a=fs.writeFileSync("../../backend1/controller1/user.js","hello");
//   }
//   createstructure();



// !but instead of passing  one by one we can use obejct for adding all folders at a one time

// fs.mkdirSync("./Demo/folder1/folder2/folder/app.js",{recursive:true}) //?it will recursively called function until the whole structure is not created by default it is set to false .
//?------------------------check folder is present ------------------

  let is =fs.existsSync("../Built-In");
console.log(is);





//?---------------------------------delete a folder------------------------------------

// fs.rmdirSync("../" ,{rescursive:true});


//?--------------------------------rename a floder and file------------------------------
// fs.renameSync("./file.csv","../Built-In/Demo/folder1/hello.csv");
//! 1."we can rename a file and also move the file to another folder ."
// fs.renameSync("../../backend","../../hello");
//!we can also rename a folder 



//?------------------------copy the contents of fs.js to a new file fs.txt-------------------------------

//*step-1: read the contents of fs.js
// let contents=fs.readFileSync("./fs.js","utf-8");

// //*step-2 :write the contents
// fs.appendFileSync("./fs.txt",contents);
// console.log("filecopied");


//?------------------------to copy the file-------------------------------------------------
// fs.copyFileSync("source,des");(//*read + append file);

// fs.copyFileSync("./fs.js","./new.txt");


//?-------------------------------- for a  asynchronously -----------------------------------------------------
// remove sync from all methods and add callack ()=>{}
  //* methodname->readFile("path","encoding ",()=>{})
// error first callback :first parameter reserved for error in the callback
// console.log(1);

//     fs.readFile("./index.html","utf-8",(error,data)=>{
//      if(error){
//       console.log("error occured",error);

//      } console.log(data);
     

//     });
//     console.log(2);


//  console.log(4);

//     fs.writeFile("./index.html","helllo user",(error,data)=>{
// if(error){
//       console.log("error occured",error);

//      } 
//      console.log(data); //here writeFile will return  void so it is undefine for data 
     
     
//     });
//     console.log(5);



//     fs.writeFile("./name.csv"," \n this is a new word",(err)=>{
//       if(err) throw new Error("some error occurred .")
//         console.log(err);
//       console.log("file created ");})

//     fs.appendFile("./hello.csv"," \n this is a new word",(err)=>{
//       if(err)
//         console.log(err);
//       console.log("file append ");

//     })
//      fs.appendFile("./hello.csv"," \n this is a new line",(err)=>{
//       if(err) 
//         console.log(err);
//       console.log("file append ");

//     })
    
    //!here problem is that we don't know which callback will get executed  first so we have to write inside async function or inside callback 
    
  //   fs.writeFile("./name.csv"," \n this is a new word",(err)=>{
  //     if(err)
  //       console.log(err);
  //     console.log("file created ");
  // fs.appendFile("./name.csv"," \n this is a new line",(err)=>{
  //     if(err)
  //       console.log(err);
  //     console.log("file append ");

  //   });
  //    fs.appendFile("./name.csv"," \n this is a 3 append",(err)=>{
  //     if(err)
  //       console.log(err);
  //     console.log("file append ");

  //   });
    
  //   })
  //  here first file will created , then only append 1 will executed after that append 2 



//?-----------------------------------------------LibUV------------------------------------------

  //!LibUv - It is a C library  used to perform asynchronous I/o operations (file reading, databse call ,network call).It provides a thread pool of 4 worker threads  it is default value . The thread pool size can be increased or decreased . 

  //! main thread will only execute synchronous code 
  //! main thread offloads any asynchornous code to libUV 
  //! System kernel - It acts interface between software and hardware.
  //*some file operations can also handled by system kernel first if not possible then move to LibUV)
  //*main thread->kernel->libUV

  //?---------------------------------------Concurrency and Parallelisms-----------------------------
  // work 1 
  // work 2
  // concurrency sometimes work 1 for 10 min then 10 min work 2 then again 10 min work 1 
  // but in parallelisms all 4 work done together 


  //!node js have 6 queues
  //* 1.microstask(nextTick , Promise)
  //* 2.timer
  //* 3.i/o
          //  ->(Pole phase) not a queue 
  //* 4.check 
  //* 5.close callbacks 


  //?OS levels used to execute code 
 //? hardware levels have 16 threads either we create how many no of threds in LibUV

 import fsp from "fs/promises" //?means it will return a  promise using any operation 
//  const fsp=require("fs/promises");
//  const fsp=require("fs").promises;

//?-----------------------------write a file---------------------------------
//  let writeFile=fsp.writeFile("./demo.txt","data");
// writeFile.then((data)=>{
//   console.log("created");
// console.log("data");

// }).catch((err)=>{
// console.log(err);

// })
 //?--------------------------------------------reading a file------------------------------------
let readFile=fsp.readFile("./demo.txt" ,"utf-8");
readFile.then((data)=>{

console.log(data);
console.log("file read");

}).catch((err)=>{
console.log(err);

})



//?-------------------------------------append a file----------------------------------------------------
// let result=fsp.appendFile("./name.csv","this is new data");
// result.then(()=>{console.log("file appended");

  
// })
// .catch((err)=>{
//   console.log(err);

// })


//?---------------------------------async and await ---------------------------------------------
//!async used in the function declaration and await is used in inside function body . It returns  a promise

//! --------------------------------reading a file------------------------------------------------
async function readFiles(){
  let read=await fsp.readFile("./name.csv","utf-8");
  console.log(read);

}
readFiles();


