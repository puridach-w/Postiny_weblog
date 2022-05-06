import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import Gobackbtn from "../components/gobackbtn";
// import { Link } from "react-router-dom";
import { blogList, likeArray } from "../dummyData";
import EmptyBlog from '../components/EmptyBlog';
import Comments from "../components/Comment/Comments"
import IconButton from '@mui/material/IconButton';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import EditArticleModal from "../components/Modal/EditArticleModal";
import PromoteArticleModal from "../components/Modal/PromoteArticleModal";
import "../css/myblog.css";
import Axios from 'axios';


const MyBlog = () => {
  const {id} = useParams();
  const startTime = new Date();
  const twoMinutes = 60000;
  const [read, setRead] = useState(false);
  const [like, setLike] = useState(likeArray[0].like);
  const [likeActive, setLikeActive] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [promoteModalOpen, setPromoteModalOpen] = useState(false);
	const [blur, setBlur] = useState(false);
  const [blogData,setBlogData] = useState(null);
  const [fullAd,setFullAd] = useState([]);
  const [balance,setBalance] = useState([]);
  const user_id = localStorage.getItem("user_id");
  const COSTPERDAY = 5;
  // const MAXPROMOTEPOST = 6;

  // let blog = blogList.find(blog => blog.id === parseInt(id));

  // let ismyprofile = true;


  useEffect( () => {
    Axios.get(`http://localhost:8080/getArticleData/${id}`).then((response) => {
      setBlogData(response.data[0]);
    })

    Axios.get(`http://localhost:8080/getFullAdDay/${id}`).then((response) => {
      setFullAd(response.data);
    })

    Axios.get(`http://localhost:8080/checkAmount/${user_id}`).then((response) => {
      setBalance(response.data[0]); 
    })

  }, []);


  const addAdvertise = (date) => {
    Axios.post(`http://localhost:8080/addAdvertise`,{
      article_id: id,
      date: date
    })
  }

  const updateBalanceUser = (amount) => {
    Axios.patch("http://localhost:8080/updateBalanceUser",{
        user_id: user_id,
        amount: amount
    }).then((response) => {
        console.log(response.data);
    })
}

  const promote = (startDate,period) => {
    var unreserved = [];
    var allDate = [startDate];

    const startday = new Date(startDate);
    var temp = startday;

    fullAd.map(item => {
      item.publish_date = item.publish_date.substring(0,10)
      const date = new Date(item.publish_date);
      const tmrDate = new Date(date.getTime() + (24 * 60 * 60 * 1000));
      var day = tmrDate.getDate();
      var month = tmrDate.getMonth() + 1;
      const year = tmrDate.getFullYear();
      if (month < 10) month = "0" + month;
      if (day < 10) day = "0" + day;
      unreserved.push(year + "-" + month + "-" + day);
    })

    for(let i = 0;i < period-1;i++){
      var tomorrow = new Date(temp.getTime() + (24 * 60 * 60 * 1000));
      temp = tomorrow;
      var reserveday = tomorrow.getDate();
      var reservemonth = tomorrow.getMonth() + 1;
      const reserveyear = tomorrow.getFullYear();
      if (reservemonth < 10) reservemonth = "0" + reservemonth;
      if (reserveday < 10) reserveday = "0" + reserveday;
      allDate.push(reserveyear + "-" + reservemonth + "-" + reserveday);
    }

    var reserve = allDate.filter(item => !unreserved.includes(item));

    const needCoin = reserve.length * COSTPERDAY;
    if(balance.coin_balance >= needCoin){
      reserve.map(item => {
        addAdvertise(item)
      })
      updateBalanceUser(needCoin);
      alert("Promote success")
    } else{
      alert("Your balance is not enough. To promote need " + needCoin + " coin");
      window.location = "/topup";
    }
  }

  
  function likeMethod() {
    var canLike = checkTime();
    if (canLike) {
    if(likeActive) {
      setLike(like-1);
      setLikeActive(false);
      } else {
        setLike(like+1);
        setLikeActive(true);
      }
    }
    else {
      alert("you must read the article before liking it")
    }
  }

 function addtodb(){
   console.log("add laew mae")
 }

 function checkTime() {
  var timePassed = new Date() - startTime > twoMinutes;
    if (timePassed && !read){
      setRead(true);
      addtodb();
      return true;
    }
    else if (read || ismyprofile){
      return true;
    }
    else {
      return false;
    }
 }

  return (
    <>
    {/* {ismyprofile &&  */}
    <div>
    {editModalOpen && <EditArticleModal setOpenModal={setEditModalOpen} setBlur={setBlur}/>}
    {promoteModalOpen && <PromoteArticleModal setOpenModal={setPromoteModalOpen} setBlur={setBlur} promote={promote}/>}
    <div style={{ filter: blur? "blur(5px)" : "none"}}>
    <Gobackbtn path="/profile"/>
    <div className="articledisplay" style={{marginLeft: "60px"}}>      
      <br />
      {blogData ? 
      <><div className="article-wrap">
          <img src={blogData.article_pic} alt="cover img" />
          <h4 className="article-category">{blogData.category_name}</h4>
          <IconButton style={{color: '#1D1D2B', borderColor: "#E3E3E6", marginLeft: "980px", marginTop: "-70px"}}
          // onClick={routeChange}
          onClick={() => {
						setEditModalOpen(true);
						setBlur(true);
					}}>
            <CreateOutlinedIcon />
          </IconButton>
          <h1>{blogData.title}</h1>
          <p className="article-author">Written by {blogData.username}</p>
          <p className="article-date">Published on {blogData.updated_at}</p>
          <p className="article-desc">{blogData.content}</p>
        </div>
        <div className="articleinterect">
            <button
              onClick={likeMethod}
              className={[likeActive ? "active-like" : "inactive-like"].join(' ')}
            >
              ❤︎ {like} Like
            </button>

            <button className="promotebtn"  onClick={() => {
						setPromoteModalOpen(true);
						setBlur(true);
					  }}>Promote</button>

            <Comments
              commentsUrl="http://localhost:3000/comments"
              currentUserId="1" />
          </div>
          
          </>
      : 
      <EmptyBlog />
      }
    </div>
    </div>
    </div>
    {/* } */}


    {/* {!ismyprofile && <div>
      
    <Gobackbtn path="/profile"/>
    <div className="articledisplay" style={{marginLeft: "60px"}}>      
      <br />
      {blog ? 
      <><div className="article-wrap">
          <img src={blog.cover} alt="cover img" />
          <h4 className="article-category">{blog.category}</h4>
          <h1>{blog.title}</h1>
          <p className="article-author">Written by {blog.authorName}</p>
          <p className="article-date">Published on {blog.createdAt}</p>
          <p className="article-desc">{blog.description}</p>
        </div>
        <div className="articleinterect">
            <button
              onClick={likeMethod}
              className={[likeActive ? "active-like" : "inactive-like"].join(' ')}
            >
              ❤︎ {like} Like
            </button>
            <Comments
              commentsUrl="http://localhost:3000/comments"
              currentUserId="1" />
          </div>
          
          </>
      : 
      <EmptyBlog />
      }
    </div>
    </div>} */}
    </>
  )
}

export default MyBlog;

//  let haveread = false;
//  console.log(haveread)
// let called = React.useRef(false);
// const [showComponent, setShowComponent] = useState(haveread);

//  function addToDB() {
//    console.log("malaew");
//   setShowComponent(true);
//  }
//  setInterval(() => {
//    if (!haveread) {
//     haveread = true;
//     addToDB();
//    }
//    else {
//      return;
//    }
//  }, 3000)

//  console.log(haveread)

// const [showComponent, setShowComponent] = useState(haveread);
  // useEffect(() => {
  //   if (!called.current) {
  //   setInterval(() => {
  //     setShowComponent(true);
  //     addToDB();
  //   }, 6000)
  //   called.current = true;
  // }
  // else if (called.current) {
  //   return;
  // }
  // }, []);