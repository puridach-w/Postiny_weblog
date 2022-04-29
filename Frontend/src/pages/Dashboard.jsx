import React from 'react'
import '../css/app.css';
import SidebarUser from "../components/Layout/SidebarUser";
import Topbar from "../components/Layout/Topbar";

function Dashboard() {

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
                      <div style={{marginLeft: "60px"}}>
			<h1>Dashboard</h1>
		</div>
                    </div> 
                </div>
            </div>
        </div>
		
	);
}

export default Dashboard;