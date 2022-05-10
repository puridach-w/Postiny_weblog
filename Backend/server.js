const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require('multer');
const path = require('path');

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

app.use("/image",express.static(path.join(__dirname, 'uploads')));


const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, path.join(__dirname, 'uploads'));
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-" + file.originalname);
  }
  });

const upload = multer({storage});

app.post('/upload', upload.single('image'), (req, res) => {
  console.log("file Uploaded sucessfully");
  res.send(req.file);
});

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

//dashboard
require("./app/routes/dashboard.routes")(app);


//listening
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Postiny Server is running on port ${PORT}.`);
});


// var publicDir = require("path").join(__dirname, "/data");
// app.use(express.static(publicDir));
