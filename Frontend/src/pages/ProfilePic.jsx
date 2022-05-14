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
      <GoBackBtn />
      <div className="container">
        <div className="headerprofilepic">
          <h5 className="h5profilepic">Change your profile picture</h5>
        </div>
      <input type="file" name="profilePic" onChange={onImageChange} accept="image/*"></input>
      <button type="submit" className="eppbtn" onClick={handleSubmit}>Upload profile picture</button> <br />
      </div>
    </div>
  );
}
