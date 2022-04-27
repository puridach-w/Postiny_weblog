
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
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

app.use(cors(corsOptions));


app.use(bodyParser.json({ limit: "50mb" }));

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//initial route
app.get("/", (req, res) => {
  res.json({ data: "Welcome to Friendzone API!" });
});

app.get("/testRoute", (req, res) => {
  res.json({ data: "Hey hey!" });
});


//listening
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Friendzone API Server is running on port ${PORT}.`);
});

//jwt secretkey
// const secretKey = require("./app/config/auth.config").secret;


// app.use(cookieParser(secretKey));


// require("./app/routes/auth.routes")(app);
// require("./app/routes/user.routes")(app);
// require("./app/routes/gender.routes")(app);
// require("./app/routes/event.routes")(app);
// require("./app/routes/category.routes")(app);
// require("./app/routes/chat.routes")(app);
// require("./app/routes/pointTransaction.routes")(app);
// require("./app/routes/search.routes")(app);
// require("./app/routes/discount.routes")(app);
// require("./app/routes/report.routes")(app);
// require("./app/routes/analyst.routes")(app);
// require("./app/routes/eventInvited.routes")(app);
// require("./app/routes/admin.routes")(app);


// var publicDir = require("path").join(__dirname, "/data");
// app.use(express.static(publicDir));
