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
	const [getFavCate, setGetFavCate] = useState([]);
	const [searchKey, setSearchKey] = useState(null);
	const [unchecked, setUnchecked] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [blur, setBlur] = useState(false);
	const user_id = localStorage.getItem('user_id');
	const token = localStorage.getItem('token');

	useEffect( () => {
		Axios.post('http://localhost:8080/auth', {
		authorization : "Bearer " + token
		}).then((response) => {
			if(response.data.status === 'ok'){
				if(response.data.decoded.role_id != 3){
					alert("This page for only user role.");
					if(response.data.decoded.role_id === 2){
						window.location = "/payment";
					} else if(response.data.decoded.role_id === 1){
						window.location = "/report-admin";
					}
				}
			} else{
				alert("authen failed");
				localStorage.removeItem("token");
				window.location = "/";
			}
		});
	})

	const requestGetBlogList = Axios.get('http://localhost:8080/getbloglist');
	const requestGetFavCategory = Axios.get('http://localhost:8080/getfavcategory',
	{
		params: {
			user_id: user_id
	  	}
	});
	useEffect( () => {
		Axios.all([requestGetBlogList, requestGetFavCategory]).then(Axios.spread((...responses) => {
				const responseOne = responses[0]
				const responseTwo = responses[1]
				
				setBlogs(responseOne.data);
				setInitBlogs(responseOne.data);
				setGetFavCate(responseTwo.data);
			})).catch(errors => {
				console.log(errors);
		});
	}, []);

	// Search submit
	const handleSearchSubmit = (event) => {
		event.preventDefault();
		handleSearchResults()
	}

	// Search for blogs by category
	const handleSearchResults = () => {
		const allBlogs = initBlogs;
		const filteredBlogs = allBlogs.filter( (blog) => {
				return blog.category_name.toLowerCase().includes(searchKey.toLowerCase().trim());
			}
		);
		setBlogs(filteredBlogs);
	}

	const handleFavourite = () => {
		const allBlogs = initBlogs;
		const filteredFav = [];
		allBlogs.map( blog => {
			getFavCate.map( fav => {
				if(fav.category_id === blog.category_id) {
					filteredFav.push(blog);
				}
			})
		});

		if (!unchecked) {
			setBlogs(filteredFav);
		} else {
			setBlogs(initBlogs);
		}
	}
	
	return (
		<div>
            <div className="topbar-color">
                <Topbar user_id={user_id}/>
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
									<CardSlider />
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