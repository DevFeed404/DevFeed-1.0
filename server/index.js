const express = require('express');
const cors = require('cors')
const { scraper } = require('./controllers/scraper');

const setUpJobs = require('./utils/jobs');
const bodyParser = require("body-parser");

const db =require('./db');
const PORT = 5000;
let Validator = require('validatorjs');
const app = express();
const route = require('./routes/routes');
const router = express.Router();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api",route);

app.get("/",(req,res) => {
    res.json({
        message:"welcome to this server"
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on 5000`);
    // scraper();
    // setUpJobs();
    console.log("something..");
});
=======
    console.log(`Server is running on ${PORT}`)
  });
