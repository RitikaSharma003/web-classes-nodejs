// !we have to connect  or node js project with mongodb -> class MongoClient
//! connect() which is present inside mongoclient 
//!create a d database with the help  of debugger("database anem");
//! create a collcetion with the help of createCollection ("collection Name");
//express-async-holder 
import mongodb from "mongodb"
console.log(mongodb.MongoClient.connect());
async function connectDB(){
    let client=await mongodb.MongoClient.connect("mongodb://localhost:27017");
    console.log(client.db);
    let database=client.db("node js");
    //console.log(database.collection);
    let collection=await database.createCollection("node COllection");

let results=await collection.insertMany([
    {name:"ashwini",age:34},{"name":"varun",age:23}
])
console.log(results);


//?read/fetch->findOne({filter}/find({filter}))
let user=await collection.findOne({name:"ashwini"});
console.log(user);

let users=await collection.find();//?this will return a current object 
console.log(users);



console.log(users.toArray());//?simplest way to print all documents

let user1=await collection.find().toArray();
console.log(user1);


//?update/fetch->updateOne({filter}/updateMany({filter}))

let updateResponse=await cOllection.updateMany(
    {age:34},
    {$set:{hasInsurance:true}}


);
console.log(updateResponse);
//delete->deleteOne and deleteMany
// let resp=await collection.deleteOne();
// console.log(resp);
let resp=await collection.deleteMany({});
console.log(resp);

}
connectDB();