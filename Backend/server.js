const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// const controller = require("./app/controllers/user.controller");
// import * as controller from "./app/controllers/user.controller"
// const path = require("path");
// const cookieParser = require("cookie-parser");
// const multer = require("multer");


const app = express();
cors
var corsOptions = {
  origin: "*",
  credentials: false,
  Headers: "x-access-token"
};

app.use(express.json());
app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//register, login
require("./app/routes/user.routes")(app);

//home
require("./app/routes/home.routes")(app);

//wallet
require("./app/routes/wallet.routes")(app);


//listening
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Postiny Server is running on port ${PORT}.`);
});


// var publicDir = require("path").join(__dirname, "/data");
// app.use(express.static(publicDir));
