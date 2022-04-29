import React, { useState } from "react";
import "../../css/pages_css/adminRole/adminRP.css"
import {reports} from "../../dummyData"
import AdminTable  from "./AdminTable";
import AdminModal from './AdminModal';
import SidebarUser from "../../components/Layout/SidebarUser";
import Topbar from "../../components/Layout/Topbar";


function AdminRP() {
    const [blur,setBlur] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);
    const [data,setData] = useState();

    const pendings = reports.filter( (item) => {
        return item.status === "Pending";
     });
    
    const exceptPending = reports.filter( (item) => {
        return item.status !== "Pending";
     });
     
     function callForModal(data){
        setModalOpen(true);
        setBlur(true);
        setData(data);
     }

     const dummy = {
        username: "Jimmy",
        profile_pic: "https://picsum.photos/400/600"
    };


    return (
        <div>
            <div className="topbar-color">
                <Topbar name={dummy.username} img={dummy.profile_pic}/>
                <div style={{display: "flex"}}>
                    <SidebarUser role="admin"/>
                    <div>
                       <div style={{marginLeft: "110px"}} className="reportPage" >
        {modalOpen && <AdminModal data={data} setOpenModal={setModalOpen} setBlur={setBlur}/>}
        <div style={{ filter: blur ? "blur(5px)" : "none" }}>
            <button className="btn-addData addData">
                <h1>Add data</h1>
                <p>report type / category</p>
            </button>
            <button className="btn-create create">
                <h1>Create new account</h1>
                <p>approver role</p>
            </button>
                
            {/* มันไม่ใช้ array นะอีหนูเดี่ยวต้อง count แบบใหม่ */}
            <h1 className="pending">Pending reports <span className="redCircle">{pendings.length}</span></h1>
            <AdminTable report={pendings} callModal={callForModal} />

            <h1 className="complete">Completed reports <span className="greenCircle">{exceptPending.length}</span></h1>
            <AdminTable report={exceptPending} callModal={callForModal} />
        </div>
            

        </div> 
                    </div> 
                </div>
            </div>
        </div>
        
    )
}

export default AdminRP;