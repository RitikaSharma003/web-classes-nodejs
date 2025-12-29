let arr = [
  { id: 1, name: "abc", age: 33 },
  { id: 2, name: "def", age: 36 },
  { id: 3, name: "fgh", age: 67 },
];

import express, { urlencoded } from "express";
const app = express();

app.use(express.urlencoded({extended:true}))
import fs from  "fs";

app.get("/", (req, res) => {
  // if(arr.length===0) return res.status(404).json(success:false,message:"no users found "); //?return  is not present  we will get an error

  res.status(200).json({ success: true, message: "working", data: arr });
});
app.listen(9002, (err) => {
  if (err) console.log(err);
  console.log("server running on port 9002");
});


//!to display form on  the ui  

app.get("/form",(req,res)=>{
    fs.createReadStream("./pages/register.html","utf-8").pipe(res);

});




//!body property in req object will store the data which is coming from frontend
app.post("/add", (req,res) => {
 console.log(req.body);
let userData=req.body;
arr.push(userData);

res.status(201).json({
    success: true, message: "user created ", data: arr })
})
;



// app.get("/user/1",(res)=>{
// res.send("user 1");
// })

//*dynamic routing 
app.get(("/user/:id"),(req,res)=>{
  const id=(req.params.id);
 let user= arr.find((user)=>{

return id==user.id;


  });
  console.log(user);
res.send(user);
})