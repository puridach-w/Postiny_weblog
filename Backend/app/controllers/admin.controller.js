
const pool = require("../config/db");

const getAllReport = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            return;
        }
        db.query(`SELECT report.*, username, status_name, report_type_name FROM report 
                INNER JOIN userinfo ON report.reporter_id = userinfo.user_id 
                INNER JOIN status ON report.status_id=status.status_id 
                INNER JOIN reporttype ON report.report_type_id = reporttype.report_type_id`, 
        (err, result) => {
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
            return;
        }
        const report_id = req.body.report_id;
        const newStatus = req.body.status;
        const admin_id = req.body.admin_id;
        db.query(`UPDATE report SET status_id = ?, admin_id = ?, updated_at = CURRENT_TIMESTAMP
                WHERE report_id = ?`,
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

const acceptDelete = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
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

const deleteComment = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            return;
        }
        const article_id = req.params.article_id;
        db.query("DELETE FROM article WHERE article_id = ?",
        [article_id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
            db.release();
        });
   }); 
}

const deleteArticle = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            return;
        }
        const comment_id = req.params.comment_id;
        db.query("DELETE FROM comment WHERE comment_id = ?",
        [comment_id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
            db.release();
        });
   }); 
}

const getReportCount = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            return;
        }
        db.query(`SELECT completed.completeCount, pending.pendingCount
                FROM 
                (SELECT COUNT(*) as completeCount, s.status_name
                FROM report JOIN status s ON report.status_id = s.status_id
                WHERE s.status_name = "approved" OR s.status_name = "rejected") AS completed,
                (SELECT COUNT(*) as pendingCount, s.status_name
                FROM report JOIN status s ON report.status_id = s.status_id
                WHERE s.status_name = "pending") AS pending`, 
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
            db.release();
        });
   });
}

const addReportType = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const report_type_name = req.body.report_type_name;
        const report_type_icon = req.body.report_type_icon;
        db.query("INSERT INTO reporttype (report_type_name, report_type_icon) VALUES (?, ?)",
        [report_type_name, report_type_icon],
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

const addCategoryType = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const category_name = req.body.category_name;
        const category_icon = req.body.category_icon;
        db.query("INSERT INTO category (category_name, category_icon) VALUES (?, ?)",
        [category_name, category_icon],
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
    getAllReport,
    updateReportStatus,
    acceptDelete,
    getReportCount,
    addReportType,
    addCategoryType,
    deleteComment,
    deleteArticle
}