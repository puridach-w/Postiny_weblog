import React, {useEffect} from "react";
import "../components/Modal/pePopup.css";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

import SidebarUser from "../components/Layout/SidebarUser";
import Topbar from "../components/Layout/Topbar";


function ClaimSummary() {
  var user_id = localStorage.getItem("user_id");

  const navigate = useNavigate();
  const goWallet = () => navigate('/wallet');

  
const payment = {
  payment_id: 4,
  user_id: 1,
  username: "iamkonsuay",
  status: "Pending",
  amount: "500",
  created_at: "2022-05-03 11.26.30"
};

  return (
      <div>
          <div className="topbar-color">
              <Topbar user_id={user_id}/>
              <div style={{display: "flex"}}>
                  <SidebarUser role="user" />
                  <div>
                  <div className="cmodalBackground">
      <div className="cmodalContainer">
        <div className="ctitle">
          <h1>Claim request sent!!</h1>
        </div>
        <div className="cbody">
            <h2>Payment ID: 
              <h4>
              {payment.payment_id}
              </h4></h2>
            <h2>Username: 
              <h4>{payment.username}
              </h4></h2>
            <h2>Amount: 
            <h4>{payment.amount}
            </h4></h2>
            <h2>Status: 
            <h4>{payment.status}
            </h4></h2>
            <h2>Date: 
            <h4>{payment.created_at}
            </h4></h2>
        </div>
        <div className="claiminfo">
            <Alert severity="info">Our approver team will approve your request within 24 hrs.</Alert>
        </div>
        <div className="c-footer">
          <button className="c-btn" onClick={goWallet}>Done</button>
        </div>
      </div>
    </div>
                  </div> 
              </div>
          </div>
      </div>
  );
}

export default ClaimSummary;





