
const pool = require("../config/db");

const getReportType = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        db.query("SELECT * FROM reporttype", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
            db.release();
        });
    });
}

const sendReport = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const report_type_id = req.body.report_type_id;
        const reporter_id = req.body.reporter_id;
        const status_id = req.body.status_id;
        const article_id = req.body.article_id;
        const payment_id = req.body.payment_id; 
        const comment_id = req.body.comment_id; 
        const description = req.body.description;
        db.query(`INSERT INTO report (report_type_id, reporter_id, status_id, article_id, payment_id, comment_id, description, created_at, updated_at) 
                VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
        [report_type_id, reporter_id, status_id, article_id, payment_id, comment_id, description],
        (err,result) => {
            if (err) {
                console.log(err);
                res.status(500).json({'error':err});
                db.release();
                return;
            } else {
                res.send(result);
            }
            db.release();
        });
   });
}

module.exports = {
    getReportType,
    sendReport
}