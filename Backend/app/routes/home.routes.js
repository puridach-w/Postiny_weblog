const controller = require("../controllers/home.controller");

module.exports = function (app) {
    app.get("/getcategory", controller.getCategory);
    app.post("/writearticle", controller.writeArticle);
}