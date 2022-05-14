import React, { useState, useEffect } from 'react'
import Axios from "axios";
import { Link } from 'react-router-dom';
import './BlogList.css';
import LockIcon from '@mui/icons-material/Lock';

const BlogItem = ({ blog }) => {
    const user_id = localStorage.getItem('user_id');
    let unlock = false;
    const [subscribed, setSubscribed] = useState(0);
    
    useEffect( () => {
        Axios.get(`http://localhost:8080/getSubscribed/${user_id}/${blog.author_id}`).then(response => {
            setSubscribed(response.data);
        }) 
    }, []);

    if ((blog.author_id === user_id) || (blog.sub_required === 0) || (subscribed.length > 0)) {
        unlock = true;
    }

    return (
      <div>
        {unlock? 
        <div className='blogItem-wrap'>
            <img className="blogItem-cover" src={"http://localhost:8080" + `/image/${blog.article_pic}`} alt="coverImage" />
            <h5 className="blogItem-category">{blog.category_name}</h5>
            <h3>{blog.title}</h3>
            <p className="blogItem-desc">{blog.content}</p>

            <footer>
                <div className="blogItem-author">
                    <img src={blog.profile_pic === null ? "/pony-profile.jpg" 
                        : 
                        "http://localhost:8080" + `/image/${blog.profile_pic}`} alt="author pic" />
                    <div className="blogItem-info">
                        <h6>{blog.username}</h6>
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
        <img className="blogItem-cover" src={"http://localhost:8080" + `/image/${blog.article_pic}`} alt="coverImage" />
        <h5 className="blogItem-category">{blog.category_name}</h5>
        <h3>{blog.title}</h3>
        <p className="blogItem-desc">{blog.content}</p>

        <footer>
            <div className="blogItem-author">
                <img src={blog.profile_pic === null ? "/pony-profile.jpg" 
                    : 
                    "http://localhost:8080" + `/image/${blog.profile_pic}`} alt="author pic" />
                <div className="blogItem-info">
                    <h6>{blog.username}</h6>
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
