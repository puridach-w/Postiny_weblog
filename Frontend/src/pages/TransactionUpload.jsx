import React, {useState,useEffect} from "react";
import '../css/pages_css/TransactionUpload.css';
import WallpaperRoundedIcon from '@material-ui/icons/WallpaperRounded';
import {useLocation} from 'react-router-dom';
import Axios from "axios";

import SidebarUser from "../components/Layout/SidebarUser";
import Topbar from "../components/Layout/Topbar";



function TransactionUpload(){
    const location = useLocation();
    const amount = location.state.value;
    const [images, setImages] = useState([]);
    const [imagesURLs, setImagesURLs] = useState([]);
    const [haveimg,setHaveImg] = useState(false);
    const user_id = localStorage.getItem("user_id");

    useEffect(() => {
        if(images.length < 1) return;
        const newImageURLs = [];
        images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
        setImagesURLs(newImageURLs);
    }, [images])

    const onImageChange = (e) => {
        setImages([...e.target.files]);
        setHaveImg(true);
    }

    const dummy = {
        username: "Jimmy",
        profile_pic: "https://picsum.photos/400/600"
    };

    const handleClicked = (e) => {
        e.preventDefault()
        Axios.post("http://localhost:8080/transaction",{
            user_id: user_id,
            amount: amount,
            receipt: "https://picsum.photos/150"
        })
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
                <h3>Kasikorn Bank</h3> <br/>
                <p>Account name:    Postiny CO.LTD.</p>
                <p>Account number:  <span className="accountNumber">123-4567-890</span></p>
            </div> 
            <div className="col-lg-6 slip">
                <div className="upload">
                    <h1>Please upload your transfer slip</h1>
                    <label className="drop-image">
                    <br/>
                        {haveimg?
                        <img width="150px" height="150px" src={imagesURLs[0]}/> 
                        : <WallpaperRoundedIcon style={{fontSize: "90px"}}/> }
                        { !haveimg && "Drop your image" }
                        <br/>
                        <input className="inputFile" type="file" name="slip" onChange={onImageChange} accept="image/*"></input>
                        
                    </label>
                </div>
                <button className="btn-upload" onClick={handleClicked}>upload now</button>
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