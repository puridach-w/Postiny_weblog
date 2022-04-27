import React from "react";

import SidebarUser from "./SidebarUser";
import Topbar from "./Topbar";

import HomeRoute from "../../HomeRoutes";
import AdminRoutes from "../../pages/adminRole/AdminRoutes"
import ApproverRoutes from "../../pages/approverRole/ApproverRoutes";

import '../../css/app.css';

const dummy = {
    username: "Jimmy",
    profile_pic: "https://picsum.photos/400/600"
};

function Layout() {
    return (
        <div>
            <div className="topbar-color">
                <Topbar name={dummy.username} img={dummy.profile_pic}/>
                <div style={{display: "flex"}}>
                    <SidebarUser role="user" />
                    {/* <SidebarUser role="admin"/> */}
                    {/* <SidebarUser role="approver" /> */}
                    <div>
                        <HomeRoute />
                        {/* <AdminRoutes /> */}
                        {/* <ApproverRoutes /> */}
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Layout;