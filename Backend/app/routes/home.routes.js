const controller = require("../controllers/home.controller");

module.exports = function (app) {
    app.get("/getcategory", controller.getCategory);
    app.get("/getbloglist", controller.getBlogList);
    app.get("/getfavcategory", controller.getFavCategory);
    app.get("/getSubscription", controller.getSubscription);
    app.get("/getSearchId/:username", controller.getSearchId);

    app.post("/writearticle", controller.writeArticle);
}