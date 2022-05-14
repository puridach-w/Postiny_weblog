import React, { useState} from "react";
import ponystand from "../images/inhupony.png"
import "../css/changepassword.css"
import GoBackBtn from "../components/gobackbtn";
import Axios from "axios";

export default function Changepw() {
   const [password, setPassword] = useState("");
   const [newpassword, setNewPassword] = useState("");
   const [confirmpassword, setConfirmPassword] = useState("");
   const user_id = localStorage.getItem("user_id");

   const updatePassWord = () => {
      Axios.patch("http://localhost:8080/changePassword",{
            user_id: user_id,
            password: password,
            newpassword: newpassword
         }).then(() => {
            alert("updated password success");
            window.location = `/profile/${user_id}`;
         })
   }

   function handleSubmit() {
        if (confirmpassword !== newpassword) {
            alert('Password do not match');
        } else {
         Axios.get(`http://localhost:8080/checkPassword/${user_id}/${password}`).then((response) => {
            if(response.data.msg === "check success"){
               updatePassWord();
            } else{
               alert(response.data.msg);
            }
         })
         
        }
   }

    return (
       <div>
      <GoBackBtn />
        <div className="changepw">
               <div className="formcpw">
               <form className="changepassword" >
                  <h2>Change Password</h2>
                  
                  <div className="inputctn oldpassword">
                     <label>Current password</label>
                     <input id="oldpassword" name="oldpassword" type="password" placeholder="Enter your current password" required
                     onChange={(event) => {
                        setPassword(event.target.value)
                    }}/>
                  </div>
                  <div className="inputctn newpassword">
                     <label>New password</label>
                     <input id="newpassword" name="newpassword" type="password" placeholder="Enter your new password" required
                     onChange={(event) => {
                        setNewPassword(event.target.value)
                    }}/>
                  </div>
                  <div className="inputctn confirmnewpw">
                     <label>Confirm new password</label>
                     <input id="cfnpassword" name="cfnpassword" type="password" placeholder="Confirm your new password" required
                     onChange={(event) => {
                        setConfirmPassword(event.target.value)
                    }}/>
                  </div>
                  <div className="savechangepw">
                     <button type="button" className="cpwbtn" onClick={handleSubmit}>Update password</button> <br />
                  </div>
               </form>
               </div>
               <div className="img-changepw">
                  <img alt="" src={ponystand} />
               </div>
      </div>
      </div>
        );
}