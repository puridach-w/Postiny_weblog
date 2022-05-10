import React, {useState,useEffect} from "react";
import "../css/profile.css"
import profile from "../images/profilesample.jpg"
import subicon from "../images/sub.jpg"
import articleicon from "../images/article.jpg"
import likeicon from "../images/like.jpg"
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button , IconButton} from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import BlogList from '../components/BlogList/BlogList';
// import EmptyBlog from "../components/EmptyBlog";
// import { blogList } from "../dummyData";
import GoBackBtn from "../components/gobackbtn";
// import BlogList from '../components/BlogList/BlogList';
// import EmptyBlog from "../components/EmptyBlog";
import ProfileArticleList from "../components/ProfileArticleList";
import ProfileSideBtn from "../components/ProfileSideButton";
import { useParams } from "react-router";
import Axios from "axios";


export default function Profile(props) {

    const {profile_id} = useParams();
    const user_id = localStorage.getItem("user_id");
    const [subUser,setSubUser] = useState([]);
    const [blogList, setBlogList] = useState([]);
    const [profileData,setProfileData] = useState([]);
    const [interestCategory,setInterestCategory] = useState([]);
    var type = ""

    const requestgetSubscribed = Axios.get(`http://localhost:8080/getSubscribed/${user_id}/${profile_id}`)
    const requestgetAllArticle = Axios.get(`http://localhost:8080/getAllArticle/${profile_id}`);
    const requestgetProfileData = Axios.get(`http://localhost:8080/getProfileData/${profile_id}`);
    const requestgetInterestCategory = Axios.get(`http://localhost:8080/getInterestCategory/${profile_id}`);
    useEffect( () => {
        Axios.all([requestgetSubscribed, requestgetAllArticle,requestgetProfileData,requestgetInterestCategory]).then(Axios.spread((...responses) => {
                const responseOne = responses[0]
                const responseTwo = responses[1]
                const responseThree = responses[2]
                const responseFour = responses[3]
                setSubUser(responseOne.data);
                setBlogList(responseTwo.data);
                setProfileData(responseThree.data[0]);
                setInterestCategory(responseFour.data);
            })).catch(errors => {   
                console.log(errors);
        });
    }, []);
    
    if(profile_id === user_id){
        type = "myprofile";
    } else if(subUser.length > 0){
        type = "subprofile";
    } else {
        type = "nosubprofile";
    }
    return ( 
        <div>
            <div className="profile"> 
            
            <GoBackBtn />
            <div className="profileSummary">
                <div className="profileimg">
                    <img alt="" src={profileData.role_id === 1 ? "/admin.jpg" :
                        profileData.role_id === 2 ? "/approver.jpg" :
                        profileData.profile_pic === null ? 
                        "/pony-profile.jpg" : "http://localhost:8080" + `/image/${profileData.profile_pic}`}/>
                </div>
                <div className="summary">
                    <div className="sub">
                        <img src={subicon} alt="" />
                        <h3>{profileData.totalSub}</h3>
                        <h5>Subscribers</h5>
                    </div>
                    <div className="article">
                        <img src={articleicon} alt="" />
                        <h3>{profileData.totalArticle}</h3>
                        <h5>Articles</h5>
                    </div>
                    <div className="like">
                        <img src={likeicon} alt="" />
                        <h3>{profileData.totalLike}</h3>
                        <h5>Likes</h5>
                    </div>
                </div>
            </div>
            <div className="profileDetail">
            <h2 className="fullname">{profileData.firstname} {profileData.lastname} ({profileData.username})</h2>
            <div className="besideprofilebtn">
                {/* <button onClick={routeChange} className="btn-modal">
                Edit profile
                </button> */}
                {profileData.role_id === 3 && <ProfileSideBtn
                id={profile_id}
                type={type}/>}
                
                </div>
            <h3 className="bio">{profileData.bio}</h3>
            <h4 className="favcat">
                {interestCategory.map((item) => (
                <span>{item.category_name}&ensp;</span>
              ))}
            </h4>
            {/* <div className="myarticles">
                {!blogs.length? <EmptyBlog /> : <BlogList blogs={blogs} />}
            </div> */}
            <ProfileArticleList
            type={type}
            id={profile_id}
            blogList={blogList}
            />
            </div>
            </div>
        </div>
    );
}

