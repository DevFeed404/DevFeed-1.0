const express = require('express');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 5000;
const route = require('./routes/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));


app.use("/api", route);

app.get("/", (req, res) => {
    res.json({
        message: "welcome to this server"
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on 5000`)
});