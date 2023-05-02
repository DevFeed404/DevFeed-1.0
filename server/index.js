const express = require('express');
const cors = require('cors')
const db =require('./db');
const PORT = 5000;
let Validator = require('validatorjs');
const app = express();
const route = require('./routes/routes');
const router = express.Router();
app.use(express.json());
app.use(cors());


app.use("/api",route);

app.get("/",(req,res) => {
    res.json({
        message:"welcome to this server"
    });
});







app.listen(PORT, () => {
    console.log(`Server is running on 5000`)
  });