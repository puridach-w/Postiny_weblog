const controller = require("../controllers/profile.controller");

module.exports = function (app) {
    app.get("/getSubscribed/:user_id/:profile_id", controller.getSubscribed);
    app.get("/getAllArticle/:profile_id", controller.getAllArticle);
    app.get("/getProfileData/:profile_id", controller.getProfileData);
    app.get("/getInterestCategory/:profile_id", controller.getInterestCategory);
    app.get("/getFullAdDay/:article_id", controller.getFullAdDay)
    app.get("/getArticleData/:article_id", controller.getArticleData);
    app.get("/checkAmount/:user_id", controller.checkAmount);

    app.post("/subscribe",controller.subscribe);
    app.post("/addAdvertise", controller.addAdvertise);

    app.patch("/updateBalanceUser",controller.updateBalanceUser);
}