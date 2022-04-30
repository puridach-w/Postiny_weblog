import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import Gobackbtn from "../components/gobackbtn";
// import { Link } from "react-router-dom";
import { blogList, likeArray } from "../dummyData";
import EmptyBlog from '../components/EmptyBlog';
import Comments from "../components/Comment/Comments"
import IconButton from '@mui/material/IconButton';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import EditArticleModal from "../components/Modal/EditArticleModal";
import PromoteArticleModal from "../components/Modal/PromoteArticleModal";
import "../css/myblog.css";


const MyBlog = () => {
  const {id} = useParams();
  const startTime = new Date();
  const twoMinutes = 60000;
  const [read, setRead] = useState(false);
  const [like, setLike] = useState(likeArray[0].like);
  const [likeActive, setLikeActive] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [promoteModalOpen, setPromoteModalOpen] = useState(false);
	const [blur, setBlur] = useState(false);

  let blog = blogList.find(blog => blog.id === parseInt(id));

  let ismyprofile = true;

  
  function likeMethod() {
    var canLike = checkTime();
    if (canLike) {
    if(likeActive) {
      setLike(like-1);
      setLikeActive(false);
      } else {
        setLike(like+1);
        setLikeActive(true);
      }
    }
    else {
      alert("you must read the article before liking it")
    }
  }

 function addtodb(){
   console.log("add laew mae")
 }

 function checkTime() {
  var timePassed = new Date() - startTime > twoMinutes;
    if (timePassed && !read){
      setRead(true);
      addtodb();
      return true;
    }
    else if (read || ismyprofile){
      return true;
    }
    else {
      return false;
    }
 }

  return (
    <>
    {ismyprofile && <div>
    {editModalOpen && <EditArticleModal setOpenModal={setEditModalOpen} setBlur={setBlur}/>}
    {promoteModalOpen && <PromoteArticleModal setOpenModal={setPromoteModalOpen} setBlur={setBlur} />}
    <div style={{ filter: blur? "blur(5px)" : "none"}}>
    <Gobackbtn path="/profile"/>
    <div className="articledisplay" style={{marginLeft: "60px"}}>      
      <br />
      {blog ? 
      <><div className="article-wrap">
          <img src={blog.cover} alt="cover img" />
          <h4 className="article-category">{blog.category}</h4>
          <IconButton style={{color: '#1D1D2B', borderColor: "#E3E3E6", marginLeft: "980px", marginTop: "-70px"}}
          // onClick={routeChange}
          onClick={() => {
						setEditModalOpen(true);
						setBlur(true);
					}}>
            <CreateOutlinedIcon />
          </IconButton>
          <h1>{blog.title}</h1>
          <p className="article-author">Written by {blog.authorName}</p>
          <p className="article-date">Published on {blog.createdAt}</p>
          <p className="article-desc">{blog.description}</p>
        </div>
        <div className="articleinterect">
            <button
              onClick={likeMethod}
              className={[likeActive ? "active-like" : "inactive-like"].join(' ')}
            >
              ❤︎ {like} Like
            </button>
            <button className="promotebtn"  onClick={() => {
						setPromoteModalOpen(true);
						setBlur(true);
					}}>Promote</button>
            <Comments
              commentsUrl="http://localhost:3000/comments"
              currentUserId="1" />
          </div>
          
          </>
      : 
      <EmptyBlog />
      }
    </div>
    </div>
    </div>}

    {!ismyprofile && <div>
      
    <Gobackbtn path="/profile"/>
    <div className="articledisplay" style={{marginLeft: "60px"}}>      
      <br />
      {blog ? 
      <><div className="article-wrap">
          <img src={blog.cover} alt="cover img" />
          <h4 className="article-category">{blog.category}</h4>
          <h1>{blog.title}</h1>
          <p className="article-author">Written by {blog.authorName}</p>
          <p className="article-date">Published on {blog.createdAt}</p>
          <p className="article-desc">{blog.description}</p>
        </div>
        <div className="articleinterect">
            <button
              onClick={likeMethod}
              className={[likeActive ? "active-like" : "inactive-like"].join(' ')}
            >
              ❤︎ {like} Like
            </button>
            <Comments
              commentsUrl="http://localhost:3000/comments"
              currentUserId="1" />
          </div>
          
          </>
      : 
      <EmptyBlog />
      }
    </div>
    </div>}
    </>
  )
}

export default MyBlog;

//  let haveread = false;
//  console.log(haveread)
// let called = React.useRef(false);
// const [showComponent, setShowComponent] = useState(haveread);

//  function addToDB() {
//    console.log("malaew");
//   setShowComponent(true);
//  }
//  setInterval(() => {
//    if (!haveread) {
//     haveread = true;
//     addToDB();
//    }
//    else {
//      return;
//    }
//  }, 3000)

//  console.log(haveread)

// const [showComponent, setShowComponent] = useState(haveread);
  // useEffect(() => {
  //   if (!called.current) {
  //   setInterval(() => {
  //     setShowComponent(true);
  //     addToDB();
  //   }, 6000)
  //   called.current = true;
  // }
  // else if (called.current) {
  //   return;
  // }
  // }, []);