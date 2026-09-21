const express=require("express");
const {login,register,updateProfile,logout} =require("../controllers/user.controller")
const isAuthenticated=require('../middlewares/isAuthenticated'); 
const { singleUpload } = require("../middlewares/multer");
const router=express.Router();

console.log("singleUpload =", singleUpload); 

router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,updateProfile);

module.exports=router;

