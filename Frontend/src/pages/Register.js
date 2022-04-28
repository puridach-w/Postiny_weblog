import React, { useState } from "react";
import ponyreg from "../images/ponyreg.png"
import "../css/register.css"
import Axios from 'axios'

export default function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [gender, setGender] = useState("");
    const [DOB, setDOB] = useState("");
    const [password, setPassword] = useState("");

    const [userInfo, setUserInfo] = useState([]);

    Axios.get('http://localhost:8080/userinfo').then((response) => {
        setUserInfo(response.data);
        console.log("xxxxxxxxxxxxx " + userInfo);
    });

    console.log("********** " + userInfo);
    console.log("username " + username);
    console.log("email " + email);
    console.log("firstname " + firstname);
    console.log("lastname " + lastname);
    console.log("phone_number " + phone_number);
    console.log("gender " + gender);
    console.log("DOB " + DOB);
    console.log("password " + password);
   
    const addUser = async () => {
        Axios.post('http://localhost:8080/register', {
            username: username,
            email: email,
            firstname: firstname,
            lastname: lastname,
            phone_number: phone_number,
            gender: gender,
            DOB: DOB,
            password: password
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
        });
    }


    return (
        <div className="split-screen">
            <div className="left">
                <section className="copy">
                    <h2>Enjoy!</h2>
                    <img alt="" src={ponyreg}/>
                </section>
            </div>
                <div className="right">
                    <div className="backbtn">
                        <a href="/signin">&lt; back</a>
                    </div>
                    <form action="" className="formreg">
                        <section className="copy">
                            <h2>Create an account</h2>
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
                            <input id="email" name="email" type="email" placeholder="Enter your email" required
                                onChange={(event) => {
                                    setEmail(event.target.value);
                            }}
                            />
                        </div>
                        <div className="input-container firstname">
                            <label>First name</label>
                            <input id="fname" name="fname" type="text" className="textinput" placeholder="Enter your first name" required
                                onChange={(event) => {
                                    setFirstname(event.target.value);
                            }}
                            />
                        </div>
                        <div className="input-container lastname">
                            <label>Last name</label>
                            <input id="lname" name="lname" type="text" className="textinput" placeholder="Enter your last name" required
                                onChange={(event) => {
                                    setLastname(event.target.value);
                                }}
                            />
                        </div>
                        <div className="input-container phonenum">
                            <label>Phone number</label>
                            <input id="telnum" name="telnum" type="tel" maxLength={10} placeholder="Enter your phone number" required
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
                                <input id="dob" name="dob" type="date" required
                                    onChange={ (event) => {
                                        setDOB(event.target.value);
                                    }}
                                />
                            </div> 
                        </div>
                        <div className="input-container password">
                            <label>Password</label>
                            <input id="password" name="password" type="password" placeholder="Enter your password" required/>
                        </div>
                        <div className="input-container confirmpw">
                            <label>Confirm password</label>
                            <input id="confirmpw" name="confirmpw" type="password" placeholder="Confirm your password" required
                                onChange={(event) => {
                                    setPassword(event.target.value);
                            }}
                            />
                        </div>
    
                    <button className="signupbtn"
                        onClick={addUser}
                    >Create account
                    </button>
                </form>
            </div>
        </div>
    );
}