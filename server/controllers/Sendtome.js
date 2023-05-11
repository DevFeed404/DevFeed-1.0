const db = require('../db');
var nodemailer = require('nodemailer');
require("dotenv").config();

exports.sendtome = async (req, res) => {
    try {
        var message = req.body.message;
        var title = req.body.title;

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
            to: process.env.EMAIL_ME,
            subject: `${title}`,
            text: `Hey there, Welcome to DevFeed.in , Your daily solution to keep you updated`,
            html: `${message}`,

        };

        transport.sendMail(mailOptions, (error, info) => {
            if (error) {

                return console.log(error);
            }
            console.log(info);
            res.send({message:"sent"})
            console.log('Message sent: %s', info.messageId);
        });


    }
    catch (error) {
        console.log(error);


  }; 
};

