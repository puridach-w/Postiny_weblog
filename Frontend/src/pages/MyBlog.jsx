import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import Gobackbtn from "../components/gobackbtn";
import { likeArray } from "../dummyData";
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
  const oneMinute = 60000;
  const [read, setRead] = useState(true); // MyBlog for only owner the blog => (read = true)
  const [likeActive, setLikeActive] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [promoteModalOpen, setPromoteModalOpen] = useState(false);
	const [blur, setBlur] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [blogData,setBlogData] = useState("");
  const [fullAd,setFullAd] = useState([]);
  const [balance,setBalance] = useState([]);
  const [isLiked, setIsLiked] = useState(0);
  const user_id = localStorage.getItem("user_id");
  const COSTPERDAY = 5;

  const requestGetBlogList = Axios.get('http://localhost:8080/getbloglist');
  const requestGetFullAdDay = Axios.get(`http://localhost:8080/getFullAdDay/${id}`);
  const requestCheckAmount = Axios.get(`http://localhost:8080/checkAmount/${user_id}`);
  const requestIsLiked = Axios.get('http://localhost:8080/isLiked',
  {
    params: {
      user_id: user_id,
      article_id: blogData.article_id
      }
  });

  Axios.all([requestGetBlogList, requestGetFullAdDay, requestCheckAmount, requestIsLiked]).then(Axios.spread((...responses) => {
    const responseOne = responses[0]
    const responseTwo = responses[1]
    const responseThree = responses[2]
    const responseFour = responses[3]

    setBlogs(responseOne.data);
    let blogData = blogs.find(blogData => blogData.article_id === parseInt(id));
    if (blogData) {
      setBlogData(blogData);
    }

    setFullAd(responseTwo.data);

    setBalance(responseThree.data[0]); 

    setIsLiked(responseFour.data[0].isLiked);
    if(isLiked === 1) {
      setLikeActive(true);
    } else {
      setLikeActive(false);
    }
    
  })).catch(errors => {
    console.log(errors);
  });

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
        setLikeActive(false);
        Axios.delete(`http://localhost:8080/unlike`,
        {
          params: {
            user_id: user_id,
            article_id: blogData.article_id
            }
        })
      } else { 
        Axios.post(`http://localhost:8080/like`,
        {
          user_id: user_id,
          article_id: blogData.article_id
        })
        setLikeActive(true);
      }
    }
    else {
      alert("You must read the article before liking it");
    }
  }

 function addtodb(){
   console.log("add laew mae")
 }

 function checkTime() {
  var timePassed = new Date() - startTime > oneMinute;
    if (timePassed && !read){
      setRead(true);
      addtodb();
      return true;
    }
    else if (read){
      return true;
    }
    else {
      return false;
    }
 }

  return (
    <>
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
          onClick={() => {
						setEditModalOpen(true);
						setBlur(true);
					}}>
            <CreateOutlinedIcon />
          </IconButton>
          <h1>{blogData.title}</h1>
          <p className="article-author">Written by {blogData.username}</p>
          <p className="article-date">Published on {blogData.updated_at.substring(0,10)}</p>
          <p className="article-desc">{blogData.content}</p>
        </div>
        <div className="articleinterect">
            <button
              onClick={likeMethod}
              className={[likeActive ? "active-like" : "inactive-like"].join(' ')}
            >
              ❤︎ {blogData.totalLike} Like
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