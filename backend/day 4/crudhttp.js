const http=require('http');
const { json } = require('stream/consumers');
/*
sever is stateless 
*/
const server=http.createServer((req,res)=>{
    const data=[{
        id:1,
        name:'Vijit Verma',
        email:'ABC@gmail.com'
    }]
    const url=req.url;
    if(url=='/users' && req.method=="GET"){
        res.writeHead(200,{'content-type':"application/json"});
        res.write(JSON.stringify(data))
    }
    else{
        res.writeHead(404,{'content-type':"application/json"});
        res.write(JSON.stringify({msg:"Something went wrong"}))
    }
    res.end()
})
server.listen(3000,(err)=>{
  try{
     if(err){
        throw err
     }
     console.log("server is running")
  }
  catch(err){
    console.log("Server Error")
  }
});