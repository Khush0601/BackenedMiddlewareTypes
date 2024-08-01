const express=require('express')
const app=express()

// middleware applied at app level
app.use(function(req,res,next){
    console.log('request received at'+Date.now())
    next()
})

// middleware at route level
app.use('/students',function(req,res,next){
    console.log('Route level middleware')
    res.status(200).send({
        message:"Routes"
    })
    next()
})

//  normal middleware 
app.use(function (req,res,next){
    res.status(200).send({
        message:"App is under processing"
    })
})
// starting server
app.listen(7443,()=>{
    console.log('server connected')
})