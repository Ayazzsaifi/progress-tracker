const express= require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware")
const {createSession,getSession}= require("../controllers/sessionController");
const { route } = require("./authRoutes");

router.post('/Create',auth,createSession);

router.get('/all',auth,getSession);

module.exports=router