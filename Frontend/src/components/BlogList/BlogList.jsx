import React from 'react';
import BlogItem from "./BlogItem";
import MyBlogItem from '../MyBlogItem';
import './BlogList.css';

const BlogList = ({blogs}) => {
	const user_id = localStorage.getItem("user_id");

	return (
		<div className="blogList-wrap">
			{blogs.map( blog => (
				user_id == blog.author_id? 
				<MyBlogItem
					blog= {blog}
					key= {blog.article_id}
				/> 
				: 
				<BlogItem
					blog= {blog}
					key= {blog.article_id}								
				/>
			))}
		</div>
	)
}

export default BlogList;
