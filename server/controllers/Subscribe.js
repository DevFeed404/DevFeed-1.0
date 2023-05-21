const db = require('../db');
const validator = require("validator");
const emailable = require("emailable")(process.env.EMAILAPIKEY);
require("dotenv").config();


exports.subscribe = async (req, res) => {
  console.log("test1")
  const name = req.body.name;
  const email = req.body.email;
  const organization = req.body.organization;
  const date = new Date().toISOString();

  try {
  
    if (validator.isEmpty(name) || validator.isEmpty(organization)) {
      res.send({ message: 'one or more fields are empty' });

    }
    if (!validator.isEmail(email)) {
      res.send({ message: 'Email is not Valid' });
    }
     if (validator.isEmail(email) == true && validator.isEmpty(name) == false && validator.isEmpty(organization) == false) {

      db.query("SELECT * FROM users WHERE email=? ", [email], (err, result) => {
        if (err) {
          console.log(err);
        }
        if (result.length > 0) {
          res.send({
            result,
            message: "You are already subscribed",
          });
          console.log(result);
        } else {
          emailable.verify(email).then(function (response) {
            console.log(response)
            if (response.reason !== "deliverable") {
              db.query(
                "INSERT INTO users (name,email,organization,date,isSubscribed)  VALUES (?, ?, ?,?, TRUE)",
                [name, email, organization, date],
                (err, result) => {
                  if (err) {
                    console.log(err);
                  }
                  console.log(err);
                  console.log(result);
                  res.send({
                    result,
                    message: "Thankyou for Subscribing",
                  });
                }
              );
            }
            else{
              res.send({
                message: "Invalid Email"
              })
            }
          });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};
