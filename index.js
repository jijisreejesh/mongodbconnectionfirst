const express=require('express');
const app=express();
const port=1200;

const cors=require('cors')
app.use(express.json())
app.use(cors())

const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Task1')
.then(()=>{
    console.log('Mongodb successfully connected');
})
.catch((err)=>{
    console.error('Mongodb connection error')
})

app.listen(port,()=>{
    console.log(`server running port is : ${port}`);
    
})