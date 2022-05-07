const controller = require("../controllers/blog.controller");

module.exports = function (app) {
    app.get("/isLiked", controller.isLiked);
    app.post("/like", controller.like);
    app.delete("/unlike", controller.unlike);
}