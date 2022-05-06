import { React, useState} from "react";
import ponyIn from "../images/ponyin.png"
import "../css/signin.css"
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin() {
   var navigate = useNavigate();


   const [signinData, setSigninData] = useState(
      {username: "", password: ""}
   )

   function handleChange(event) {
      setSigninData(prevSigninData => {
         return {
            ...prevSigninData,
            [event.target.name]: event.target.value
         }
      })
   }

   function HandleSubmit(event) {
      const init = async() => {
         Axios.post("http://localhost:8080/signin",{
            username: signinData.username,
            password: signinData.password
         }).then(function (response) {
            if(response.data.msg === "User not found" || response.data.msg === "Wrong password"){
               alert(response.data.msg);
            }else{
               localStorage.setItem('token', response.data.token)
               localStorage.setItem('user_id', response.data.user_id)
               const temp = response.data.temp;
               if(temp === "Success login USER"){
                  navigate("/home");
               } else if(temp=== "Success login APPROVER"){
                  navigate("/payment");
               } else if(temp === "Success login ADMIN"){
                  navigate("/report-admin");
               }
            }
         })
         }
      init();
   }

    return (
      <div className="signInpage">
         <header>
            <div className="logo">
               Postiny
            </div>
            <div className="nav-items">
               <li><a href="/signin" >Sign in</a></li>
               <li><a href="/register" >Register</a></li>
            </div>
         </header>
         <body>
               <div className="form">
               <form className="login" action="">
                  <h2>Welcome :) </h2>
                  <input type="text" placeholder="Username" required 
                  onChange={handleChange} name="username" value={signinData.username}/><br />
                  <input type="password" placeholder="Password" required
                  onChange={handleChange} name="password" value={signinData.password}/><br />
                  <button type = "button" className="btn" onClick={HandleSubmit}>Sign in</button> <br />
               </form>
               </div>
               <div className="f-container">
                  <h2>Join us to explore <br />inspiring articles
                  <div className="sub-link">
                     <h4>If you don't have an account<br />you can <a href="/register" >Register here!</a></h4>
                  </div>
                  </h2>
               </div>
               <div className="img-container">
                  <img alt="" src={ponyIn} />
               </div>
         </body>
      </div>
    );
}