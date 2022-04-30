import React from "react";
import "../css/profile.css";
import MyBlogList from '../components/MyBlogList';
import EmptyBlog from "../components/EmptyBlog";
import { blogList } from "../dummyData";
// import { useState } from "react";

export default function ProfileArticleList(props) {

    // const [blogs, setBlogs] = useState(blogList);

    return (
        <div>
            {/* {props.type === "myprofile" &&} */}
            <div>
              {!blogList.length? <EmptyBlog /> : <MyBlogList blogs={blogList} type={props.type} />}
              </div>
        </div>
        );
}