const db = require('../db');
var nodemailer = require('nodemailer');

exports.sendtome = async (req, res) => {
    try {
        var message = req.body.message;
        var title = req.body.title;

        var transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: "ayush4002gupta@gmail.com",
                pass: "tgsrmlkrmwpsfzxo"
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        var mailOptions = {
            from: '"DevFeed.in" <ayush4002gupta@gmail.com>',
            to: 'harshulgupta56@gmail.com',
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
    catch (error) {
        console.log(error);


  }; 
};

