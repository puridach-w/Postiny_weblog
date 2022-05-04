const controller = require("../controllers/profile.controller");

module.exports = function (app) {
    app.get("/getSubscribed/:user_id/:profile_id", controller.getSubscribed);
    app.get("/getAllArticle/:profile_id", controller.getAllArticle);
    app.get("/getProfileData/:profile_id", controller.getProfileData);
    app.get("/getInterestCategory/:profile_id", controller.getInterestCategory);

    app.post("/subscribe",controller.subscribe);

    app.patch("/updateBalanceUser",controller.updateBalanceUser);
}