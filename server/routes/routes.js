const express = require("express");
const { subscribe } = require("../controllers/Subscribe");
const { send } = require("../controllers/Send");
const { sendtome } = require("../controllers/Sendtome");
const { feedback } = require("../controllers/Feedback");
const validate = require("../middlewares/validate");
const {
  feedbackValidation,
  sendValidation,
  subscribeValidation,
} = require("../validations/index");
const router = express.Router();

router.route("/subscribe").post(validate(subscribeValidation), subscribe);
router.route("/send").post(validate(sendValidation), send);
router.route("/sendtome").post(validate(sendValidation), sendtome);
router.route("/feedback").post(validate(feedbackValidation), feedback);

module.exports = router;
