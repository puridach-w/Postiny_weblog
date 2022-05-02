// import React from 'react'
// import '../css/app.css';

// function Dashboard() {
// 	return (
// 		<div style={{marginLeft: "60px"}}>
// 			<h1>Dashboard</h1>
// 		</div>
// 	);
// }

// export default Dashboard;

import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../css/pages_css/adminRole/adminRP.css"
import SidebarUser from "../components/Layout/SidebarUser";
import Topbar from "../components/Layout/Topbar";
import {topArticle} from "../dummyData"
import {topSubscribedUser} from "../dummyData"
import TopArticle  from "../components/Dashboard/TopArticle";
import TopSubscribed  from "../components/Dashboard/TopSubscribed";
function Dashboard() {

    const dummy = {
		username: "Jimmy",
		profile_pic: "https://picsum.photos/400/600"
	};
    
    return (
        <div className="topbar-color">
            <Topbar name={dummy.username} img={dummy.profile_pic}/>
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