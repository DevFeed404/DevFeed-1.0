const express = require('express');
const { subscribe } = require('../controllers/Subscribe');
const { send } = require('../controllers/Send');
const { sendtome } = require('../controllers/Sendtome');
const { feedback } = require('../controllers/Feedback');
const { login } = require('../controllers/Login');
const router = express.Router();

router.route("/subscribe").post(subscribe);
router.route("/send").post(send);
router.route("/sendtome").post(sendtome);
router.route("/feedback").post(feedback);
router.route("/login").post(login);


module.exports=router;   


