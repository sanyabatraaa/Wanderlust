const express = require("express");
const app = express();
const users =require("./routes/user.js");
const posts =require("./routes/post.js");
const session=require("express-session");
const sessionOptions= 
({secret:"mysupersecretstring",
resave:false,
saveUninitialized:true
});

app.use(session(sessionOptions));

app.get("/register",(req,res)=>{
    let {name="annonymous"}=req.query;
    req.session.name=name;
    console.log(req.session.name);
    res.redirect("/hello");
});

app.get("/hello",(req,res)=>{
    res.send(`hello`);
});
// app.get("/reqcount",(req,res)=>{
//     if(req.session.count=1){
//         req.session.count++;
//     } else{
//         req.session.count=1;
//     }
    
//     res.send(`you sent a request ${req.session.count} x times`);
// });

// app.get("/test",(req,res)=>{
//     res.send("test successful");
// })





app.listen(3000, () => {
    console.log("server is running");
  });

