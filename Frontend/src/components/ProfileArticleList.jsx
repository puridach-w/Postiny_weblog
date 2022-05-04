import React, { useState , useEffect} from "react";
import "../css/profile.css";
import MyBlogList from '../components/MyBlogList';
import EmptyBlog from "../components/EmptyBlog";
// import { blogList } from "../dummyData";
import Axios from "axios";

export default function ProfileArticleList(props) {

    const type = props.type;
    const user_id = props.id;
    const blogList = props.blogList;

    return (
        <div>
            {/* {props.type === "myprofile" &&} */}
            <div>
              {!blogList.length? <EmptyBlog /> : <MyBlogList blogs={blogList} type={props.type} author_id={user_id}/>}
              </div>
        </div>
        );
}