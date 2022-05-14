const pool = require("../config/db");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const secret = "secretNajaYarHaiFGroupPomNaKrub";

// for getting all user info to insert previous user (client) while regist the new user
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
            db.release();
        });
   });
}

 // for getting a username and profile picture to show on each page
const currentUser = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            return;
        }
        const current_id = req.params.id;
        db.query("SELECT * FROM userinfo WHERE user_id = ?",
        [current_id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
            db.release();
        });
    });
}

// insert data into userinfo table for regist
const register = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const role_id = req.body.role_id;
        const username = req.body.username;
        const email = req.body.email;
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const phone_number = req.body.phone_number;
        const gender = req.body.gender;
        const DOB = req.body.DOB;
        const password = req.body.password;
        const hashPassword = bcrypt.hashSync(password, saltRounds);
        db.query(`INSERT INTO userinfo (role_id, username, password, email, firstname, lastname, DOB, gender, phone_number, coin_balance, created_at, updated_at) 
                VALUES (?,?,?,?,?,?,?,?,?,0,NOW(),NOW())`,
        [role_id, username, hashPassword, email, firstname, lastname, DOB, gender, phone_number],
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

// login with separate role
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
        db.query("SELECT username,password,role_id,user_id FROM userinfo WHERE username = ?",[username], (err,result) => {
            if(err) {
                console.log(err);
            } else if(result.length === 0){
                res.json({msg: "User not found"});
            } 
            else {
                const role_id = result[0].role_id;
                if(role_id === 1){
                    temp = "Success login ADMIN";
                } else if (role_id === 2){
                    temp = "Success login APPROVER";
                } else if (role_id === 3){
                    temp = "Success login USER";
                }
                if (bcrypt.compareSync(password, result[0].password)) {
                    var token = jwt.sign({ username: result[0].username , role_id: result[0].role_id}, secret, {expiresIn: "10h"});
                    res.json({temp: temp ,msg: "login success", token: token, user_id: result[0].user_id});
                } else{
                    res.json({msg: "Wrong password"});
                }
            db.release();
            }
        })
   });
};

const auth = (req, res) => {
    try{
        var token = req.body.authorization.split(' ')[1];
        var decoded = jwt.verify(token,secret);
        res.json({status: "ok", decoded});
    }catch(err){
        res.json({status: "err", msg: err.message});
    }   
}

const getAllCategory = (req, res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        db.query("SELECT * FROM category", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
            db.release();
        });
    });
}

// insert to userinterest entity when user regist the account
const addCategory = (req,res) => {
    pool.getConnection((err, db) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        const user_id = req.body.user_id;
        const category_id = req.body.category_id;
        db.query("INSERT INTO userinterest (user_id,category_id) VALUES (?, ?)",
        [user_id,category_id], (err, result) => {
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
    register,
    userInfo,
    currentUser,
    signin,
    auth,
    getAllCategory,
    addCategory
};