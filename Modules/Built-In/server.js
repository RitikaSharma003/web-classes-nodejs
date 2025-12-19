//!each time along with Response,  server is sending status code
//?1xx->processing
//?2xx->success
//?3xx->redirected
//?4xx->clientside error
//?5xx->server side error
//*201 code ->default message ->ok and created
//*404 code->default message-> not found

//?server-accepts the request , process the request and then sends back the response

//*HTTp- It is built in module it is used to create server
//?client(ui layer, presentation layer)
//?server(application layer,business layer)

//!We have to send the content-type to let the browser know what type of adata is coming from server this will help browser to render the data on the UI.
//* 1.html data -> text/html
//* 2.css data -> text/css
//* 3.json data -> application/json
//*js file -> application/js

//?We have certian http methods which defines the nature of request
//!1. to get/fetch resource from server ->get
//!2.to send data to the server ->post
//!3. to delete some source ->delete
//!4. to updated a resource  ->put and patch

//?createServer () takes anargument ->callback function and this takes two parameter function req and response and asign a port number to the instance of a port no using listen()
//! we have more than 60,000 ports
// const http=require("node:http");
//import http from "http ";
// console.log(http);

const { createServer } = require("http");
let server = createServer((req, res) => {
  //res.end("hello from server ");
  //?response->message(after each request-resonse, each cycle should be terminated using res.end())and res.write() . Along with that we can send data  which can be displayed on ui .but res.write we have res.end to end the cycle.
//   res.write("hi server");
  console.log("request accepted");

 
  res.writeHead(202, "ok", { "content-type": "text/plain" });//for giving header
  console.log(req.url);
  console.log(req.method);
 // req and res are streams but datatype is object
   res.end("hi");
});
server.listen(9000, (err) => {
  if (err) console.log(err);

  console.log("server running  ");
});

// in order to send the requet to server
// open browser ->localhost:portnumber

//if we want to close the server press in teminal cTRL+C
