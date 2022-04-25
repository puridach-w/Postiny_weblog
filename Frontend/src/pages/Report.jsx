import React from 'react';
import '../css/pages_css/report.css';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import ReportRoundedIcon from '@material-ui/icons/ReportRounded';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
import Popup from "../components/Modal/reportPopUp";


function Report() {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [type,setType] = React.useState("");
    const [blur,setBlur] = React.useState(false);

	return (
	<div style={{marginLeft: "60px"}} className="container-fluid content">
        {modalOpen && <Popup setOpenModal={setModalOpen} reportType={type} setBlur={setBlur}/>}
        <div style={{ filter: blur ? "blur(5px)" : "none" }} >
            <div className="row">
                <div className="col-lg-12">
                    <h1 className='text'><ReportRoundedIcon style={{fontSize: "70px"}} /> Select report type</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <button onClick={() => {
                        setModalOpen(true);
                        setType("Article");
                        setBlur(true);
                        }} 
                        className='box margin-fBox'>
                    <DescriptionRoundedIcon style={{fontSize: "500%"}}/>
                    <p className='btn-text'>Article</p>
                    </button>
                </div>
                <div className="col-lg-3">
                    <button onClick={() => {
                        setModalOpen(true);
                        setType("Payment");
                        setBlur(true);
                        }} 
                        className='box margin-sBox'>
                    <MonetizationOnRoundedIcon style={{fontSize: "500%"}}/>
                    <p className='btn-text'>Payment</p>
                    </button>
                </div>
                <div className="col-lg-3">
                    <button onClick={() => {
                        setModalOpen(true);
                        setType("Comment");
                        setBlur(true);
                        }} 
                        className='box margin-tBox'>
                    <ChatRoundedIcon style={{fontSize: "500%"}}/>
                    <p className='btn-text'>Comment</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
	);
}

export default Report;