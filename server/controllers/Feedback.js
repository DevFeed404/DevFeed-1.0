const db = require('../db');
const validator = require("validator")
exports.feedback = async (req, res) => {
    const feedback =req.body.feedback;
    try {
        if (validator.isEmpty(feedback)) {
            res.send({ title: 'Feedback is empty' });
      
          }if(validator.isEmpty(feedback)==false){
        db.query("INSERT INTO feedback (feedback)  VALUES (?) ", [feedback], (err, result) => {
            if (err) {
              console.log(err)
            }
            res.send(result);
            console.log(result);
        })
    }
             
        
        
    } catch (error) {
        
    }
}