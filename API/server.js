require('dotenv').config()
var express = require('express')
const app = express()
const port = process.env.PORT||3000

const bodyParse = require('body-parser')
const helper = require('./controller/helper')
app.use(bodyParse.urlencoded({extended:true}))
app.use(bodyParse.json())
app.use(function(req,res,next){
    req.setTimeout(1000*45,function(){
        res.status(200).json(helper.APIReturn(1,"timeout"))
    })
    next()
})


var routes = require("./routes/APIRoutes")
routes(app)
app.listen(port)

console.log("Vault API started on: "+port);