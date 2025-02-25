const express=require('express')
const port=3001;
const app=express()
const products=[{
    id:1001,
    title:"Laptop",
    price:51000,
    quantity:5
},
{
    id:1004,
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
    const uid=parseInt(req.params.id)
    const user=products.find((user)=> user.id==uid)
    if(!user){
        res.json({msg:"no user found"});
    }
    res.json(user);
})
app.post('/product',(req,res)=>{
    const {title,price,quantity}=req.body;
    const newId=products.length>0?products[products.length-1].id+1:1001;
    products.push({
      id:newId,title,price,quantity
    })
    res.json({success:true,msg:"added new data"})
})
app.patch('/product/:id',(req,res)=>{
    const userId=req.params.id;
    const updates=req.body;
    const user=products.find((user)=> user.id==userId)
    if(!user){
        res.json({msg:"no such product"})
    }
    Object.assign(user,updates);
    res.status(200).json({msg:"updated successfully"})
})
app.delete('/product/:id',(req,res)=>{
    const userId=parseInt(req.params.id);
    const index=products.findIndex((user)=>user.id===userId)
    if(index===-1){
        res.status(400).json({msg:"user does not found"})
    }
    console.log(index)
    products.splice(index,1)
    res.json({ message: "User deleted successfully" });
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