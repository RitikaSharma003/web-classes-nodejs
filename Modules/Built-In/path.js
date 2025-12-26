//const path =require("path");
import path from "path"
// console.log(path);

//!basename
console.log(path.basename("/users/folders/filename.txt"))

//!extname()
console.log(path.extname("users/folders/filename.txt"));
console.log(path.extname("users/folders"))
//!format()

console.log(path.parse(import.meta.filename))//convert string into obj 

//!join(path1,path2,.....)
console.log(path.join("f1","f2")) //f1\f2
console.log(path.join("backend1","controller1","user.js"));
console.log(path.join(import.meta.dirname,"..","modules.js"))