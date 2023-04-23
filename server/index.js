const express = require('express');
const cors = require('cors')
const db =require('./db');
const PORT = 5000;
const app = express();
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

    res.json({
        college :organization,
        name: name,
        email: email
    });
   
});






app.listen(PORT, () => {
    console.log(`Server is running on 5000`)
  });