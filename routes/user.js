const express = require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapAsync= require("../utils/wrapAsync.js");
const passport=require("passport");
const {saveRedirectUrl}= require("../middlewares.js");
const userController=require("../controllers/users.js");

router.get("/signup",userController.rendersignupform);
router.post("/signup",wrapAsync(userController.signup));

router.get("/login",userController.renderform)

router.post("/login", saveRedirectUrl
,passport.authenticate("local",
{failureRedirect:"/login",failureFlash:true}),
userController.login
);

router.get("/logout",userController.logout);

module.exports=router;