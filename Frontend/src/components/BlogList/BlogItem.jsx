import React from 'react'
import { Link } from 'react-router-dom';
import './BlogList.css';
import LockIcon from '@mui/icons-material/Lock';

const BlogItem = ({blog}) => {
    let loginUID = 1;
    let value = false
    let sublaew = false;

    if ((blog.author_id === loginUID) || (blog.subRequired === "0") || (sublaew)){
        value = true;
    }


  return (
      <div>
          {value? <div className='blogItem-wrap'>
        <img className="blogItem-cover" src={blog.cover} alt="coverImage" />
        <h5 className="blogItem-category">{blog.category}</h5>
        <h3>{blog.title}</h3>
        <p className="blogItem-desc">{blog.description}</p>

        <footer>
            <div className="blogItem-author">
                <img src={blog.authorAvatar} alt="author profile" />
                <div className="blogItem-info">
                    <h6>{blog.authorName}</h6>
                    <p>{blog.createdAt}</p>
                </div>
            </div>
            <Link className="blogItem-link" to={`/blog/${blog.id}`}>
                Read more ➜
            </Link>
        </footer>
    </div> :
    <div className="oneBlogItem">
        <div className="bloglockIcon" >
         <LockIcon style={{fontSize: '58px', color: '#000000'}}/>
       </div>
       <div class="bloglockArticle">
    <div className='blogItem-wrap'>
    <img className="blogItem-cover" src={blog.cover} alt="coverImage" />
    <h5 className="blogItem-category">{blog.category}</h5>
    <h3>{blog.title}</h3>
    <p className="blogItem-desc">{blog.description}</p>

    <footer>
        <div className="blogItem-author">
            <img src={blog.authorAvatar} alt="author profile" />
            <div className="blogItem-info">
                <h6>{blog.authorName}</h6>
                <p>{blog.createdAt}</p>
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
