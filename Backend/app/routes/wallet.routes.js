const controller = require("../controllers/wallet.controller");

module.exports = function (app) {
    app.get("/getAllPayment", controller.getAllPayment);
    app.get("/getAllStatus", controller.getAllStatus);
    app.get("/getUser")

    app.post("/transaction", controller.transactionUpload);

    app.patch("/updateStatus",controller.updateStatus);
    app.patch("/updateCoinbalance",controller.updateCoinbalance);
    app.patch("/updateChangeApproveToReject",controller.updateChangeApproveToReject)
    
};