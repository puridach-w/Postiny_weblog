import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import Gobackbtn from "../components/gobackbtn";
import EmptyBlog from '../components/EmptyBlog';
import Comments from "../components/Comment/Comments"
import Axios from "axios";

import "../css/pages_css/blog.css";

const Blog = () => {
  const {id} = useParams();
  const [blog, setBlog] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [likeActive, setLikeActive] = useState(false);
  const startTime = new Date();
  const oneMinute = 60000;
  const [read, setRead] = useState(false);
  const [isLiked, setIsLiked] = useState(0);
  const user_id = localStorage.getItem('user_id');

  let ismyprofile = false;


  function addtodb(){
    console.log("add laew mae")
  }
 
  function checkTime() {
   var timePassed = new Date() - startTime > oneMinute;
     if (timePassed && !read){
       setRead(true);
       addtodb();
       return true;
     }
     else if (read){
       return true;
     }
     else {
       return false;
     }
  }

  function likeMethod() {
    var canLike = checkTime();
    if (canLike) {
      if(likeActive) {
        setLikeActive(false);
        Axios.delete(`http://localhost:8080/unlike`,
        {
          params: {
            user_id: user_id,
            article_id: blog.article_id
            }
        })
      } else { 
        Axios.post(`http://localhost:8080/like`,
        {
          user_id: user_id,
          article_id: blog.article_id
        })
        setLikeActive(true);
      }
    }
    else {
      alert("You must read the article before liking it");
    }
  }

  // useEffect( () => {
    Axios.get('http://localhost:8080/getbloglist').then((response) => {
      setBlogs(response.data);
      const blog = blogs.find(blog => blog.article_id === parseInt(id));
      if (blog) {
        setBlog(blog);
      }
    });
    Axios.get('http://localhost:8080/isLiked',
    {
      params: {
        user_id: user_id,
        article_id: blog.article_id
        }
    }).then((response) => {
      setIsLiked(response.data[0].isLiked);
      if(isLiked === 1) {
        setLikeActive(true);
      } else {
        setLikeActive(false);
      }
    });
  // }, [])


  return (
    <div className="blog" style={{marginLeft: "60px"}}>
      <div className="fix-goback">
      <Gobackbtn/>
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