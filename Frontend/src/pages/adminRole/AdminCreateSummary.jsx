import React from "react";
import "../../components/Modal/pePopup.css";
import { useNavigate } from "react-router-dom";

function AdminCreateSummary(props) {

  const navigate = useNavigate();
  const goMainAdmin = () => navigate('/report-admin');

  return (
    <div className="amodalBackground">
      <div className="amodalContainer">
        <div className="atitle">
          <h1>Account created!</h1>
        </div>
        <div className="abody">
            <h2>First name: 
              <h4>
              {props.firstname}
              </h4></h2>
            <h2>Last name: 
              <h4>{props.lastname}
              </h4></h2>
            <h2>Email: 
            <h4>{props.email}
            </h4></h2>
            <h2>Username: 
            <h4>{props.username}
            </h4></h2>
            <h2>Password: 
            <h4>{props.password}
            </h4></h2>
        </div>
            
        <div className="a-footer">
          <button className="a-btn" onClick={goMainAdmin}>Go to main page</button>
        </div>
      </div>
    </div>
  );
}

export default AdminCreateSummary;



