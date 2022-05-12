const pool = require("../config/db");

const transactionUpload = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            db.release();
            return;
        }
        const user_id = req.body.user_id;
        const amount = req.body.amount;
        const receipt = req.body.receipt
        db.query("INSERT INTO payment (user_id, status_id, is_withdrawal, amount, payment_slip) VALUES (?, 1, 0, ?, ?)", 
        [user_id,amount,receipt],(err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
            db.release();
        });
   });
}

const getAllPayment = (req,res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            db.release();
            return;
        }
        db.query(`SELECT payment.*, username, status_name FROM payment 
                INNER JOIN userinfo ON payment.user_id=userinfo.user_id 
                INNER JOIN status ON payment.status_id=status.status_id`
        , (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
            db.release();
        });
   });
}

const getAllStatus = (req,res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            db.release();
            return;
        }
        db.query("SELECT * from status", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
            db.release();
        });
   });
}

const updateStatus = (req,res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            db.release();
            return;
        }
        const payment_id = req.body.payment_id;
        const newStatus = req.body.status;
        const approver_id = req.body.approver_id;
        db.query("UPDATE payment SET status_id = ?, approver_id = ?, updated_at = CURRENT_TIMESTAMP WHERE payment_id = ?",
        [newStatus,approver_id,payment_id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
            db.release();
        });
   });
}

const updateCoinbalance = (req,res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            db.release();
            return;
        }
        const user_id = req.body.user_id;
        const amount = req.body.amount;
        db.query("UPDATE userinfo SET coin_balance = coin_balance + ? , updated_at = CURRENT_TIMESTAMP WHERE user_id = ?",
        [amount,user_id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
            db.release();
        });
   });
}

const updateChangeApproveToReject = (req,res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            db.release();
            return;
        }
        const user_id = req.body.user_id;
        const amount = req.body.amount;
        db.query("UPDATE userinfo SET coin_balance = coin_balance - ? , updated_at = CURRENT_TIMESTAMP WHERE user_id = ?",
        [amount,user_id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
            db.release();
        });
   });
}

module.exports = {
    transactionUpload,
    getAllPayment,
    getAllStatus,
    updateStatus,
    updateCoinbalance,
    updateChangeApproveToReject
}