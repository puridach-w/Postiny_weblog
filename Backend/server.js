const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

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

//report
require("./app/routes/report.routes")(app);

//admin
require("./app/routes/admin.routes")(app);

//profile
require("./app/routes/profile.routes")(app);

//blog
require("./app/routes/blog.routes")(app);


//listening
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Postiny Server is running on port ${PORT}.`);
});


// var publicDir = require("path").join(__dirname, "/data");
// app.use(express.static(publicDir));
