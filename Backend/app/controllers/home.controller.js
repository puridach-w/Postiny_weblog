
const pool = require("../config/db");

const getFavCategory = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const user_id = req.query.user_id;
        db.query("SELECT category_id FROM userinterest WHERE user_id = ?",
        [user_id], 
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

const getCategory = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        db.query("SELECT category_id, category_name FROM category", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
            db.release();
        });
    });
}

const writeArticle = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const user_id = req.body.user_id;
        const category = req.body.category;
        const title = req.body.title;
        const content = req.body.content;
        const article_pic = req.body.article_pic;
        const sub_required = req.body.sub_required;
        db.query("INSERT INTO article (author_id, category_id, title, content, article_pic, sub_required) VALUES (?, ?, ?, ?, ?, ?)",
        [user_id, category, title, content, article_pic, sub_required],
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

const getBlogList = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        db.query(`SELECT article.*, category_name, userinfo.username, userinfo.firstname, userinfo.lastname, userinfo.profile_pic, COUNT(likearticle.user_id) AS totalLike
                FROM article JOIN category ON article.category_id = category.category_id 
                JOIN userinfo ON article.author_id = userinfo.user_id 
                LEFT JOIN likearticle ON likearticle.article_id = article.article_id
                GROUP BY article_id`,
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

const getSubscription = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        db.query(`SELECT * FROM subscription`,
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

const getSearchId = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const username = req.params.username;
        db.query(`SELECT user_id 
                FROM userinfo
                WHERE username=?`,
        [username],
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

module.exports = {
    writeArticle,
    getCategory,
    getBlogList,
    getFavCategory,
    getSubscription,
    getSearchId
}