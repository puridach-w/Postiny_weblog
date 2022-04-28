
const pool = require("../config/db");

const userInfo = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            return;
        }
        db.query("SELECT * FROM userinfo", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
   });
}

const register = (req, res) => {
    pool.getConnection((err, db) => {
        const username = req.body.username;
        const email = req.body.email;
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const phone_number = req.body.phone_number;
        const gender = req.body.gender;
        const DOB = req.body.DOB;
        const password = req.body.password;
        
        db.query("INSERT INTO userinfo (role_id, username, password, email, firstname, lastname, DOB, gender, phone_number, coin_balance, created_at, updated_at) VALUES (3,?,?,?,?,?,?,?,?,0,NOW(),NOW())",
        [username, password, email, firstname, lastname, DOB, gender, phone_number],
        (err,result) => {
            if (err) {
                console.log(err);
                res.status(500).json({'error':err});
                return;
            } else {
                res.send(result);
            }
        });
   });
}


const signin = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const username = req.body.username;
        const password = req.body.password;
        console.log(username);
        console.log(password);
        db.query("SELECT username,password FROM userinfo WHERE username = ?",[username], (err,result) => {
            if(err) {
                console.log(err);
            } else {
                if (password === result[0].password) {
                    res.send(result);
                } else{
                    console.log("Wrong password!");
                }
            }
        })
   });
};

module.exports = {
    register,
    userInfo,
    signin
};