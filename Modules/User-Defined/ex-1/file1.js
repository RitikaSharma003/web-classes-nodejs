// function printName(name){
//     console.log("hello",name)
// }


// let obj={
//     address:"something",
//     pincode:"204455"
// };

// let arr=[1,2,3,4]
//!performing import and export using normal js 
//!1. first way of exporting  

// module.exports=printName;



//module and exports are keywords
//module and exports are keywords
//
//? 1st way of exporting ->  using module.exports we can only export only one 

2.

// module.exports={printName,obj,arr}; //key value pair names are same 


//? global variables of functions-> setTimeout(),__filenameetc
//? these variables don't require any specific file to be imported  
//!named export export let/const identifier value  
//!default export  we can use on default export per at a time 

// export let sum=(a,b)=>{
//     return a+b ;

// };
// export let obj={
//     name:"abec"
// }

// export const arr=[1,2,3,4];


let sum=(a,b)=>{
    return a+b ;

 };
 export default sum ;
 

