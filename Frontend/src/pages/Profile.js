import React from "react";
import "../css/profile.css"
import profile from "../images/profilesample.jpg"
import subicon from "../images/sub.jpg"
import articleicon from "../images/article.jpg"
import likeicon from "../images/like.jpg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button , IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
// import BlogList from '../components/BlogList/BlogList';
// import EmptyBlog from "../components/EmptyBlog";
import { blogList } from "../dummyData";
import GoBackBtn from "../components/gobackbtn";

export default function Profile(props) {


  const [blogs, setBlogs] = useState(blogList);

    let navigate = useNavigate(); 

    function routeChange() { 
      let path = `/editprofile`; 
      navigate(path);
    }

    return ( 
        <div className="profile"> 
            <GoBackBtn 
            path="./home"/>
            <div className="profileSummary">
                <div className="profileimg">
                    <img alt="" src={profile}/>
                </div>
                <div className="summary">
                    <div className="sub">
                        <img src={subicon} alt="" />
                        <h3>{props.sub}</h3>
                        <h5>Subscribers</h5>
                    </div>
                    <div className="article">
                        <img src={articleicon} alt="" />
                        <h3>{props.article}</h3>
                        <h5>Articles</h5>
                    </div>
                    <div className="like">
                        <img src={likeicon} alt="" />
                        <h3>{props.like}</h3>
                        <h5>Likes</h5>
                    </div>
                </div>
            </div>
            <div className="profileDetail">
            <h2 className="fullname">{props.fname} {props.lname}</h2>
            <div className="editprofilebtn">
              {/* <button onClick={routeChange} className="btn-modal">
                Edit profile
              </button> */}
              <Button style={{color: '#1D1D2B', borderColor: "#E3E3E6"}} variant="outlined" startIcon={<EditIcon />}
              onClick={routeChange}>
                Edit profile
              </Button>
              </div>
            <h3 className="bio">{props.bio}</h3>
            <h4 className="favcat">{props.category.join("/")}</h4>
            </div>

              <div className="myarticles">
            
            </div>
           
        </div>
        );
    }