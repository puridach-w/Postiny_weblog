const controller = require("../controllers/wallet.controller");

module.exports = function (app) {
    app.get("/getAllPayment/:is_withdrawal", controller.getAllPayment);
    app.get("/getAllStatus", controller.getAllStatus);
    app.get("/getPaymentData/:user_id",controller.getPaymentData);

    app.post("/uploadTopup", controller.uploadTopup);

    app.patch("/updateStatus",controller.updateStatus);
    app.patch("/updateCoinbalance",controller.updateCoinbalance);
    app.patch("/updateChangeApproveToReject",controller.updateChangeApproveToReject)
    
};