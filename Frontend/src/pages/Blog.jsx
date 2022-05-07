import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import Gobackbtn from "../components/gobackbtn";
import { Link } from "react-router-dom";
import { likeArray } from "../dummyData";
import EmptyBlog from '../components/EmptyBlog';
import Comments from "../components/Comment/Comments"
import Axios from "axios";

import "../css/pages_css/blog.css";

const Blog = () => {
  const {id} = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [like, setLike] = useState(likeArray[0].like);
  const [likeActive, setLikeActive] = useState(false);
  const startTime = new Date();
  const twoMinutes = 120000;
  const [read, setRead] = useState(false);

  let ismyprofile = false;

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
      alert("You must read the article before liking it");
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

  useEffect( () => {
    Axios.get('http://localhost:8080/getbloglist').then((response) => {
      setBlogs(response.data);
      let blog = blogs.find(blog => blog.article_id === parseInt(id));
      if (blog) {
        setBlog(blog);
      }
    });
  })


  return (
    <div className="blog" style={{marginLeft: "60px"}}>
      <div className="fix-goback">
        <Link to= '/home' >
          <Gobackbtn />
        </Link>
      </div>
      
      <br />
      {blog ? 
      <><div className="blog-wrap">
          <img src={blog.article_pic} alt="cover img" />
          <h4 className="blog-category">{blog.category_name}</h4>
          <h1>{blog.title}</h1>
          <p className="blog-author">Written by {blog.firstname} {blog.lastname}</p>
          <p className="blog-author">Username {blog.username}</p>
          <p className="blog-date">Published on {blog.created_at.substring(0,10)}</p>
          <p className="blog-desc">{blog.content}</p>
        </div>
        <div className="interect">
            <button
              onClick={likeMethod}
              className={[likeActive ? "active-like" : "inactive-like"].join(' ')}
            >
              ❤️ {blog.totalLike} Like
            </button>
            <Comments
              commentsUrl="http://localhost:3000/comments"
              currentUserId="1" />
          </div></>
      : 
      <EmptyBlog />
      }
    </div>
  )
}

export default Blog;