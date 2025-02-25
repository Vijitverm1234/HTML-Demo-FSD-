const express=require('express')
const port=3001;
const app=express()
const products=[{
    id:1001,
    title:"Laptop",
    price:51000,
    quantity:5
}];
app.get('/products',(req,res)=>{
    res.json(products)
    res.status(200);
})
app.use(express.json());
app.get("/product/:id",(req,res)=>{
    const id=req.params.id
})
app.post('/product',(req,res)=>{
    const {title,price,quantity}=req.body;
    const newId=products.length>0?products[products.length-1].id+1:1001;
    products.push({
      id:newId,title,price,quantity
    })
    res.json({success:true,msg:"added new data"})
})

app.listen(port,(err)=>{
   try{
   if(err){
    throw err;
   }
   else{
    console.log("Server is Running ✌️")
   }
   }
   catch(err){
         console.log("Server Error")
   }
})