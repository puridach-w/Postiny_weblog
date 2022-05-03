const controller = require("../controllers/user.controller");

module.exports = function (app) {

    app.get("/userinfo", controller.userInfo);
    app.get("/currentuser/:id", controller.currentUser);
    app.get("/getAllCategory", controller.getAllCategory);

    app.post("/register", controller.register);
    app.post("/signin", controller.signin);
    app.post("/addCategory", controller.addCategory)

    app.post("/auth",controller.auth);
    
};