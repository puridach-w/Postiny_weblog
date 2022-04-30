import React from 'react';
import MyBlogItem from "./MyBlogItem";
import './BlogList/BlogList.css';

const MyBlogList = ({blogs,type}) => {
	return (
		<div className="blogList-wrap">
			{blogs.map( blog => (
				<MyBlogItem
					blog= {blog}
					key= {blog.id}
					type= {type}
				/>
			))}
		</div>
	)
}

export default MyBlogList;
