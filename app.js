const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

//let items = ["buy food", "cook food", "eat food"];
const items = [];
const works = [];
const places =[];

const app = express();

app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get('/', (req, res) => {

    let day = date.getDate();
    res.render("list",{listTitle : day, newItems : items});

});

app.post("/", (req, res) => {
   // console.log(req.body)
    let item = req.body.newItem;

    if (item !==""){
        if(req.body.list === "Work"){
            works.push(item);
            res.redirect("/work");
        }
        else if(req.body.list === "Place"){
            places.push(item);
            res.redirect("/place")
        }
        else{
            items.push(item);
            res.redirect("/");
        }
        
    } 
    
});

app.get("/work", function(req, res){

    res.render("list", {listTitle: "Work List",newItems : works});
});

app.post("/work", function(req, res){
    let item = req.body.newItem;
    works.push(item);
    res.redirect("/work")
});

app.get("/place", function(req, res){
    res.render("list",{listTitle: "Place List",newItems : places})
});

app.post("/place", function(req, res){
    let item = req.body.newItem;
    places.push(item);
    res.redirect("/place");
});

app.get("/about", function(req, res){
    res.render("about");
});





app.listen(3000,()=>{
    console.log("listening on port 3000...")
});