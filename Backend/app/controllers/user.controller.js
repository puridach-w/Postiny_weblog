
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
    console.log("1");
    console.log(req.body);
    pool.getConnection((err, db) => {
        console.log("1.5");
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
            console.log("2");
            if (err) {
                console.log("3");
                console.log(err);
                res.status(500).json({'error':err});
                return;
            } else {
                console.log("4");
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
        let temp = "";
        console.log(username);
        console.log(password);
        db.query("SELECT username,password,role_id FROM userinfo WHERE username = ?",[username], (err,result) => {
            if(err) {
                console.log(err);
            } else {
                const role_id = result[0].role_id;
                if(role_id === 1){
                    temp = "Success login ADMIN";
                } else if (role_id === 2){
                    temp = "Success login APPROVER";
                } else if (role_id === 3){
                    temp = "Success login USER";
                }
                if (password === result[0].password) {
                    res.send(temp);
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