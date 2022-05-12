
const pool = require("../config/db");

const topArticle = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        db.query(`SELECT a.article_id, a.category_id, a.title, a.article_pic,
                    (SELECT COUNT(*) FROM likearticle l WHERE l.article_id = a.article_id) AS likeCount,
                    (SELECT COUNT(*) FROM comment c WHERE c.article_id = a.article_id) AS commentCount,
                    (SELECT u.firstname FROM userinfo u WHERE u.user_id = a.author_id) AS firstname,
                    (SELECT u.lastname FROM userinfo u WHERE u.user_id = a.author_id) AS lastname
                FROM article a
                WHERE a.created_at > date_sub(now(), INTERVAL 1 week)
                ORDER BY likeCount DESC`,
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

const topSubscribe = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        db.query(`SELECT s.subscribed_user_id, COUNT(s.subscriber_id) AS subCount, u.firstname, u.lastname, u.profile_pic, c.category_name
                FROM subscription s JOIN userinfo u ON s.subscribed_user_id = u.user_id
                LEFT JOIN category c ON c.category_id = 
                (SELECT a.category_id
                FROM article a JOIN category c ON a.category_id = c.category_id
                WHERE author_id = s.subscribed_user_id
                GROUP BY category_id 
                ORDER BY COUNT(article_id) DESC LIMIT 1)
                WHERE s.created_at > date_sub(now(), INTERVAL 1 week)
                GROUP BY subscribed_user_id
                ORDER BY subCount DESC LIMIT 5`,
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
    topArticle,
    topSubscribe
}