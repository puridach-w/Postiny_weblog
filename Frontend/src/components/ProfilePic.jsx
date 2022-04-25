import { useState, useEffect } from "react";
import "../css/profilepic.css"

export default function ProfilePic() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  console.log("Images : ", images);
  console.log("imageURLs : ", imageURLs);

  return (
    <div className="profile-Pic">
      <div className="container">
        <div className="headerprofilepic">
          <h5 className="h5profilepic">Upload your profile picture</h5>
        </div>
      {imageURLs.map((imageSrc, idx) => (
        <img alt="" className="editprofileimg" key={idx} width="200" height="260" src={imageSrc} />
      ))}
      <input type="file" multiple accept="image/*" onChange={onImageChange} />
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