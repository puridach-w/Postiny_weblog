import React, { useState, useEffect } from 'react';
import '../css/pages_css/report.css';
import ReportRoundedIcon from '@material-ui/icons/ReportRounded';

import Popup from "../components/Modal/reportPopUp";
import SidebarUser from "../components/Layout/SidebarUser";
import Topbar from "../components/Layout/Topbar";
import Axios from "axios";



function Report() {
    const [modalOpen, setModalOpen] = useState(false);
    const [type, setType] = useState([]);
    const [selectedType, setSelectedType] = useState([]);
    const [blur,setBlur] = useState(false);
    var user_id = localStorage.getItem("user_id");

    useEffect(() => {
        Axios.get('http://localhost:8080/reporttype').then((response) => {
            setType(response.data);
        });
    }, []);

	return (
    <div>
        <div className="topbar-color">
            <Topbar user_id={user_id}/>
            <div style={{display: "flex"}}>
                <SidebarUser role="user" />
                <div>
                    <div style={{marginLeft: "60px"}} className="container-fluid content">
                        {modalOpen 
                        &&
                        <Popup 
                            setOpenModal={setModalOpen} 
                            report={selectedType} 
                            setBlur={setBlur}
                            user_id={user_id}
                        />}
                        <div style={{ filter: blur ? "blur(5px)" : "none" }} >
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1 className='text'>
                                    <ReportRoundedIcon style={{fontSize: "70px"}} /> Select report type</h1>
                                </div>
                            </div>
                            <div className="row">
                                {type.map( report => (
                                    <div className="col-lg-3 reporttype">
                                        <button onClick={() => {
                                            setSelectedType(report);
                                            setModalOpen(true);
                                            setBlur(true);
                                            }} 
                                            className='box margin-fBox'>
                                        <img src={"http://localhost:8080" + `/image/${report.report_type_icon}`} />
                                        <p className='btn-text'>{report.report_type_name}</p>
                                        </button>
                                    </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
	
	);
}

export default Report;