
 //*Routing :-It  handling users multiple requests and redirecting to the path 
 const http=require("http");
 const fs=require("fs");
 http.createServer((req,res)=>{
    if(req.url==="/")
    {
        let data=fs.createReadStream("./index.html","utf-8");
        res.writeHead("200",{"content-type":"text/html"});
        data.pipe(res);

    }
    else if(req.url==="/login")
    {
        JSON.stringify({
            success:true,
            message:"successfully regisetred",
        })
    }
    else{
        console.log("page not found");

    }
 }).listen(9002,(err)=>{
    if(err)console.log(err);
    console.log("server is running");

 })