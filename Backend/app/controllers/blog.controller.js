
const pool = require("../config/db");

const isLiked = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const user_id = req.query.user_id;
        const article_id = req.query.article_id;
        db.query(`SELECT EXISTS 
                    (SELECT *
                    FROM likearticle
                    WHERE user_id = ? AND article_id = ?) AS isLiked`,
        [user_id, article_id], 
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

const like = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const user_id = req.body.user_id;
        const article_id = req.body.article_id;
        db.query(`INSERT INTO likearticle (user_id, article_id)
                    VALUES (?, ?)`,
        [user_id, article_id],
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

const unlike = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            db.release();
            return;
        }
        const user_id = req.query.user_id;
        const article_id = req.query.article_id;
        db.query(`DELETE FROM likearticle
                    WHERE user_id = ? AND article_id = ?`,
        [user_id, article_id], (err, result) => {
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
    isLiked,
    like,
    unlike
}