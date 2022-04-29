import React from "react";
import '../css/pages_css/TransactionUpload.css';
import WallpaperRoundedIcon from '@material-ui/icons/WallpaperRounded';
import {useLocation} from 'react-router-dom';

import SidebarUser from "../components/Layout/SidebarUser";
import Topbar from "../components/Layout/Topbar";


function TransactionUpload(){
    const location = useLocation();

    const dummy = {
        username: "Jimmy",
        profile_pic: "https://picsum.photos/400/600"
    };

    return (
        <div>
            <div className="topbar-color">
                <Topbar name={dummy.username} img={dummy.profile_pic}/>
                <div style={{display: "flex"}}>
                    <SidebarUser role="user" />
                    <div>
                      <div style={{marginLeft: "60px"}} className="container-fluid">
        <div className="content row">
            <div className="col-lg-6 total">
                <h1>Total payment: <span className="amount">{location.state.value}฿</span></h1> <br/>
                <h3>Kasikorn Bank</h3> <br/>
                <p>Account name:    Postiny CO.LTD.</p>
                <p>Account number:  <span className="accountNumber">123-4567-890</span></p>
            </div> 
            <div className="col-lg-6 slip">
                <div className="upload">
                    <h1>Please upload your transfer slip</h1>
                    <label className="drop-image">
                    <br/>
                        <WallpaperRoundedIcon style={{fontSize: "90px"}}/>
                        Drop your image 
                        <br/>
                        <input className="inputFile" type="file" name="slip" accept="image/png, image/jpeg"></input>
                    </label>
                </div>
                <button className="btn-upload">upload now</button>
            </div> 
        </div>
    </div>
                    </div> 
                </div>
            </div>
        </div>
    
    )
}

export default TransactionUpload;