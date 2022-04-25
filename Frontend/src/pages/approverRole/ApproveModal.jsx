import React from 'react'
import "../../css/pages_css/approverRole/approveModal.css"

const ApproveModal = ({ data, setOpenModal, setBlur }) => {
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
                    <h1>Payment Information</h1>
                </div>
                    
                <div className="body"> 
                    <img src={data.receipt} />
                    <div className="info">
                            {/* จริงๆอันนี้ต้อง id ของ payment ไม่ใช่ user id */}
                            <p>Payment ID: <span>{data.id}</span></p>
                            <p>Username: <span>{data.username}</span></p> 
                            <p>Amount money: <span>{data.amount}฿</span></p>
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
                    
            </div>
        </div>
    )
}

export default ApproveModal