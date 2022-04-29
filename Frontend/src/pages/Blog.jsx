import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import Gobackbtn from "../components/gobackbtn";
import { Link } from "react-router-dom";
import { blogList, likeArray } from "../dummyData";
import EmptyBlog from '../components/EmptyBlog';
import Comments from "../components/Comment/Comments"

import "../css/pages_css/blog.css";

import SidebarUser from "../components/Layout/SidebarUser";
import Topbar from "../components/Layout/Topbar";

const Blog = () => {
  const {id} = useParams();
  const [blog, setBlog] = useState(null);
  const [like, setLike] = useState(likeArray[0].like);
  const [likeActive, setLikeActive] = useState(false);

  function likeMethod() {
    if(likeActive) {
      setLike(like-1);
      setLikeActive(false);
    } else {
      setLike(like+1);
      setLikeActive(true);
    }
  }

  useEffect(() => {
    let blog = blogList.find(blog => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  });

  const dummy = {
    username: "Jimmy",
    profile_pic: "https://picsum.photos/400/600"
};

  return (
    <div>
            <div className="topbar-color">
                <Topbar name={dummy.username} img={dummy.profile_pic}/>
                <div style={{display: "flex"}}>
                    <SidebarUser role="user" />
                    <div>
                      <div className="blog" style={{marginLeft: "60px"}}>
      <div className="fix-goback">
        <Link to= '/home' >
          <Gobackbtn />
        </Link>
      </div>
      
      <br />
      {blog ? 
      <><div className="blog-wrap">
          <img src={blog.cover} alt="cover img" />
          <h4 className="blog-category">{blog.category}</h4>
          <h1>{blog.title}</h1>
          <p className="blog-author">Written by {blog.authorName}</p>
          <p className="blog-date">Published on {blog.createdAt}</p>
          <p className="blog-desc">{blog.description}</p>
        </div><div className="interect">
            <button
              onClick={likeMethod}
              className={[likeActive ? "active-like" : "inactive-like"].join(' ')}
            >
              ❤︎ {like} Like
            </button>
            <Comments
              commentsUrl="http://localhost:3000/comments"
              currentUserId="1" />
          </div></>
      : 
      <EmptyBlog />
      }
    </div>
                    </div> 
                </div>
            </div>
        </div>
    
  )
}

export default Blog;