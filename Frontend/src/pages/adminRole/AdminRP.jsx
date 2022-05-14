import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/pages_css/adminRole/adminRP.css"
import AdminTable  from "./AdminTable";
import AdminModal from './AdminModal';
import SidebarUser from "../../components/Layout/SidebarUser";
import Topbar from "../../components/Layout/Topbar";
import AdminAddData  from "./AdminAddData";
import Axios from "axios";


function AdminRP() {
    const [blur,setBlur] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);
    const [catModalOpen, setCatModalOpen] = useState(false);
    const [data,setData] = useState();
    const [allData,setAllData] = useState([]);
    const [count, setCount] = useState([]);
    const token = localStorage.getItem('token');
    const admin_id = localStorage.getItem('user_id');

    useEffect( () => {
        Axios.post('http://localhost:8080/auth', {
        authorization : "Bearer " + token
        }).then((response) => {
            if(response.data.status === 'ok'){
                if(response.data.decoded.role_id != 1){
                    alert("This page for only admin role.");
                    if(response.data.decoded.role_id === 2){
                        window.location = "/payment";
                    } else if(response.data.decoded.role_id === 3){
                        window.location = "/home"
                    }
                }
            } else{
                alert("authen failed");
                localStorage.removeItem("token");
                window.location = "/";
            }
        });

        Axios.get('http://localhost:8080/getallreport').then((response) => {
            setAllData(response.data);
        });

        Axios.get('http://localhost:8080/getReportCount').then((response) => {
            setCount(response.data[0]);
        });
    }, []);

    const manageReport = (status , data) => {
        Axios.patch('http://localhost:8080/updateReportStatus', {
            report_id: data.report_id,
            status: status,
            admin_id: admin_id
        });
        // delete row data (article/comment)
        if(status === 2) {
            if (data.report_type_id === 1) {
                Axios.delete(`http://localhost:8080/deleteArticle/${data.article_id}`)
                .then(res => {console.log(res)});

                Axios.delete(`http://localhost:8080/acceptDelete/${data.report_id}`)
                .then(res => {console.log(res)});
            } else if (data.report_type_id === 3) {
                Axios.delete(`http://localhost:8080/deleteComment/${data.comment_id}`)
                .then(res => {console.log(res)});

                Axios.delete(`http://localhost:8080/acceptDelete/${data.report_id}`)
                .then(res => {console.log(res)});
            }
        }
    }

    const pendings = allData.filter( (item) => {
        return item.status_name === "Pending";
     });
    
    const exceptPending = allData.filter( (item) => {
        return item.status_name !== "Pending";
     });
     
     function callForModal(data){
        setModalOpen(true);
        setBlur(true);
        setData(data);
     }

    let navigate = useNavigate(); 

    function routeChange() { 
        let path = `/addapprover`; 
        navigate(path);
    }

    return (
        <div>
            <div className="topbar-color">
                <Topbar user_id={admin_id}/>
                <div style={{display: "flex"}}>
                    <SidebarUser role="admin"/>
                    <div>
                       <div style={{marginLeft: "110px"}} className="reportPage" >
                            {modalOpen && <AdminModal data={data} manageReport={manageReport} setOpenModal={setModalOpen} setBlur={setBlur}/>}
                            {catModalOpen && <AdminAddData setOpenModal={setCatModalOpen} setBlur={setBlur}/>}
                            <div style={{ filter: blur ? "blur(5px)" : "none" }}>
                            <button className="btn-addData addData" onClick={() => {
                                setCatModalOpen(true);
                                setBlur(true);
                            }}>
                            <h1>Add data</h1>
                            <p>report type / category</p>
                            </button>
                            <button className="btn-create create" onClick={routeChange}>
                                <h1>Create new account</h1>
                                <p>approver role</p>
                            </button>
                
                            <h1 className="pending">Pending reports <span className="redCircle">{count.pendingCount}</span></h1>
                            <AdminTable report={pendings} callModal={callForModal} />

                            <h1 className="complete">Completed reports <span className="greenCircle">{count.completeCount}</span></h1>
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