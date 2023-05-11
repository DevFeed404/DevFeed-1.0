const db = require('../db');
var nodemailer = require('nodemailer');
require("dotenv").config();


exports.send = async (req, res) => {
  try {
    var message=req.body.message;
    var title= req.body.title;
    db.query("SELECT email FROM users ", (err, result) => {
      if (err) {
        console.log(err)
      }
      if (result.length > 0) {
        res.send(result[0].email);
        var resultmain = [];
        for (var i in result){
          resultmain.push([result[i].email]);
        }
          
        var array = resultmain.toString();
        console.log(array)

        var transport = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          auth: {
            user: process.env.EMAIL_SENDER,
            pass: process.env.EMAIL_PASSWORD
          },
          tls: {
            rejectUnauthorized: false
          }
        });

        var mailOptions = {
          from: `"DevFeed.in" <${process.env.EMAIL_SENDER}>`,
          to: array,
          subject: `${title}`,
          text: `Hey there, Welcome to DevFeed.in , Your daily solution to keep you updated`,
          html: `${message}`,

        };

        transport.sendMail(mailOptions, (error, info) => {
          if (error) {

            return console.log(error);
          }
          console.log(info);
          console.log('Message sent: %s', info.messageId);
        });


      }
    });

  } catch (error) {
    console.log(error);
  }




};