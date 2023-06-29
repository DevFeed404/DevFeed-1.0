const db = require('../db');
const validator = require("validator");
require("dotenv").config();
const subscribeSchema = require('../validation/Subscribe');


exports.subscribe = async (req, res) => {
  const payload = await subscribeSchema.validateAsync(req.body);

  if (!payload.error) {
    const { name, email, organization } = payload
    const date = new Date().toISOString();

    try {
      const checkUser = await db.query("SELECT * FROM users WHERE email=? ", [email]).then(res=> res);
      if(checkUser){
        res.send({
          checkUser,
          message: "You are already subscribed"
        });
      }else{
        const insertUser =  await db.query("INSERT INTO users (name,email,organization,date,isSubscribed)  VALUES (?, ?, ?,?, TRUE)", [name, email, organization, date]);
        res.send({
          insertUser,
          message: "Thankyou for Subscribing"
        });
      }
    } catch (error) {
      console.log(error);

    }

  }else{
    res.status(402).send({
      message: payload.error
    });
  }


};



