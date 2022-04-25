import React from 'react'
import "../../css/pages_css/adminRole/adminModal.css"

const AdminModal = ({ data, setOpenModal, setBlur}) => {
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
                            {/* จริงๆอันนี้ต้อง id ของ payment ไม่ใช่ user id */}
                            <p>ID: <span>{data.id}</span></p>
                            <p>Type: <span>{data.type}</span></p>
                            <p>Username: <span>{data.username}</span></p> 
                            <p>Date: <span>{data.date}</span></p> 
                            <p>Description: </p>
                            <p className='description'>{data.description}</p>
                    </div>
                    
                </div>

                <div className="footer">
                    <button 
                        className="approve"
                        onClick={() => {
                            data.status = "Approved"
                            // then tranfer coin into 'that' user
                            setOpenModal(false);
                            setBlur(false);
                        }}
                    >Approve</button>
                    <button 
                        className="reject"
                        onClick={() => {
                            data.status = "Rejected"
                            setOpenModal(false);
                            setBlur(false);
                        }}
                    >Reject</button>
                </div>
                    
            </div>
        </div>
    )
}

export default AdminModal;