require("dotenv").config();
const db = require('../config/dbConnection');
const validator = require("validator");
const nodemailer = require('nodemailer');
const apiResponse = require("../utils/apiResponses");

class MailController {
    static feedback = async (req, res) => {
        try {
            const feedback = req.body.feedback;

            if (validator.isEmpty(feedback)) {
                return res.send({ message: 'Feedback is empty' });
            }

            const result = await db.query("INSERT INTO feedback (feedback) VALUES (?)", [feedback]);
            console.log(result);
            return apiResponse.successResponseWithData(res,"Thank you for your feedback",result,"200");
        } catch (error) {
            console.log(error);
            return apiResponse.errorResponse(res,"Internal server error","500")
        }
    };

    static send = async (req, res) => {
        try {
            const { EMAIL_SENDER, EMAIL_PASSWORD } = process.env;
            const message = req.body.message;
            const title = req.body.title;

            const result = await db.query("SELECT email FROM users");
            const emails = result.map((row) => row.email);

            const transport = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                    user: EMAIL_SENDER,
                    pass: EMAIL_PASSWORD
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
            
            const mailOptions = {
                from: `"DevFeed.in" <${EMAIL_SENDER}>`,
                to: emails.join(", "),
                subject: title,
                text: 'Hey there, Welcome to DevFeed.in, Your daily solution to keep you updated',
                html: message,
            };
            
            const info = await transport.sendMail(mailOptions);
            console.log(info);
            console.log('Message sent: %s', info.messageId);
            
            return apiResponse.successResponse(res,"Email sent successfully","200");
        } catch (error) {
            console.log(error);
            return apiResponse.errorResponse(res,"Internal server error","500")
        }
    };

    static sendtome = async (req, res) => {
        try {
            const { EMAIL_SENDER, EMAIL_PASSWORD, EMAIL_ME, EMAIL_ME2 } = process.env;
            const message = req.body.message;
            const title = req.body.title;

            const transport = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                    user: EMAIL_SENDER,
                    pass: EMAIL_PASSWORD
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            const mailOptions = {
                from: `"DevFeed.in" <${EMAIL_SENDER}>`,
                to: `${EMAIL_ME},${EMAIL_ME2}`,
                subject: title,
                text: 'Hey there, Welcome to DevFeed.in, Your daily solution to keep you updated',
                html: message,
            };
            
            const info = await transport.sendMail(mailOptions);
            console.log(info);
            console.log('Message sent: %s', info.messageId);
            return apiResponse.successResponse(res,"Email sent successfully","200");
        } catch (error) {
            console.log(error);
            return apiResponse.errorResponse(res,"Internal server error","500")
        }
    };

    static subscribe = async (req, res) => {
        console.log("test1");
        const name = req.body.name;
        const email = req.body.email;
        const organization = req.body.organization;
        const date = new Date().toISOString();

        try {
            if (validator.isEmpty(name) || validator.isEmpty(organization)) {
                return res.send({ message: 'One or more fields are empty' });
            }

            if (!validator.isEmail(email)) {
                return res.send({ message: 'Invalid email' });
            }

            const existingUser = await db.query("SELECT * FROM users WHERE email = ?", [email]);

            if (existingUser.length > 0) {
                return res.send({
                    result: existingUser,
                    message: 'You are already subscribed'
                });
            }

            const newUser = await db.query("INSERT INTO users (name, email, organization, date, isSubscribed) VALUES (?, ?, ?, ?, TRUE)", [name, email, organization, date]);

            console.log(newUser);
            return apiResponse.successResponseWithData(res,"Thank you for subscribing",newUser,"200")
        } catch (error) {
            console.log(error);
            return apiResponse.errorResponse(res,"Internal server error","500")
        }
    };
}

module.exports = MailController;

