const express=require("express");
const {login,register,updateProfile,logout} =require("../controllers/user.controller")
const isAuthenticated=require('../middlewares/isAuthenticated') 
const router=express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,updateProfile);

module.exports=router;

