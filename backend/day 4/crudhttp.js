const http=require('http')
const server=http.createServer((req,res)=>{
    res.write("<h1>Hello Http</h1>")
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