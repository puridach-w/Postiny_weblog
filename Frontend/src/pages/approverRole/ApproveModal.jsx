import React from 'react'
import "../../css/pages_css/approverRole/approveModal.css"

const ApproveModal = ({approveToReject, update, data, setOpenModal, setBlur }) => {

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
                    <img src={"http://localhost:8080" + `/image/${data.payment_slip}` } alt = "Employee-img" />
                    <div className="info">
                            <p>Payment ID: <span className="data">{data.payment_id}</span></p>
                            <p>Username: <span className="data">{data.username}</span></p> 
                            <p>Amount money: <span className="data">{data.amount}฿</span></p>
                            {data.status_id === 1? 
                            <div className="footer">
                                <button 
                                    className="approve"
                                    onClick={() => {
                                        update(2,data);
                                        // then tranfer coin into 'that' user
                                        setOpenModal(false);
                                        setBlur(false);
                                        window.location.reload(true);
                                    }}
                                >Approve</button>
                                <button 
                                    className="reject"
                                    onClick={() => {
                                        if(data.status_id === 2){
                                            approveToReject(3,data);
                                        } else{
                                            update(3,data);
                                        }
                                        setOpenModal(false);
                                        setBlur(false);
                                        window.location.reload(true);
                                    }}
                                >Reject</button>
                            </div>
                            :
                            data.status_id === 2? 
                            <div className="footer">
                                <button 
                                    className="reject"
                                    onClick={() => {
                                        if(data.status_id === 2){
                                            approveToReject(3,data);
                                        } else{
                                            update(3,data);
                                        }
                                        setOpenModal(false);
                                        setBlur(false);
                                        window.location.reload(true);
                                    }}
                                >Reject</button>
                            </div>
                            :
                            <div className="footer">
                                <button 
                                    className="approve"
                                    onClick={() => {
                                        update(2,data);
                                        // then tranfer coin into 'that' user
                                        setOpenModal(false);
                                        setBlur(false);
                                        window.location.reload(true);
                                    }}
                                >Approve</button>
                            </div>
                            }
                            
                    </div>
                    
                </div>
                    
            </div>
        </div>
    )
}

export default ApproveModal