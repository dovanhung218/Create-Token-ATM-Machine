'use strict'

module.exports=function(app){
    var api = require("../controller/APIcontroller")
    app.post("/api/withdraw",api.withdraw)
}