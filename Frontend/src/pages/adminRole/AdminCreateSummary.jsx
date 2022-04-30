import React from "react";
import "../../components/Modal/pePopup.css";
import { useNavigate } from "react-router-dom";
import {userInfo} from "../../dummyData";

function AdminCreateSummary() {

  const navigate = useNavigate();
  const goMainAdmin = () => navigate('/report-admin');

  let user = userInfo.find(user => user.user_id === parseInt("2"));

  return (
    <div className="amodalBackground">
      <div className="amodalContainer">
        <div className="atitle">
          <h1>Account created!!</h1>
        </div>
        <div className="abody">
            <h2>First name: 
              <h4>
              {user.firstname}
              </h4></h2>
            <h2>Last name: 
              <h4>{user.lastname}
              </h4></h2>
            <h2>Email: 
            <h4>{user.email}
            </h4></h2>
            <h2>Username: 
            <h4>{user.username}
            </h4></h2>
            <h2>Password: 
            <h4>{user.password}
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



