const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

const verifyToken = (req, res, next) => {
  let token = req.body.token;
  console.log(req.body);

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.json({status: "err", msg: err.message});
    } 
    req.body.user_id = decoded.user_id;
    req.body.username = decoded.username;
    next();
  });
};

module.exports = {verifyToken};