import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../css/myblogitem.css';
import LockIcon from '@mui/icons-material/Lock';
import Axios from "axios";

const lockBlog = ({blog, author_id}) => {

    const [authorData, setAuthorData] = useState([]);

    useEffect( () => {
    Axios.get(`http://localhost:8080/currentuser/${author_id}`).then((response) => {
        setAuthorData(response.data[0]);
    })
    }, []);

    const needSub = () => {
        alert("You need to subscribe before red this blog");
    }

    return(
        <div className="myBlogItem">
        <div className="lockIcon" >
         <LockIcon style={{fontSize: '58px', color: '#000000'}}/>
       </div>
     <div class="lockArticle">
       <div className='myblogItem-wrap'>
         <img className="myblogItem-cover" src={"http://localhost:8080" + `/image/${blog.article_pic}`} alt="myatccoverImage" />
         <h5 className="myblogItem-category">{blog.category_name}</h5>
        <h3>{blog.title}</h3>
        <p className="myblogItem-desc">{blog.content}</p>

         <footer>
         <div className="blogItem-author">
              <img src={authorData.profile_pic === null ? "/pony-profile.jpg" 
                  : 
                  "http://localhost:8080" + `/image/${authorData.profile_pic}`} alt="author pic" />
              <div className="myblogItem-info">
                  <h6>{authorData.username}</h6>
                  <p>{blog.created_at.substring(0,10)}</p>
              </div>
          </div>
          <Link onClick={needSub} className="myblogItem-link" to={`/profile/${author_id}`}>
              Read more ➜
          </Link>
        </footer>
      </div>
     </div>
   </div>
    )
}

export default lockBlog;