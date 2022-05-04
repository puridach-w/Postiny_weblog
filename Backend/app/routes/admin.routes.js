const controller = require("../controllers/admin.controller");

module.exports = function (app) {
    app.get("/getallreport", controller.getAllReport);
    app.patch("/updateReportStatus", controller.updateReportStatus);
    app.delete("/acceptDelete/:report_id", controller.acceptDelete);
}