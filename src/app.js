const express=require("express")
const app=express()
const process=require('process')
const path=require('path')
const port= process.env.PORT || 3000;
require("./db/conn.js")

app.use(express.urlencoded({extended:false}));

const Register=require('./models/register.js')

const staticPath=path.join(__dirname,"../html")

app.use(express.static(staticPath))

app.get('/register',(req,res)=>{
    res.render('Register')
});


app.post('/register',async(req,res)=>{
    try {
        const addData=new Register({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        })
        const saveData=await addData.save();
        res.status(201).render(index)
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});