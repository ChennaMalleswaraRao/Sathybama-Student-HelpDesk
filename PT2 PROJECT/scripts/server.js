const express = require("express");
const app = express();
const nodemailer = require('nodemailer');

const club = "hack club event is on the gogle form is s";

const bp = require("body-parser");
const { urlencoded } = require("body-parser");
app.use(urlencoded({extented : true}));
app.use(express.static("public"));
app.set("view engine","ejs");
var posts = [];

app.get("/",function(req,res){
 res.sendFile(__dirname+"/home.html");
})
app.get("/home.html",function(req,res){
    res.sendFile(__dirname+"/home.html");
});
app.get("/about.html",function(req,res){
    res.sendFile(__dirname+"/about.html");
   });
app.get("/login.html",function(req,res){
    res.sendFile(__dirname+"/login.html");
   });
app.get("/adminlogin.html",function(req,res){
    res.sendFile(__dirname+"/adminlogin.html");
   });
//    important
app.get("/events",function(req,res){
    res.render("events",{
        para:club,
        posts: posts
    });
    console.log(posts);
});
app.get("/Eventupdates",function(req,res){
    res.render("Eventupdates");
});
app.get("/sdashboard",function(req,res){
    res.render("sdashboard");
});
app.get("/sdashboard",function(req,res){
    res.render("sdashboard");
});
app.get("/pay",function(req,res){
    res.render("pay");
});
app.post("/student",function(req,res){
    var sname = req.body.user;
    var semail = req.body.mail;
    var spwd = req.body.pwd; 
    console.log(semail+" "+spwd);
    if(semail == "1234" && spwd == "1234"){
        res.render("sdashboard",{username : sname});
    }
    else{
        res.send("Incorrect Pwd");
    }
});
app.get("/facultypageevents",function(req,res){
    res.render("facultypageevents",{
        para:club,
        posts: posts
    });
    console.log(posts);
});
app.get("/hodapproval",function(req,res){
    res.render("hodapproval",{
        para:club,
        posts: posts
    });
    console.log(posts);
});
app.get("/eventadded",function(req,res){
    res.sendFile(__dirname+"/eventadded.html")
});
app.get("/eventpage",function(req,res){
    res.sendFile(__dirname+"Confirmedevent.ejs");
})
app.post("/admin",function(req,res){
    var sname = req.body.user;
    var semail = req.body.mail;
    var spwd = req.body.pwd; 
    console.log(semail+" "+spwd);
    if(semail == "1234" && spwd == "1234"){
        res.render("adashboard",{username : sname});
    }
    else{
        res.send("Incorrect Pwd");
    }
});