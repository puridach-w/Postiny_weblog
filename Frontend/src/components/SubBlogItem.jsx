import React, { useState, useEffect } from 'react'
import Axios from "axios";
import { Link } from 'react-router-dom';
import '../components/BlogList/BlogList.css';

function SubBlogItem({blog}) {

    const author_id = blog.author_id;
    const [authorData,setAuthorData] = useState([]);

    useEffect( () => {
    Axios.get(`http://localhost:8080/currentuser/${author_id}`).then((response) => {
        setAuthorData(response.data[0]);
    })
    }, []);


    return(
        <div className='blogItem-wrap'>
            <img className="blogItem-cover" src={"http://localhost:8080" + `/image/${blog.article_pic}`} alt="coverImage" />
            <h5 className="blogItem-category">{blog.category_name}</h5>
            <h3>{blog.title}</h3>
            <p className="blogItem-desc">{blog.content}</p>

            <footer>
                <div className="blogItem-author">
                    <img src={authorData.profile_pic === null ? "/pony-profile.jpg" 
                        : 
                        "http://localhost:8080" + `/image/${authorData.profile_pic}`} alt="author pic" />
                    <div className="blogItem-info">
                        <h6>{authorData.username}</h6>
                        <p>{blog.created_at.substring(0, 10)}</p>
                    </div>
                </div>
                <Link className="blogItem-link" to={`/blog/${blog.article_id}`}>
                    Read more ➜
                </Link>
            </footer>
        </div> 
    )
}

export default SubBlogItem;