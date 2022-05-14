const controller = require("../controllers/admin.controller");

module.exports = function (app) {
    app.get("/getallreport", controller.getAllReport);
    app.patch("/updateReportStatus", controller.updateReportStatus);
    app.delete("/acceptDelete/:report_id", controller.acceptDelete);
    app.delete("/deleteArticle/:article_id", controller.deleteComment);
    app.delete("/deleteComment/:comment_id", controller.deleteArticle);
    app.get("/getReportCount", controller.getReportCount);
    app.post("/addReportType", controller.addReportType);
    app.post("/addCategoryType", controller.addCategoryType);
}