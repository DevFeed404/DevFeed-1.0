const db = require('../db');
require("dotenv").config();
const feedbackSchema = require('../validation/Feedback');

const validator = require("validator")
exports.feedback = async (req, res) => {
  try {
    const payload = await feedbackSchema.validateAsync(req.body);
    if (!payload.error) {
      const feedback = req.body.feedback;
      if (validator.isEmpty(feedback)) {
        res.send({ message: 'Feedback is empty' });

      } if (validator.isEmpty(feedback) == false) {
        db.query("INSERT INTO feedback (feedback)  VALUES (?) ", [feedback], (err, result) => {
          if (err) {
            console.log(err)
          }
          res.send({ result, message: "Thankyou for your feedback" });
          console.log(result);
        })
      }
    } else {
      return res.status(400).send({ message: payload.error.message });
    }
  }
  catch (err) {
    console.log(err);
  }
}