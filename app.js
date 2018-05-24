var express       = require("express"),
    todoRoutes    = require("./routes/todos"),
    bodyParser    = require("body-parser"),
    app           = express(),
    mongoose      = require("mongoose"),
    port          = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/todos', todoRoutes);

app.get("/", function(req, res){
    res.send("wtffff");
});  
    
    
    
app.listen(port, process.env.IP, function(){
    console.log("APP IS RUNNINIG ON PORT " + port);
});