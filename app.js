const express = require ("express");
const app = express()
const bodyParser = require ("body-parser");
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

const date = require(__dirname +"/date.js")

let items = [];
let workItems = [];

app.get("/", function(req, res){
    let day = date();
    res.render("list",{listTitle: day, newLists: items});
});

app.post("/", function(req, res){
    let item = req.body.newItem;

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    } 
    else
    {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work list", newLists: workItems})
});


app.get("/about", function(req, res){
    res.render("about");
});


app.listen(3000, function(){
    console.log("server started on port 3000");
})