
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

const getAllComment = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            return;
        }
        const article_id = req.params.article_id;
        db.query(`SELECT c.comment_id, c.content, c.created_at, u.user_id, u.username, u.profile_pic
                FROM comment c JOIN userinfo u ON c.user_id = u.user_id
                WHERE c.article_id = ?
                ORDER BY created_at DESC`,
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

const addComment = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            return;
        }
        const article_id = req.body.article_id;
        const user_id = req.body.user_id;
        const content = req.body.content;
        db.query(`INSERT INTO comment (user_id, article_id, content)
                VALUES (?, ?, ?)`,
        [user_id, article_id, content], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
            db.release();
        });
   }); 
}

const updateComment = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            return;
        }
        const content = req.body.content;
        const comment_id = req.body.comment_id;
        db.query(`UPDATE comment
                SET content = ?, updated_at = CURRENT_TIMESTAMP
                WHERE comment_id = ?`,
        [content, comment_id], (err, result) => {
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
        const comment_id = req.query.comment_id;
        db.query(`DELETE FROM comment
                WHERE comment_id = ?`,
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

const addViewing = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            return;
        }
        const article_id = req.body.article_id;
        const user_id = req.body.user_id;
        db.query(`INSERT INTO articleviewing (user_id, article_id)
                VALUES (?, ?)`,
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

const getViewing = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            return;
        }
        const article_id = req.params.article_id;
        const user_id = req.params.user_id;
        db.query(`SELECT * From articleviewing 
                WHERE article_id=? AND user_id=?`,
        [article_id,user_id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
            db.release();
        });
   }); 
}

const editArticle = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const article_id = req.body.article_id;
        const category = req.body.category;
        const title = req.body.title;
        const content = req.body.content;
        const article_pic = req.body.article_pic;
        const sub_required = req.body.sub_required;
        db.query(`UPDATE article
                SET category_id = ?, title = ?, content = ?, article_pic = ?, sub_required = ?, updated_at = CURRENT_TIMESTAMP
                WHERE article_id = ?`,
        [category, title, content, article_pic, sub_required, article_id],
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
    isLiked,
    like,
    unlike,
    getAllComment,
    addComment,
    updateComment,
    deleteComment,
    addViewing,
    getViewing,
    editArticle
}