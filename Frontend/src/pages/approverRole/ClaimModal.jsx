import React from 'react'
import "../../css/pages_css/approverRole/approveModal.css"
import DropPicture from '@material-ui/icons/WallpaperRounded';

const ClaimModal = ({approveToReject, update, data, setOpenModal, setBlur }) => {

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
                    <h1>Claim Information</h1>
                </div>
                    
                <div className="body"> 
                <div className="upload">
                            <label className="img-frame">
                            <DropPicture className="drop-picture" style={{ fontSize: "70px" }} />
                                    <p>Drop your payment slip here</p>
                            <input className="input-file" type="file" name="rpticon" accept="image/png, image/jpeg"></input>
                            </label>
                        </div>
                    <div className="info">
                            <p>Payment ID: <span className="data">{data.payment_id}</span></p>
                            <p>Username: <span className="data">{data.username}</span></p> 
                            <p>Amount money: <span className="data">{data.amount}฿</span></p>
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
                    </div>
                    
                </div>
                    
            </div>
        </div>
    )
}

export default ClaimModal
