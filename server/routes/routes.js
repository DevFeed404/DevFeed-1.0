const express = require('express');
const { subscribe } = require('../controllers/Subscribe');
const { send } = require('../controllers/Send');
const { sendtome } = require('../controllers/Sendtome');
const router = express.Router();

router.route("/subscribe").post(subscribe);
router.route("/send").post(send);
router.route("/sendtome").post(sendtome);


module.exports=router;   


8