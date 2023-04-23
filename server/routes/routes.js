const express = require('express');
const { subscribe } = require('../controllers/Subscribe');
const { send } = require('../controllers/Send');
const router = express.Router();

router.route("/subscribe").post(subscribe);
router.route("/send").post(send);


module.exports=router;   


8