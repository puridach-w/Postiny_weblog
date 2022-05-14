import React from "react";
import "../css/profile.css";
import MyBlogList from '../components/MyBlogList';
import EmptyBlog from "../components/EmptyBlog";

export default function ProfileArticleList(props) {
    
    const user_id = props.id;
    const blogList = props.blogList;

    return (
        <div>
            <div>
              {!blogList.length? <EmptyBlog /> : <MyBlogList blogs={blogList} type={props.type} author_id={user_id}/>}
              </div>
        </div>
        );
}