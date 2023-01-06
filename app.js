const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food" ];
var workitems = [];
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){

    var today = new Date();

    var option = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

var day = today.toLocaleDateString("en-US", option);
   

    res.render("list", {listtittle: day, newlistitems: items});
    
});

app.post("/", function(req, res){
   var item = req.body.newitem;

    items.push(item);

   res.redirect("/");
});

app.get("/work", function(req, res){
    res.render("list", {listtittle: "work List", newlistitems: workitems})
});

app.post("/work", function(req, re){
    let item = req.body.newitem;
    workitems.push(item);
    res.redirect("/work");
});

app.listen(3000, function(){
    console.log("server is running on port 3000");
});

//res.render('index', {: 'FOO'});