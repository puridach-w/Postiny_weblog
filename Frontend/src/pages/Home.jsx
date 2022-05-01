import React, { useState } from 'react'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';

import CardSlider from '../components/CardSlider';
import SearchBar from '../components/BlogList/SearchBar';
import BlogList from '../components/BlogList/BlogList';
import EmptyBlog from "../components/EmptyBlog";
import WriteArticleModal from "../components/Modal/WriteArticleModal";
import SearchUsername from '../components/SearchUsername';

import '../css/pages_css/home.css';
import { adsArticles, blogList, favCategory } from "../dummyData";

import SidebarUser from "../components/Layout/SidebarUser";
import Topbar from "../components/Layout/Topbar";

const useStyles = makeStyles((theme) => ({
	button: {
	  margin: theme.spacing(0),
	  backgroundColor: "#1572A1",
	  color: "white",
	  content: "10px",
	  textTransform: "capitalize"
	},
}));

function Home() {
	const classes = useStyles();
	const [blogs, setBlogs] = useState(blogList);
	const [searchKey, setSearchKey] = useState(null);
	const [unchecked, setUnchecked] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [blur, setBlur] = useState(false);
	const token = localStorage.getItem('token');

	Axios.post('http://localhost:8080/auth', {
		authorization : "Bearer " + token
		}).then((response) => {
			console.log(response.data);
			if(response.data.status === 'ok'){
				// alert("authen success");
				alert(response.data.decoded.username);
			} else{
				alert("authen failed");
				localStorage.removeItem("token");
				window.location = "/";
			}
		})
	

	// Search submit
	const handleSearchSubmit = (event) => {
		event.preventDefault();
		handleSearchResults()
	}

	// Search for blogs by category
	const handleSearchResults = () => {
		const allBlogs = blogList;
		const filteredBlogs = allBlogs.filter( (blog) => 
			blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
		);

		setBlogs(filteredBlogs);
	}

	const handleFavourite = () => {
		const allBlogs = blogList;
		// const favCat = favCategory[0].category.map
		const filteredFav = allBlogs.filter( (blog) => 
			blog.category.toLowerCase().includes(favCategory[0].category.toLowerCase().trim())
		);

		if (!unchecked) {
			setBlogs(filteredFav);
		} else {
			setBlogs(blogList);
		}
	}

	const dummy = {
		username: "Jimmy",
		profile_pic: "https://picsum.photos/400/600"
	};
	
	return (
		<div>
            <div className="topbar-color">
                <Topbar name={dummy.username} img={dummy.profile_pic}/>
                <div style={{display: "flex"}}>
                    <SidebarUser role="user" />
                    <div>
                <div className="home" style={{paddingLeft: "60px"}}>
			{modalOpen && <WriteArticleModal setOpenModal={setModalOpen} setBlur={setBlur} />}
			<div style={{ filter: blur? "blur(5px)" : "none"}}>
			{/* Search Username/> */}
			<SearchUsername />
				
				{/* Write new article */}
				<Button
					variant="contained"
					size="large"
					style={{fontFamily: "SF Pro Rounded-Semibold", fontSize: "16px"}}
					className={["createButton", classes.button]}
					startIcon={<CreateRoundedIcon />}
					onClick={() => {
						setModalOpen(true);
						setBlur(true);
					}}
				>
				Write new article 
				</Button>

				{/* Advertisement */}
				<div className="ads-box">
					<p className="ads">Ads</p>
				</div>
				<div id="ads-card">
					<CardSlider adsArticles={adsArticles} />
				</div>
				
				{/* Search bar */}
				<SearchBar 
					value= {searchKey} 
					// clearSearch= {handleClearSearch}
					formSubmit= {handleSearchSubmit}
					handleSearchKey= { (event) => setSearchKey(event.target.value) }
				/>

				{/* Checkbox */}	
				<input 
					className="fav-category"
					type="checkbox"
					defaultChecked={unchecked}
					onClick={handleFavourite}
					onChange={() => setUnchecked(!unchecked)}
				>
				</input>
				<span className='fav-category'>Show only your interested category</span>

				{/* Blog list & Empty List */}
				{!blogs.length? <EmptyBlog /> : <BlogList blogs={blogs} />}
			</div>
		</div>
                    </div> 
                </div>
            </div>
        </div>
		
	);
}

export default Home;