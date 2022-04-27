import React, { useState } from "react";
// import ponyreg from "../images/ponyreg.png"
// import "../css/changepassword.css"
import ponystand from "../images/inhupony.png"
import "../css/changepassword.css"
import GoBackBtn from "../components/gobackbtn";

export default function Changepw() {

    return (
       <div>
      <GoBackBtn path="./editprofile"/>
        <div className="changepw">
               <div className="formcpw">
               <form className="changepassword" >
                  <h2>Change Password</h2>
                  
                  <div className="inputctn oldpassword">
                     <label>Current password</label>
                     <input id="password" name="password" type="password" placeholder="Enter your current password" required/>
                  </div>
                  <div className="inputctn newpassword">
                     <label>New password</label>
                     <input id="password" name="password" type="password" placeholder="Enter your new password" required/>
                  </div>
                  <div className="inputctn confirmnewpw">
                     <label>Confirm new password</label>
                     <input id="password" name="password" type="password" placeholder="Confirm your new password" required/>
                  </div>
                  <div className="savechangepw">
                     <button type="submit" className="cpwbtn" >Update password</button> <br />
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