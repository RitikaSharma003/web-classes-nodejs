// !fs->file system(this module is used to interact with files and folders present in the os .)
import fs, { readFileSync } from  "node:fs";

//*interactions means crud operation 
//const fs=require("node:fs"); //name of the module
                 //representation 
// console.log(fs);


//? --------using fs synchornously------------------------- 
//?----------------create a file-------------------------
//!1.)create a file
//!2.)method name -> writeFileSync("path/name" ,"data/content")
console.log("1");

// fs.writeFileSync("./demo.csv","this is content of file");
// console.log("filecreated")
// console.log("2");
console.log("1");
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


// fs.mkdirSync("../../backend");
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


//?------------------------check folder is present ------------------

  let is =fs.existsSync("../Built-In");
console.log(is)
con