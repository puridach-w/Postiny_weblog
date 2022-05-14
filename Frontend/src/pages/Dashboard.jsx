import React, { useEffect} from "react";
import "../css/pages_css/adminRole/adminRP.css"
import SidebarUser from "../components/Layout/SidebarUser";
import Topbar from "../components/Layout/Topbar";
import TopArticle  from "../components/Dashboard/TopArticle";
import TopSubscribed  from "../components/Dashboard/TopSubscribed";
import Axios from "axios";

function Dashboard() {

    var user_id = localStorage.getItem("user_id");
    const token = localStorage.getItem('token');
	

	useEffect( () => {
		Axios.post('http://localhost:8080/auth', {
		authorization : "Bearer " + token
		}).then((response) => {
			if(response.data.status === 'ok'){
				if(response.data.decoded.role_id != 3){
					alert("This page for only user role.");
					if(response.data.decoded.role_id === 2){
						window.location = "/payment";
					} else if(response.data.decoded.role_id === 1){
						window.location = "/report-admin";
					}
				}
			} else{
				alert("authen failed");
				localStorage.removeItem("token");
				window.location = "/";
			}
		});
	})

    return (
        <div className="topbar-color">
            <Topbar user_id={user_id}/>
            <div style={{display: "flex"}}>
                <SidebarUser role="user" />
                <div style={{marginLeft: "110px"}} className="dashboard" >
                    <TopArticle />
                    <TopSubscribed />
                </div>
            </div>
        </div>  
    )
}

export default Dashboard;