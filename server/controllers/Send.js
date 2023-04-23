const db = require('../db');
var nodemailer = require('nodemailer');

exports.send= async(req,res)=>{
    try {
        db.query("SELECT email FROM users ", (err, result) => {
            if (err) {
                console.log(err)
              }
              if (result.length > 0) {
                res.send(result[0].email);
               var array= JSON.parse(result);
               console.log(array);
                var transport = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    auth: {
                      user: "ayush4002gupta@gmail.com",
                      pass: ""
                    },
                    tls: {
                      rejectUnauthorized: false
                    }
                  });

                  var mailOptions = {
                    from: '"Ayush" <ayush4002gupta@gmail.com>',
                    to: emailuser,
                    subject: 'Nice Nodemailer test',
                    text:`Hey there, This is your otp for verification : `,
                    html: `<b>Hey there! </b>This is your otp for verification : `,
                
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