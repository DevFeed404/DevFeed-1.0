const express = require('express');
const cors = require('cors')
const db =require('./db');
const PORT = 5000;
const app = express();
const routee = require('./routes/routes');
const router = express.Router();
app.use(express.json());
app.use(cors());




app.get("/",(req,res) => {
    res.json({
        message:"welcome to this server"
    });
});

app.post("/chat",(req,res) => {
    console.log("test1")
    const name= req.body.name;
    const email = req.body.email;
    const organization = req.body.organization;
    const date= new Date().toISOString();
    console.log(date)


    try {
        db.query("SELECT * FROM users WHERE email=? ", [email], (err, result) => {
          if (err) {
            console.log(err)
          }
          if (result.length > 0) {
            res.json({
               messae:"you are already subscribed"
            });
           
          }
           else {
            
            db.query("INSERT INTO users (name,email,organization,date)  VALUES (?, ?, ?,?)", [name,email,organization,date], (err, result) => {
              if (err) {
                console.log(err)
              }
              console.log(err)
              res.json({
                message:"you are subscribed"
            });
              
              
            });
          }
       
        })
    

      } catch (error) {
        console.log(error);
        
      }







   
});






app.listen(PORT, () => {
    console.log(`Server is running on 5000`)
  });