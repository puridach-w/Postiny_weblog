const controller = require("../controllers/blog.controller");

module.exports = function (app) {
    app.get("/isLiked", controller.isLiked);
    app.get("/getAllComment/:article_id", controller.getAllComment)
    app.get("/getViewing/:article_id/:user_id", controller.getViewing)

    app.post("/like", controller.like);
    app.post("/addComment", controller.addComment)
    app.post("/addviewing", controller.addViewing)

    app.patch("/updateComment", controller.updateComment);
    app.patch("/editArticle", controller.editArticle);

    app.delete("/unlike", controller.unlike);
    app.delete("/deleteComment", controller.deleteComment);
}