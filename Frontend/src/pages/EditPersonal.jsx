import React, { useState} from "react";
import ponyreg from "../images/ponyreg.png"
import "../css/register.css"
import Axios from 'axios'
import GoBackBtn from "../components/gobackbtn";

import {useLocation} from 'react-router-dom';

function EditPersonal() {
    const location = useLocation();
    const userData = location.state.data[0];
    const user_id = location.state.user_id;
    const [username, setUsername] = useState(userData.username);
    const [email, setEmail] = useState(userData.email);
    const [firstname, setFirstname] = useState(userData.firstname);
    const [lastname, setLastname] = useState(userData.lastname);
    const [phone_number, setPhone_number] = useState(userData.phone_number);
    const [gender, setGender] = useState(userData.gender);
    const [DOB, setDOB] = useState(userData.DOB.substring(0,10));
    const [bio,setBio] = useState(userData.bio);
    const [userInfo, setUserInfo] = useState([]);

    var date = new Date();

    var day = date.getDate() + 1;
    var month = date.getMonth() + 1;
    var year = date.getFullYear() - 12;
    var xyear = date.getFullYear() - 150;

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var minage = year + "-" + month + "-" + day;   
    var maxage = xyear + "-" + month + "-" + day;

    Axios.get('http://localhost:8080/userinfo').then((response) => {
        setUserInfo(response.data);
    });

    const handleSubmit = () => {
        let isValid = true;
        userInfo.map( item => {
            if (item.username === username) {
                if (user_id == item.user_id) {
                    isValid = true;
                } else {
                    alert("This username already exists!");
                    isValid = false;
                }
            }
        })
        if(isValid == true) {
            editPersonal();
        }
    }

    const editPersonal = () => {
        Axios.patch("http://localhost:8080/editPersonal",{
            user_id: user_id,
            username: username,
            email: email,
            firstname: firstname,
            lastname: lastname,
            phone_number: phone_number,
            gender: gender,
            bio: bio,
            DOB: DOB,
        }).then(() => {
            alert("Edit success!");
            window.location = `/profile/${user_id}`;
        })
    }

    return (
        <div className="split-screen">
            <div className="left">
                <section className="copy">
                    <h2>Enjoy!</h2>
                    <img alt="pony_picture" src={ponyreg}/>
                </section>
            </div>
                <div className="right">
                    <div className="backbtn">
                        <GoBackBtn />
                    </div>
                    <form action="" className="formreg">
                        <section className="copy">
                            <h2>Edit personal information</h2>
                        </section>
                        <div className="input-container username">
                            <label>Username</label>
                            <input id="username" value={username} name="username" type="text" className="textinput" placeholder="Enter a unique username" required
                                onChange={(event) => {
                                    setUsername(event.target.value);
                                }}
                            />
                        </div>
                        <div className="input-container email">
                            <label>Email address</label>
                            <input id="email" value={email} name="email" type="email" placeholder="Enter your email" required
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </div>
                        <div className="input-container firstname">
                            <label>First name</label>
                            <input id="fname" value={firstname} name="fname" type="text" className="textinput" placeholder="Enter your first name" required
                                onChange={(event) => {
                                        setFirstname(event.target.value);
                                }}
                            />
                        </div>
                        <div className="input-container lastname">
                            <label>Last name</label>
                            <input id="lname" value={lastname} name="lname" type="text" className="textinput" placeholder="Enter your last name" required
                                onChange={(event) => {
                                    setLastname(event.target.value);
                                }}
                            />
                        </div>
                        <div className="input-container phonenum">
                            <label>Phone number</label>
                            <input id="telnum" value={phone_number} name="telnum" type="tel" maxLength={10} placeholder="Enter your phone number" required
                                onChange={(event) => {
                                    setPhone_number(event.target.value);
                                }}
                            />
                        </div>
                        <div className="input-container gender">
                            <label>Gender</label>
                            <select id="gender" value={gender} name="gender" required
                                onChange={(event) => {
                                    setGender(event.target.value);
                                }}>
                                <option value="" disabled selected hidden>Gender</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option value="O">Other</option>
                            </select>
                        </div>
                        
                        <div className="input-container bio" rows="8">
                            <label>Bio</label>
                            <textarea className="profilebio" onChange={(event) => {
                                setBio(event.target.value);
                            }}>{bio}</textarea>
                        </div>
                        <div className="editdateofbirth">
                            <div className="input-container dob">
                                <label>Date of birth</label>
                                <input id="dob" value={DOB} name="dob" type="date" min={maxage} max={minage} required
                                    onChange={ (event) => {
                                        setDOB(event.target.value);
                                    }}
                                />
                            </div> 
                        </div>        
                    <button onClick={handleSubmit} className="signupbtn" type="button"
                    >Save Changes</button>
                </form>
            </div>

        </div>
    );
}

export default EditPersonal;