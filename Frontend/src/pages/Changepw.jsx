import React, { useState,useEffect } from "react";
// import ponyreg from "../images/ponyreg.png"
// import "../css/changepassword.css"
import ponystand from "../images/inhupony.png"
import "../css/changepassword.css"
import GoBackBtn from "../components/gobackbtn";
import Axios from "axios";
import axios from "axios";

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
         }).then((response) => {
            alert("updated password success");
            window.location = `/profile/${user_id}`;
         })
   }

   function handleSubmit() {
      const confirm = document.querySelector('input[name=cfnpassword]');
        if (confirmpassword !== newpassword) {
            confirm.setCustomValidity('Password do not match');
        } else {
         confirm.setCustomValidity('');
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
      <GoBackBtn path="./editprofile"/>
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

    // return (
    //     <div className="split-screen">
    //     <div className="left">
    //         <section className="copy">
    //             <h2>Enjoy!</h2>
    //             <img alt="" src={ponyreg}/>
    //         </section>
    //     </div>
    //         <div className="right">
    //             <div className="backbtn">
    //                 <a href="/editprofile">&lt; back</a>
    //             </div>
    //             <form action="" className="formreg">
    //             <section className="copy">
    //                         <h2>Change password</h2>
    //                     </section>
    //             <div className="input-container password">
    //                     <label>Old password</label>
    //                     <input id="password" name="password" type="password" placeholder="Enter your password" required
    //                     />
    //                 </div>
    //                 <div className="input-container password">
    //                     <label>New password</label>
    //                     <input id="password" name="password" type="password" placeholder="Enter your password" required
    //                     />
    //                 </div>
    //                 <div className="input-container confirmpw">
    //                     <label>Confirm new password</label>
    //                     <input id="confirmpw" name="confirmpw" type="password" placeholder="Confirm your password" required/>
    //                 </div>

    //             <button className="signupbtn" type="submit"
    //             >Save Changes</button>
    //         </form>
    //     </div>

    // </div>
    // );
}