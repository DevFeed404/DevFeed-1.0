const express = require('express');
const { subscribe } = require('../controllers/Subscribe');
const { send } = require('../controllers/Send');
const { sendtome } = require('../controllers/Sendtome');
const { feedback } = require('../controllers/Feedback');
const { login } = require('../controllers/Login');
const { getAllEvents , getEventByName } = require('../controllers/scraper')
const router = express.Router();

router.route("/subscribe").post(subscribe);
router.route("/send").post(send);
router.route("/sendtome").post(sendtome);
router.route("/feedback").post(feedback);
router.route("/login").post(login);
router.route("/UpcomingEvents").get(getAllEvents);
router.route("/getEventByName").get(getEventByName);

module.exports=router;   


