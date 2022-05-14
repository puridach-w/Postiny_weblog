import React, {useState} from "react";
import '../css/pages_css/TransactionUpload.css';
import WallpaperRoundedIcon from '@material-ui/icons/WallpaperRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import {useLocation} from 'react-router-dom';
import Axios from "axios";

import SidebarUser from "../components/Layout/SidebarUser";
import Topbar from "../components/Layout/Topbar";



function TransactionUpload(){
    const location = useLocation();
    const amount = location.state.value;
    const [image, setImage] = useState({});
    const [haveimg,setHaveImg] = useState(false);
    const user_id = localStorage.getItem("user_id");

    const onImageChange = (e) => {
        setImage(e.target.files[0]);
        setHaveImg(true);
    }

    const handleClicked = async (e) => {
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
                Axios.post("http://localhost:8080/uploadTopup",{
                user_id: user_id,
                amount: amount,
                receipt: response.data.filename,
                is_withdrawal: 0
                })
            }
            catch(err){
                console.log("err:",err);
            }
          } catch(error) {
            console.log("err on upload photo",error);
          }
        window.location = "/home";
    }

    return (
        <div>
            <div className="topbar-color">
                <Topbar user_id={user_id}/>
                <div style={{display: "flex"}}>
                    <SidebarUser role="user" />
                    <div>
                      <div style={{marginLeft: "60px"}} className="container-fluid">
        <div className="content row">
            <div className="col-lg-6 total">
                <h1>Total payment: <span className="amount">{amount}฿</span></h1> <br/>
                <h3>🏦 Kasikorn Bank</h3> <br/>
                <p>Account name: Postiny CO.LTD.</p>
                <p>Account number:  <span className="accountNumber">123-4567-890</span></p>
            </div> 
            <div className="col-lg-6 slip">
                <div className="upload">
                    <h1>Please upload your transfer slip</h1>
                    <label className="drop-image">
                    <br/>
                        {haveimg? 
                            <CheckCircleRoundedIcon style={{marginTop: "35px",fontSize: "55px" ,color: "green"}}/>
                        : 
                        <WallpaperRoundedIcon style={{fontSize: "55px"}}/> }

                        { haveimg===false? "Drop your image here" : <p>*{image.name}*was uploaded</p> }
                        <br/>
                        <input className="inputFile" type="file" name="slip" onChange={onImageChange} accept="image/*"></input>
                        
                        
                    </label>
                </div>
                {haveimg && <button className="btn-upload" onClick={handleClicked}>Upload now</button>}
                
            </div> 
        </div>
    </div>
                    </div> 
                </div>
            </div>
        </div>
    
    )
}

export default TransactionUpload;