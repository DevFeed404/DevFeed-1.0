const db = require('../db');
require("dotenv").config();

const validator = require("validator");
const { createCustomError } = require('../errors/customAPIError');
exports.feedback = async (req, res) => {
    const feedback =req.body.feedback;
    try {
        if (validator.isEmpty(feedback)) {
            res.send({ message: 'Feedback is empty' });
      
          }if(validator.isEmpty(feedback)==false){
        db.query("INSERT INTO feedback (feedback)  VALUES (?) ", [feedback], (err, result) => {
            if (err) {
              console.log(err)
              return res.json(createCustomError(err,400));
            }
            res.send({result, message:"Thankyou for your feedback"});
            console.log(result);
        })
    }
             
        
        
    } catch (error) {
        res.json(createCustomError(error));
    }
}