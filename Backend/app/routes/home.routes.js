const controller = require("../controllers/home.controller");
// const { verifyToken } = require("../middleware/authjwt");

module.exports = function (app) {
    app.get("/getcategory", controller.getCategory);
    app.post("/writearticle", controller.writeArticle);
    app.get("/getbloglist", controller.blogList);
}