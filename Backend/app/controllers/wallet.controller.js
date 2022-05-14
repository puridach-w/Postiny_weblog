const pool = require("../config/db");

const uploadTopup = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            return;
        }
        const user_id = req.body.user_id;
        const amount = req.body.amount;
        const receipt = req.body.receipt
        const is_withdrawal = req.body.is_withdrawal;
        db.query("INSERT INTO payment (user_id, status_id, is_withdrawal, amount, payment_slip) VALUES (?, 1, ?, ?, ?)", 
        [user_id,is_withdrawal,amount,receipt],(err, result) => {
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
            return;
        }
        const is_withdrawal = req.params.is_withdrawal;
        db.query(`SELECT payment.*, username, status_name FROM payment 
                INNER JOIN userinfo ON payment.user_id=userinfo.user_id 
                INNER JOIN status ON payment.status_id=status.status_id
                WHERE is_withdrawal = ?`,[is_withdrawal]
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
            return;
        }
        const payment_id = req.body.payment_id;
        const newStatus = req.body.status;
        const approver_id = req.body.approver_id;
        const payment_slip = req.body.payment_slip;
        db.query(`UPDATE payment 
        SET status_id = ?, approver_id = ?, payment_slip = ?,updated_at = CURRENT_TIMESTAMP 
        WHERE payment_id = ?`,
        [newStatus,approver_id,payment_slip,payment_id], (err, result) => {
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

const getPaymentData = (req,res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            return;
        }
        const user_id = req.params.user_id;
        db.query(`select p.* , u.username, s.status_name
        from payment p join userinfo u on p.user_id = u.user_id join status s on p.status_id = s.status_id
        where p.user_id = ? and p.is_withdrawal = 1
        order by p.created_at DESC limit 1`,
        [user_id], (err, result) => {
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
    uploadTopup,
    getAllPayment,
    getAllStatus,
    updateStatus,
    updateCoinbalance,
    updateChangeApproveToReject,
    getPaymentData
}