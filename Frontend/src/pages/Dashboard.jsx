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
import {topArticle} from "../dummyData"
import {topSubscribedUser} from "../dummyData"
import TopArticle  from "../components/Dashboard/TopArticle";
import TopSubscribed  from "../components/Dashboard/TopSubscribed";
function Dashboard() {
    

    return (
        <div style={{marginLeft: "110px"}} className="dashboard" >
        
        <div>

            <TopArticle topATC={topArticle} />
			<TopSubscribed topSU={topSubscribedUser} />
            </div>
            

        </div>
    )
}

export default Dashboard;