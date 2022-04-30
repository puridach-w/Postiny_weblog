import React from 'react'
import { Link } from 'react-router-dom';
import '../css/myblogitem.css';
import LockIcon from '@mui/icons-material/Lock';

const MyBlogItem = ({blog,type}) => {

  let value = false;
  if ((type === "myprofile") || (type === "nosubprofile" && blog.subRequired === "0") || (type === "subprofile")){
      value = true;
  }
  return (
    <div>
     {!value && <div className="myBlogItem">
        <div className="lockIcon" >
         <LockIcon style={{fontSize: '58px', color: '#000000'}}/>
       </div>
     <div class="lockArticle">
       <div className='myblogItem-wrap'>
         <img className="myblogItem-cover" src={blog.cover} alt="myatccoverImage" />
         <h5 className="myblogItem-category">{blog.category}</h5>
        <h3>{blog.title}</h3>
        <p className="myblogItem-desc">{blog.description}</p>

         <footer>
           <div className="myblogItem-info">
             <p>{blog.createdAt}</p>
           </div>
          <Link className="myblogItem-link" to={`/profile`}>
              Read more ➜
          </Link>
        </footer>
      </div>

     </div>
   </div>}

   {value && <div className="myBlogItem">
      <div className='myblogItem-wrap'>
        <img className="myblogItem-cover" src={blog.cover} alt="myatccoverImage" />
        <h5 className="myblogItem-category">{blog.category}</h5>
        <h3>{blog.title}</h3>
        <p className="myblogItem-desc">{blog.description}</p>

        <footer>
          <div className="myblogItem-info">
            <p>{blog.createdAt}</p>
          </div>
          <Link className="myblogItem-link" to={`/myblog/${blog.id}`}>
              Read more ➜
          </Link>
        </footer>
      </div>
      </div> }
</div>

  );
  }
export default MyBlogItem;
