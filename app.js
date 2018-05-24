var express       = require("express"),
    app           = express(),
    mongoose      = require("mongoose"),
    port          = process.env.PORT || 3000; 
    
    
    
    
app.listen(port, process.env.IP, function(){
    console.log("APP IS RUNNINIG ON PORT " + port);
})