import React, { useState, useEffect } from 'react'
import Axios from "axios";
import { Link } from 'react-router-dom';
import './BlogList.css';
import LockIcon from '@mui/icons-material/Lock';

const BlogItem = ({ blog }) => {
    let loginUID = 1;
    let value = false;
    let sublaew = false;
    const [category, setCategory] = useState(blog.category_id);
    const [username, setUsername] = useState("");
    const [profile, setProfile] = useState("");

    if ((blog.author_id === loginUID) || (blog.sub_required === 0) || (sublaew)){
        value = true;
    }

    useEffect( () => {
        Axios.get('http://localhost:8080/getcategory').then((response) => {
            response.data.map( item => {
                if (item.category_id === category) {
                    setCategory(item.category_name);
                }
            })
        });
    }, []);

    useEffect( () => {
        Axios.get('http://localhost:8080/userinfo').then((response) => {
            response.data.map( item => {
                if (item.user_id === blog.author_id) {
                    setUsername(item.username);
                    setProfile(item.profile_pic);
                }
            });
        });
    }, []);

    return (
      <div>
        {value? 
        <div className='blogItem-wrap'>
            <img className="blogItem-cover" src={blog.article_pic} alt="coverImage" />
            <h5 className="blogItem-category">{category}</h5>
            <h3>{blog.title}</h3>
            <p className="blogItem-desc">{blog.content}</p>

            <footer>
                <div className="blogItem-author">
                    {/* ยังเอาโปรไฟล์มาไม่ได้ */}
                    <img src={profile} alt="author pic" />
                    <div className="blogItem-info">
                        <h6>{username}</h6>
                        <p>{blog.created_at.substring(0, 10)}</p>
                    </div>
                </div>
                <Link className="blogItem-link" to={`/blog/${blog.article_id}`}>
                    Read more ➜
                </Link>
            </footer>
        </div> 
    :
    <div className="oneBlogItem">
        <div className="bloglockIcon" >
        <LockIcon style={{fontSize: '58px', color: '#000000'}}/>
        </div>
        <div class="bloglockArticle">
        <div className='blogItem-wrap'>
        <img className="blogItem-cover" src={blog.article_pic} alt="coverImage" />
        <h5 className="blogItem-category">{category}</h5>
        <h3>{blog.title}</h3>
        <p className="blogItem-desc">{blog.content}</p>

        <footer>
            <div className="blogItem-author">
                <img src={profile} alt="author pic" />
                <div className="blogItem-info">
                    <h6>{username}</h6>
                    <p>{blog.created_at.substring(0, 10)}</p>
                </div>
            </div>
            <Link className="blogItem-link" to={`/profile/${blog.author_id}`}>
                Read more ➜
            </Link>
        </footer>
</div>
</div>
</div>}
      </div>

  );
}
export default BlogItem;
