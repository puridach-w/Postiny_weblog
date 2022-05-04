
const pool = require("../config/db");

const getAllReport = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            db.release();
            return;
        }
        db.query("SELECT report.*, username, status_name, report_type_name FROM report INNER JOIN userinfo ON report.reporter_id = userinfo.user_id INNER JOIN status ON report.status_id=status.status_id INNER JOIN reporttype ON report.report_type_id = reporttype.report_type_id", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
            db.release();
        });
   });
}

const updateReportStatus = (req,res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            db.release();
            return;
        }
        const report_id = req.body.report_id;
        const newStatus = req.body.status;
        const admin_id = req.body.admin_id;
        db.query("UPDATE report SET status_id = ?, admin_id = ?, updated_at = CURRENT_TIMESTAMP WHERE report_id = ?",
        [newStatus, admin_id, report_id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
            db.release();
        });
   });
}

// DELETE FROM table_name WHERE id=id,

const acceptDelete = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            db.release();
            return;
        }
        const report_id = req.params.report_id;
        db.query("DELETE FROM report WHERE report_id = ?",
        [report_id], (err, result) => {
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
    getAllReport,
    updateReportStatus,
    acceptDelete
}