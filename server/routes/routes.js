const express = require('express');
const MailController = require("../controllers/businessLogicController");
const router = express.Router();

router.route("/subscribe").post(MailController.subscribe);
router.route("/send").post(MailController.send);
router.route("/sendtome").post(MailController.sendtome);
router.route("/feedback").post(MailController.feedback);


module.exports=router;   
