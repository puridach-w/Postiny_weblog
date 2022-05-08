const controller = require("../controllers/dashboard.controller");

module.exports = function (app) {
    app.get("/getTopArticle", controller.topArticle);
    app.get("/getTopSubscribe", controller.topSubscribe);
}