const express = require('express');
const { subscribe } = require('../controllers/Subscribe');
const router = express.Router();

router.route("/subscribe").post(subscribe);

module.exports=router;