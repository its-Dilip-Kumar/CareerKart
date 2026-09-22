const express = require("express");
const { login, register, updateProfile, logout } = require("../controllers/user.controller");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { singleUpload } = require("../middlewares/multer");
const router = express.Router();

console.log("singleUpload =", singleUpload);
console.log("isAuthenticated =", isAuthenticated);
console.log("updateProfile =", updateProfile);

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);

// ✅ YAHAN CHANGE — singleUpload add karo
router.route("/profile/update").post(isAuthenticated, singleUpload, updateProfile);

module.exports = router;