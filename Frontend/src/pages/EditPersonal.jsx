import React, { useState } from "react";
import ponyreg from "../images/ponyreg.png"
import "../css/register.css"
import Axios from 'axios'
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import ProfilePic from "../components/ProfilePic"

export default function EditPersonal() {

    return (
        <div className="split-screen">
            <div className="left">
                <section className="copy">
                    <ProfilePic/>
                </section>
            </div>
                <div className="right">
                    <div className="backbtn">
                        <a href="/editprofile">&lt; back</a>
                    </div>
                    <form action="" className="formreg">
                        <section className="copy">
                            <h2>Edit personal information</h2>
                        </section>
                        <div className="input-container username">
                            <label>Username</label>
                            <input id="username" name="username" type="text" className="textinput" placeholder="Enter a unique username" required/>
                        </div>
                        <div className="input-container email">
                            <label>Email address</label>
                            <input id="email" name="email" type="email" placeholder="Enter your email" required
                            />
                        </div>
                        <div className="input-container firstname">
                            <label>First name</label>
                            <input id="fname" name="fname" type="text" className="textinput" placeholder="Enter your first name" required
                            />
                        </div>
                        <div className="input-container lastname">
                            <label>Last name</label>
                            <input id="lname" name="lname" type="text" className="textinput" placeholder="Enter your last name" required
                            />
                        </div>
                        <div className="input-container phonenum">
                            <label>Phone number</label>
                            <input id="telnum" name="telnum" type="tel" maxLength={10} placeholder="Enter your phone number" required/>
                        </div>
                        <div className="input-container gender">
                            <label>Gender</label>
                            <select id="gender" name="gender" required>
                                <option value="" disabled selected hidden>Gender</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option value="O">Other</option>
                            </select>
                        </div>
                        
                        <div className="input-container bio">
                            <label>Bio</label>
                            <textarea className="profilebio">Bio</textarea>
                        </div>
                        <div className="editdateofbirth">
                            <div className="input-container dob">
                                <label>Date of birth</label>
                                <input id="dob" name="dob" type="date" required/>
                            </div> 
                        </div>


                        {/* <div className="input-container profilePic">
                            <label>Profile Picture</label>
                            <input id="profilepic" name="profilepic" type="file"/>
                        </div>
                        <label htmlFor="icon-button-file">
                        <Input accept="image/*" id="icon-button-file" type="file" />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                        </label> */} 
                       
    
                    <button className="signupbtn" type="submit"
                    >Save Changes</button>
                </form>
            </div>

        </div>
    );
}