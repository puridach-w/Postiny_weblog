import React from 'react';
import MyBlogItem from "./MyBlogItem";
import LockBlogItem from "./lockBlogItem";
import SubBlogItem from "./SubBlogItem"
import './BlogList/BlogList.css';

const MyBlogList = ({blogs,type,author_id}) => {

	const myBlogItem = (blog) => {
		return (
			<MyBlogItem
					blog= {blog}
					key= {blog.article_id}
				/>
		)
	}

	const otherBlogList = (blog,type,author_id) => {
		return (
			type === "subprofile"? 
			<SubBlogItem
				blog= {blog}
				key= {blog.id}
			/> :
			blog.sub_required === 0 ?
			<SubBlogItem
				blog= {blog}
				key= {blog.id}
			/>
			: <LockBlogItem
				blog= {blog}
				key= {blog.id}
				author_id = {author_id}
			/>

		)
	}

	return (
		<div className="blogList-wrap">
			{blogs.map( blog => (
				type === "myprofile" ? myBlogItem(blog) : otherBlogList(blog,type,author_id) 
			))}
		</div>
	)
}

export default MyBlogList;
