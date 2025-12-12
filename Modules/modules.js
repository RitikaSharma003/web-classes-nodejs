//!MODULES

//! modules  : modules are used to increase a readability and maintability  of a code . 
//!It is logical piece of code that can be reused in multiple files.
//!using modules we can easily scale our application .
//! it is used to breakdown complex code into smaller pieces .

//? different format of modules used :

//*common js : require exports and imports (node js by default uses common js syntax unless specifiedin package.json )
//*ES-modules import and export 
//?export or module.exports-> we make the code available  for other files
//? import or require-> we use the code exported from other files.


//?exporting  
//* the functions  which are wrapping inside modules means exporting a function 
// function printHello(){
//     console.log("hello function");

// }

// ? importing 
//? the functions which are unpacked means we are importing the functions or modules.


// !Types of modules
// ? 1.)User defined modules /custom modules -which is created by developers .
//? 2.) Built in modules /core modules- which is already present  
//? 3.) Third party modules/external modules- which is used for third party lib .



//! in common js file ->we have a function wrapper ->module function wrapper 
//!nodejs internally wraps all the code inside an iife with following parameters.
// (function( exports,require,module,__filename__dirname) {
//     console.log("hello");

// })();
