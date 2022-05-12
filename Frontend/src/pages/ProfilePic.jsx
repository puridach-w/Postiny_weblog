import React from "react";
import { useState, useEffect } from "react";
import GoBackBtn from "../components/gobackbtn";
import "../css/profilepic.css"
import Axios from "axios";

export default function ProfilePic() {
  const [image, setImage] = useState({});
  const user_id = localStorage.getItem("user_id");

  function onImageChange(e) {
    setImage(e.target.files[0]);
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image',image);
        try {
            const response = await Axios({
            method: "post",
            url: "http://localhost:8080/upload",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response.data.filename);
            try{
                Axios.patch("http://localhost:8080/uploadProfileImage",{
                user_id: user_id,
                image: response.data.filename
                })
            }
            catch(err){
                console.log("err:",err);
            }
          } catch(error) {
            console.log("err on upload photo",error);
          }
    alert("Image added");
    window.location = `/profile/${user_id}`
 }

  return (
    <div className="profile-Pic">
      <GoBackBtn path="./profile"/>
      <div className="container">
        <div className="headerprofilepic">
          <h5 className="h5profilepic">Change your profile picture</h5>
        </div>
      {/* {imageURLs.map((imageSrc, idx) => (
        <img alt="" className="editprofileimg" key={idx} width="320" height="320" src={imageSrc} />
      ))} */}
      <input type="file" name="profilePic" onChange={onImageChange} accept="image/*"></input>
      <button type="submit" className="eppbtn" onClick={handleSubmit}>Upload profile picture</button> <br />
      </div>
    </div>
  );
}





// import React, { Component } from 'react';
// import "../css/profilepic.css"

// export class ProfilePic extends Component {
//   state={
//     profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
//   }
//   imageHandler = (e) => {
//     const reader = new FileReader();
//     reader.onload = () =>{
//       if(reader.readyState === 2){
//         this.setState({profileImg: reader.result})
//       }
//     }
//     reader.readAsDataURL(e.target.files[0])
//   };
// 	render() {
//     const {profileImg} = this.state
// 		return (
//             <div className="profile-Pic">
// 			<div className="page">
// 				<div className="container">
//                    <div className="headerContainer">
//                     <h2>Choose your profile picture</h2>
//                     </div>
// 					<div className="img-holder">
// 						<img src={profileImg} alt="" id="img" className="img" />
// 					</div>
// 					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
// 				</div>
// 			</div>
//             </div>
// 		);
// 	}
// }

// export default ProfilePic;