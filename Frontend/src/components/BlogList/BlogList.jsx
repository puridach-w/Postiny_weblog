import React from 'react';
import BlogItem from "./BlogItem";
import './BlogList.css';

const BlogList = ({blogs}) => {
	return (
		<div className="blogList-wrap">
			{blogs.map( blog => (
				<BlogItem
					blog= {blog}
					key= {blog.article_id}								
				/>
			))}
		</div>
	)
}

export default BlogList;
