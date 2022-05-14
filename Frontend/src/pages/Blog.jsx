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
  const [viewing,setViewing] = useState([]);
  const [change,setChange] = useState(false);
  const user_id = localStorage.getItem('user_id');


  function addtodb(){
    Axios.post("http://localhost:8080/addviewing",{
      article_id: id,
      user_id: user_id
    })
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
        location.reload();
      } else { 
        Axios.post(`http://localhost:8080/like`,
        {
          user_id: user_id,
          article_id: blog.article_id
        })
        setLikeActive(true);
        location.reload();
      }
    }
    else {
      alert("You must read the article before liking it");
    }
  }

  const getLike = (article_id) => {
      Axios.get('http://localhost:8080/isLiked',
      {
        params: {
          user_id: user_id,
          article_id: article_id
          }
      }).then((response) => {
          if(response.data[0].isLiked === 1) {
            setLikeActive(true);
          } else {
            setLikeActive(false);
          }
      })
  }

  
  const requestGetBlogList = Axios.get('http://localhost:8080/getbloglist');
  const requestGetViewing = Axios.get(`http://localhost:8080/getViewing/${id}/${user_id}`);


  useEffect( () => {
    Axios.all([requestGetBlogList,requestGetViewing]).then(Axios.spread((...responses) => {
      const responseOne = responses[0]
      const responseTwo = responses[1]

      setBlogs(responseOne.data);
      const blog = blogs.find(blog => blog.article_id === parseInt(id));
      if (blog) {
        setBlog(blog);
        getLike(blog.article_id);
      }

      setViewing(responseTwo.data);
      if(viewing.length > 0){
        setRead(true);
      }

      if(blogs && viewing){
        setChange(true);
      }

      })).catch(errors => {
        console.log(errors);
    });
  }, [change])



  return (
    <div className="blog" style={{marginLeft: "60px"}}>
      <div className="fix-goback">
      <Gobackbtn/>
      </div>
      
      <br />
      {blog ? 
      <><div className="blog-wrap">
          <img src={"http://localhost:8080" + `/image/${blog.article_pic}`} alt="cover img" />
          <h4 className="blog-category">{blog.category_name}</h4>
          <h1>{blog.title}</h1>
          <p className="blog-author">Article ID = {blog.article_id}</p>
          <p className="blog-author">Written by {blog.firstname} {blog.lastname} ({blog.username})</p>
          <p className="blog-date">Published on {blog.created_at.substring(0,10)}</p>
          <p className="blog-desc">{blog.content}</p>
        </div>
        <div className="interect">
            <button
              onClick={likeMethod}
              className={[likeActive ? "active-like" : "inactive-like"].join(' ')}
            >
              ❤︎ {blog.totalLike} Like
            </button>
            <Comments
              read={read}
              setRead={setRead}
              article_id= {id}
              addtodb= {addtodb} 
              user_id = {user_id}
              />
          </div></>
      : 
      <EmptyBlog />
      }
    </div>
  )
}

export default Blog;