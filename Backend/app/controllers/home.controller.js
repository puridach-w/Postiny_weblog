
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

const blogList = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        db.query("SELECT article.*, category_name FROM article JOIN category ON article.category_id = category.category_id ", (err, result) => {
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
    blogList,
    getFavCategory
}