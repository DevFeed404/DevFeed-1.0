const db = require('../db');
const validator = require("validator")

exports.subscribe = async (req, res) => {
  console.log("test1")
  const name = req.body.name;
  const email = req.body.email;
  const organization = req.body.organization;
  const date = new Date().toISOString();

  try {
    if (!validator.isEmail(email)) {
      res.send({ title: 'Email is not Valid' });
    }
    if (validator.isEmpty(name) || validator.isEmpty(organization)) {
      res.send({ title: 'one or more fields are empty' });

    } if (validator.isEmail(email) == true && validator.isEmpty(name) == false && validator.isEmpty(organization) == false) {

      db.query("SELECT * FROM users WHERE email=? ", [email], (err, result) => {
        if (err) {
          console.log(err)
        }
        if (result.length > 0) {
          res.send({
            result,
            message: "you are already subscribed"
          });
          console.log(result)

        }
        else {

          db.query("INSERT INTO users (name,email,organization,date,isSubscribed)  VALUES (?, ?, ?,?, TRUE)", [name, email, organization, date], (err, result) => {
            if (err) {
              console.log(err)
            }
            console.log(err)
            console.log(result)
            res.send({
              result,
              message: "you are added"
            });




          });
        }

      })

    }
  } catch (error) {
    console.log(error);

  }




};



