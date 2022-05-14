import React from 'react'
import "../../css/pages_css/adminRole/adminModal.css"

const AdminModal = ({ data, manageReport, setOpenModal, setBlur}) => {
    return (
        <div className="modalApprove">
            <div className="approveContainer">
                <div className="approveClose">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                            setBlur(false);
                    }}
                    >
                    ✕
                    </button>
                </div>
        
                <div className="title">
                    <h1>Report Information</h1>
                </div>
                    
                <div className="body"> 
                    <div className="info">
                        <p>ID: <span>{data.report_id}</span></p>
                        <p>Type: <span>{data.report_type_name}</span></p>
                        <p>Username: <span>{data.username}</span></p> 
                        <p>Date: <span>{data.updated_at.substring(0, 10)}</span></p> 
                        <p>Description: </p>
                        <p className='description'>{data.description}</p>
                    </div>
                    
                </div>

                <div className="footer">
                    <button 
                        className="approve"
                        onClick={() => {
                            manageReport(2, data);
                            setOpenModal(false);
                            setBlur(false);
                            window.location.reload(true);
                        }}
                    >Approve</button>
                    <button 
                        className="reject"
                        onClick={() => {
                            manageReport(3, data);
                            setOpenModal(false);
                            setBlur(false);
                            window.location.reload(true);
                        }}
                    >Reject</button>
                </div>
                    
            </div>
        </div>
    )
}

export default AdminModal;