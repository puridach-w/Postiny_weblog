import React from 'react'
import { Link } from 'react-router-dom';
import './BlogList.css';

const BlogItem = ({blog}) => {
  return (
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
            <Link className="blogItem-link" to={`/blog/${blog.id}`}>
                Read more ➜
            </Link>
        </footer>
    </div>
  );
}
export default BlogItem;
