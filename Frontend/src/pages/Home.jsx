import React, { useState, useEffect } from 'react'
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
import { adsArticles, favCategory } from "../dummyData";

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
	const [initBlogs, setInitBlogs] = useState([]);
	const [blogs, setBlogs] = useState([]);
	const [category, setCategory] = useState("");
	const [getFavCate, setGetFavCate] = useState([]);
	const [searchKey, setSearchKey] = useState(null);
	const [unchecked, setUnchecked] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [blur, setBlur] = useState(false);
	const token = localStorage.getItem('token');

	Axios.post('http://localhost:8080/auth', {
		authorization : "Bearer " + token
		}).then((response) => {
			if(response.data.status === 'ok'){
				const user_id = response.data.decoded.user_id;
				localStorage.setItem("user_id",user_id);
			} else{
				alert("authen failed");
				localStorage.removeItem("token");
				window.location = "/";
			}
	});

	useEffect( () => {
		Axios.get('http://localhost:8080/getbloglist').then((response) => {
			setBlogs(response.data);
			setInitBlogs(response.data);
		});

		Axios.get('http://localhost:8080/getcategory').then((response) => {
        	setCategory(response.data);
   		});
		  
		Axios.get('http://localhost:8080/getFavCategory').then((response) => {
        	setGetFavCate(response.data);
   		});
	}, []);

	console.log(getFavCate);
	console.log("====" + favCategory[0].category);

	// Search submit
	const handleSearchSubmit = (event) => {
		event.preventDefault();
		handleSearchResults()
	}

	// Search for blogs by category
	const handleSearchResults = () => {
		const allBlogs = initBlogs;
		allBlogs.map( (blog) => {
			category.map((item) => {
				if (blog.category_id === item.category_id) {
					blog.category_name = item.category_name;
				}
			})
		});
		const filteredBlogs = allBlogs.filter( (blog) => {
				return blog.category_name.toLowerCase().includes(searchKey.toLowerCase().trim());
			}
		);
		setBlogs(filteredBlogs);
	}

	const handleFavourite = () => {
		const allBlogs = initBlogs;
		const filteredFav = allBlogs.filter( (blog) => {
				return blog.category.toLowerCase().includes(favCategory[0].category.toLowerCase().trim())
			}
		);
		if (!unchecked) {
			setBlogs(filteredFav);
		} else {
			setBlogs(blogs);
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