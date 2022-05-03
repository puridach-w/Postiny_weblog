import React, { useState } from 'react'
import Axios from "axios"
import "../../css/layout_css/topbar.css";

function Topbar({ user_id }) {

    const [user, setUser] = useState("");

    Axios.get(`http://localhost:8080/currentuser/${user_id}`).then((response) => {
        setUser(response.data[0]);
    });

    return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className='logo-background'>
                <p className="logo">Postiny</p>
            </div>
            <div className="topbarRight">
                <span className="topbarName">Hello, {user.username} </span>
                <img className="topbarProfile" src={user.profile_pic} alt="profile" />
            </div>
        </div>
    </div>
    )
}

export default Topbar;
