import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import Gobackbtn from "../components/gobackbtn";
import { Link } from "react-router-dom";
import { blogList, likeArray } from "../dummyData";
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

  const [category, setCategory] = useState("");
  const [username, setUsername] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

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

  const requestGetBlogList = Axios.get('http://localhost:8080/getbloglist')
  const requestGetCategory = Axios.get('http://localhost:8080/getcategory')
  const requestUserInfo = Axios.get('http://localhost:8080/userinfo')
 
  Axios.all([requestGetBlogList, requestGetCategory, requestUserInfo]).then(Axios.spread((...responses) => {
    const responseOne = responses[0]
    const responseTwo = responses[1]
    const responesThree = responses[2]

    setBlogs(responseOne.data);
    let blog = blogs.find(blog => blog.article_id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }

    responseTwo.data.map( item => {
      if (item.category_id === blog.category_id) {
          setCategory(item.category_name);
      }
    })
    
    responesThree.data.map( item => {
      if (item.user_id === blog.author_id) {
          setUsername(item.username);
          setFName(item.firstname);
          setLName(item.lastname);
      }
    });
  })).catch(errors => {
    console.log(errors);
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
          <h4 className="blog-category">{category}</h4>
          <h1>{blog.title}</h1>
          <p className="blog-author">Written by {fName} {lName}</p>
          <p className="blog-author">Username {username}</p>
          <p className="blog-date">Published on {blog.created_at.substring(0,10)}</p>
          <p className="blog-desc">{blog.content}</p>
        </div>
        <div className="interect">
            <button
              onClick={likeMethod}
              className={[likeActive ? "active-like" : "inactive-like"].join(' ')}
            >
              ❤️ {like} Like
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