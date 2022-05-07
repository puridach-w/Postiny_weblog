const controller = require("../controllers/home.controller");

module.exports = function (app) {
    app.get("/getcategory", controller.getCategory);
    app.post("/writearticle", controller.writeArticle);
    app.get("/getbloglist", controller.getBlogList);
    app.get("/getfavcategory", controller.getFavCategory);
    app.get("/getSubscription", controller.getSubscription);
}