import React from 'react'
import { Link } from 'react-router-dom';
import '../css/myblogitem.css';

const MyBlogItem = ({blog}) => {

  return (
    <div>
     <div className="myBlogItem">
      <div className='myblogItem-wrap'>
        <img className="myblogItem-cover" src={"http://localhost:8080" + `/image/${blog.article_pic}`} alt="myatccoverImage" />
        <h5 className="myblogItem-category">{blog.category_name}</h5>
        <h3>{blog.title}</h3>
        <p className="myblogItem-desc">{blog.content}</p>

        <footer>
          <div className="myblogItem-info">
            <p>{blog.created_at.substring(0,10)}</p>
          </div>
          <Link className="myblogItem-link" to={`/myblog/${blog.article_id}`}>
              Read more ➜
          </Link>
        </footer>
      </div>
      </div>
</div>

  );
  }
export default MyBlogItem;
