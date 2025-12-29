//!Express =>framework of Node js
//* It is a minimal routing web framework.

//? Collection of lib/modules.
//?framework provides a blueprint , using which we can build any apllication .
//?every framework follows a particular architecture (creation of files and folders )->MVC architecture
//? IOC: (inversion of control) :The function control is in the hands of framework , express will decide which function to call .

//?MVC-> Models(database) , Views(UI->deprecated ,ejs,pug,express-handle-bars), Controllers
//* In backend folder one file must be present package.json
//*package,json:It is a heart of the project. It stores all the metadata of the project- like -description,version ,license,name author etc. and along with that dependencies.

//?dependencies => it means the different third party packages we are installing from the npm , without these dependencies the application will not run .
//!production dependency(this is default setting .)

//!development dependency(it is used during development process and is not considered after deployment . The application will run without development dependency .)

//*after creating .json file -> we can install third party packages  .
//? npm i/install package_name -> that will be saved as prop dep .
//! after installing we will see three changes
//**to save as development dependency //npm i package_name -D(dev dependency will be ignored after the deployment)

import express from "express";
let app = express();
console.log(app);

//app.httpmethod("/endpoint",(req,res)=>{
//res.send()})

app.get("/", (req,res) => {
  res.send("hello from express");
});

app.listen(9003, (error) => {
  if (error) {
    console.log(error);
  }

  console.log("server running at port 9003");
});



