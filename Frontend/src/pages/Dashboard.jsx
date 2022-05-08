import React, { useState } from "react";
import "../css/pages_css/adminRole/adminRP.css"
import SidebarUser from "../components/Layout/SidebarUser";
import Topbar from "../components/Layout/Topbar";
import {topArticle} from "../dummyData"
import {topSubscribedUser} from "../dummyData"
import TopArticle  from "../components/Dashboard/TopArticle";
import TopSubscribed  from "../components/Dashboard/TopSubscribed";

function Dashboard() {

    var user_id = localStorage.getItem("user_id");

    const dummy = {
		username: "Jimmy",
		profile_pic: "https://picsum.photos/400/600"
	};
    
    return (
        <div className="topbar-color">
            <Topbar user_id={user_id}/>
            <div style={{display: "flex"}}>
                <SidebarUser role="user" />
                <div style={{marginLeft: "110px"}} className="dashboard" >
                    <TopArticle topATC={topArticle} />
                    <TopSubscribed topSU={topSubscribedUser} />
                </div>
            </div>
        </div>  
    )
}

export default Dashboard;