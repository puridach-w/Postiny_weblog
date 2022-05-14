import React, {useEffect,useState} from "react";
import "../components/Modal/pePopup.css";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Axios from "axios";

import SidebarUser from "../components/Layout/SidebarUser";
import Topbar from "../components/Layout/Topbar";


function ClaimSummary() {
  const user_id = localStorage.getItem("user_id");
  const [paymentData,setPaymentData] = useState([]);

  const navigate = useNavigate();
  const goWallet = () => navigate('/wallet');

    useEffect( () => {
    Axios.get(`http://localhost:8080/getPaymentData/${user_id}`).then((response) => {
        setPaymentData(response.data[0]);
      })
    }, []);


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
              {paymentData.payment_id}
              </h4></h2>
            <h2>Username: 
              <h4>{paymentData.username}
              </h4></h2>
            <h2>Amount: 
            <h4>{paymentData.amount}
            </h4></h2>
            <h2>Status: 
            <h4>{paymentData.status_name}
            </h4></h2>
            <h2>Date: 
            <h4>{paymentData.created_at&& paymentData.created_at.substring(0,10) + " " + paymentData.created_at.substring(12,19)}
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





