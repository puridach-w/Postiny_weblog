import React, { useState } from "react";
import "./reportPopUp.css";
import Axios from "axios";

function ReportPopUp({ report, setOpenModal, setBlur, user_id }) {

  const [articleId, setArticleId] = useState(null);
  const [paymentId, setPaymentId] = useState(null);
  const [commentId, setCommentId] = useState(null);
  const [description, setDescription] = useState("");

  const sendReport = () => {
    Axios.post("http://localhost:8080/sendreport",{
        report_type_id: report.report_type_id,
        reporter_id: user_id,
        status_id: 1,
        article_id: articleId,
        payment_id: paymentId,
        comment_id: commentId,
        description: description
    }).then( () => { 
      alert("The report was sent successfully.");
    })
    .catch(error => {
        alert(error + " - ID");
    });
  }

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
          ✕
          </button>
        </div>

        <div className="header">
          <h1>{report.report_type_name} report </h1>
        </div>

        <div className="information">
            <label className="reportID">{report.report_type_name} ID <span>*</span></label> 
            <input 
              className="inputBox" 
              type="text" 
              style={{width: "100%" }} 
              required
              onChange={(event) => {
                if (report.report_type_id === 1) {
                  setArticleId(event.target.value);
                } else if (report.report_type_id === 2) {
                  setPaymentId(event.target.value);
                } else if (report.report_type_id === 3) {
                  setCommentId(event.target.value);
                }
              }}
            />
            <label className="description">Description</label> 
            <textarea 
                className="inputBox area" 
                type="text" 
                rows="5" 
                cols= "50" 
                style={{width: "100%"}}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
            >
            </textarea> 
        </div>

        <div className="foot">
          <button 
            className="post-btn"
            onClick = {() => {
              sendReport()
              setOpenModal(false)
              setBlur(false)
            }}
            >Submit</button>
        </div>

        
      </div>
    </div>
  );
}

export default ReportPopUp;