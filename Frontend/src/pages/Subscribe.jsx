import React from "react";
import GoBackBtn from "../components/gobackbtn";
import profile from "../images/profilesample.jpg"
import { useParams } from "react-router";
import {userInfo} from "../dummyData"
import { Button , IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import "../css/subscribe.css"

export default function Subscribe() {
    const {id} = useParams();

    let user = userInfo.find(user => user.user_id === parseInt(id));

    function handleClick() {
        alert("subscribed!!");
    }
    return (
        <div className="subscribeuser">
        <GoBackBtn path="../profile"/>
            <div className="subcontainer1">
                <div className="subsummary">
                    <h2>Subscription</h2>
                    <div className="subprofileimg">
                        <img alt="" src={profile}/>
                    </div>
                <div className="subuserDetail">
                    <h3 className="subname">{user.firstname} <br/> {user.lastname}</h3>
                </div>
                <div className="subdescription">
                    <h4>Support and Subscribe to help {user.firstname} keep writing wonderful articles</h4>
                    <div className="subButtons">
                        <button className="subscribeuserbtn" onClick={handleClick}>subscribe with 20 coins </button>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    );
}

