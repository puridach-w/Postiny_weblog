import React from "react";
import "./reportPopUp.css";

function ReportPopUp({ setOpenModal , reportType, setBlur}) {
  return (
    <div className="background">
      <div className="container-popup">

        <div className="closeBtn">
          <button
            onClick={() => {
              setOpenModal(false);
              setBlur(false);
            }}
          >
            X
          </button>
        </div>

        <div className="header">
          <h1>{reportType} report </h1>
        </div>

        <div className="information">
            <label className="reportID">{reportType} ID <span>*</span></label> 
            <input className="inputBox" type="text" style={{width: "100%" }} ></input> 
            <label className="description">Description <span>*</span></label> 
            <textarea className="inputBox area" type="text" rows="5" cols= "50" style={{width: "100%"}}></textarea> 
        </div>

        <div className="foot">
          <button className="post-btn">Submit</button>
        </div>

        
      </div>
    </div>
  );
}

export default ReportPopUp;