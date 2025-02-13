const http=require('http')
http.createServer((req,res)=>{
    const url=req.url
    if(url==='/home'  && req.method==='GET'){
        res.write('<h1>My Home Page</h1>')
    }
    else if(url==='/about' && req.method==='POST'){
        res.write('<h1>About Page</h1>')
    }
    else{
        res.write('<h1>404 error</h1>')
    }
    res.end()
}).listen(3001,()=>{
    console.log("✌️ Server Created")
})