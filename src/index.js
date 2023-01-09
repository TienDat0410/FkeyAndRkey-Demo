const express = require('express');
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");

const menuItemsRoute = require("./routes/menuItemsRouter");

const port = 5000;


dotenv.config();
//CONNECT DATABASE
mongoose.connect((process.env.MONGODB_URL), () => {
    console.log("Connected to MongoDB tiendat04");
});

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

app.get('/api', (req, res) => {
  res.status(200).json(req.body);
})

//Route
app.use("/v1/menuItem", menuItemsRoute);

app.listen(port, () => {
    console.log("Server is running in port:" + `${port}`);
});