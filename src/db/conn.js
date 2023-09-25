const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/formDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
    // useCreateIndex:true
}).then(()=>{
    console.log('successful');
}).catch((e)=>{
    console.log(`not successful and the error is ${e}`);
})