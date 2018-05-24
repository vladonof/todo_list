var express       = require("express"),
    todoRoutes    = require("./routes/todos"),
    bodyParser    = require("body-parser"),
    app           = express(),
    mongoose      = require("mongoose"),
    port          = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.use('/api/todos', todoRoutes);

app.get("/", function(req, res){
    res.sendFile("index.html");
});  
    
    
app.listen(port, process.env.IP, function(){
    console.log("APP IS RUNNINIG ON PORT " + port);
});