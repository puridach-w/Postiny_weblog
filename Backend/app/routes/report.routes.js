const controller = require("../controllers/report.controller");

module.exports = function (app) {
    app.get("/reporttype", controller.getReportType);
    app.post("/sendreport", controller.sendReport);
}