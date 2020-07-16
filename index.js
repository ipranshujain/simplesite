const express= require("express");
const app = express();
app.use(express.static(__dirname+'/public'));
app.get("/",function(req,res){
    res.render("index.ejs")
})
app.get("/project",function(req,res){
    res.render("project.ejs")
})
app.get("/interest",function(req,res){
    res.render("interest.ejs")
})
app.get("/contact",function(req,res){
    res.render("contact.ejs")
})
app.get("/advice",function(req,res){
    res.render("advice.ejs")
})
app.listen(process.env.PORT||4000,function(){
    console.log("Server has Started!");
})