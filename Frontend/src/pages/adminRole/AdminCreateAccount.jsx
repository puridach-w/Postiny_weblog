import React, { useState,useEffect } from "react";
import ponyreg from "../../images/ponyreg.png"
import "../../css/register.css"
import Axios from 'axios'

export default function AdminCreateAccount() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [gender, setGender] = useState("");
    const [DOB, setDOB] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [userInfo, setUserInfo] = useState([]);

    const token = localStorage.getItem('token');

	useEffect( () => {
		Axios.post('http://localhost:8080/auth', {
		authorization : "Bearer " + token
		}).then((response) => {
			if(response.data.status === 'ok'){
                if(response.data.decoded.role_id != 1){
                    alert("This page for only admin role.");
                    if(response.data.decoded.role_id === 2){
                        window.location = "/payment";
                    } else if(response.data.decoded.role_id === 3){
                        window.location = "/home"
                    }
                }
            } else{
                alert("authen failed");
                localStorage.removeItem("token");
                window.location = "/";
            }
		});
	})

    Axios.get('http://localhost:8080/userinfo').then((response) => {
        setUserInfo(response.data);
    });

    const handleSubmit = () => {
        let isValid = true;
        if (confirmpassword !== password) {
            alert('Password do not match');
        } else {
            userInfo.map( item => {
                if (item.username === username) {
                    alert("This username already exists!");
                    isValid = false;
                }
            })
            if(isValid == true) {
                addNewUser();
            }
        }
    }

    const addNewUser = async () => {
        Axios.post('http://localhost:8080/register', {
        role_id: 2,
        username: username,
        email: email,
        firstname: firstname,
        lastname: lastname,
        phone_number: phone_number,
        gender: gender,
        DOB: DOB,
        password: confirmpassword
        }).then(() => {
            setUserInfo([
                ...userInfo,
                {
                    username: username,
                    email: email,
                    firstname: firstname,
                    lastname: lastname,
                    phone_number: phone_number,
                    gender: gender,
                    DOB: DOB,
                    password: password
                }
            ]);
            alert("Created approver account!");
            window.location = "/report-admin";
        });
    }

    var date = new Date();

    var day = date.getDate() + 1;
    var month = date.getMonth() + 1;
    var year = date.getFullYear() - 12;
    var xyear = date.getFullYear() - 150;

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var minage = year + "-" + month + "-" + day;   
    var maxage = xyear + "-" + month + "-" + day;

    return (
        <div className="split-screen">
            <div className="left">
                <section className="copy">
                    <h2>new year<br/> new approver<br/>same love ❤︎</h2>
                    <img alt="" src={ponyreg}/>
                </section>
            </div>
                <div className="right">
                    <div className="backbtn">
                        <a href="/report-admin">&lt; back</a>
                    </div>
                    <form action="" className="formreg">
                        <section className="copy">
                            <h2>Add new approver</h2>
                        </section>
                        <div className="input-container username">
                            <label>Username</label>
                            <input id="username" name="username" type="text" className="textinput" placeholder="Enter a unique username" required
                                onChange={(event) => {
                                    setUsername(event.target.value);
                                }}
                            />
                        </div>
                        <div className="input-container email">
                            <label>Email address</label>
                            <input id="email" name="email" type="email" placeholder="Enter your email" required pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}
                            />
                        </div>
                        <div className="input-container firstname">
                            <label>First name</label>
                            <input id="fname" name="fname" type="text" className="textinput" placeholder="Enter your first name" required
                                onChange={(event) => {
                                    setFirstname(event.target.value)
                                }}
                            />
                        </div>
                        <div className="input-container lastname">
                            <label>Last name</label>
                            <input id="lname" name="lname" type="text" className="textinput" placeholder="Enter your last name" required
                                onChange={(event) => {
                                    setLastname(event.target.value)
                                }}
                            />
                        </div>
                        <div className="input-container phonenum">
                            <label>Phone number</label>
                            <input id="telnum" name="telnum" type="tel" minLength={10} maxLength={10} placeholder="Enter your phone number" required
                                pattern="[0]{1}[0-9]{9}"
                                onChange={(event) => {
                                    setPhone_number(event.target.value);
                                }}
                            />
                        </div>
                        <div className="input-container gender">
                            <label>Gender</label>
                            <select id="gender" name="gender" required
                                onChange={(event) => {
                                    setGender(event.target.value);
                                }}>
                                <option value="" disabled selected hidden>Gender</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option value="O">Other</option>
                            </select>
                        </div>
                        <div className="dateofbirth">
                            <div className="input-container dob">
                                <label>Date of birth</label>
                                <input id="dob" name="dob" type="date" min={maxage} max={minage} required
                                    onChange={ (event) => {
                                        setDOB(event.target.value);
                                    }}
                                />
                            </div> 
                        </div>
                        <div className="input-container password">
                            <label>Password</label>
                            <input id="password" name="password" type="password" placeholder="Enter your password" required
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }}
                            />
                        </div>
                        <div className="input-container confirmpw">
                            <label>Confirm password</label>
                            <input id="confirmpw" name="confirmpw" type="password" placeholder="Confirm your password" required
                            onChange={(event) => {
                                setConfirmPassword(event.target.value)
                            }}
                            />
                        </div>
    
                    <button 
                        className="signupbtn" 
                        type="button" 
                        onClick={handleSubmit}
                    >Create account
                    </button>
                </form>
            </div>

        </div>
    );
}