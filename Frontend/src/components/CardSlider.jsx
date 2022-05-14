import React, {useState,useEffect} from 'react'
import '../css/pages_css/home.css';
import ChevronLeft from '@material-ui/icons/ChevronLeftRounded';
import ChevronRight from '@material-ui/icons/ChevronRightRounded';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function CardSlider() {
    let navigate = useNavigate(); 
    const date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    const year = date.getFullYear();
    const user_id = localStorage.getItem("user_id");
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    const currentDay = year + "-" + month + "-" + day;
    const [adsBlog,setAdsBlog] = useState([]);

    useEffect( () => {
        Axios.get(`http://localhost:8080/getAdsBlog/${currentDay}`).then((response) => {
        setAdsBlog(response.data);
        })
    }, []);

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 510;
    }   

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 510;
    } 


    return (
    <div id="main-slider-container">
        <ChevronLeft className="slider-icon left" onClick={slideLeft} />
        <div id="slider">
            {
                adsBlog.map((article, index) => {
                    return (
                        <div className="slider-card" key={index} onClick={ () => {
                            if(user_id == article.author_id){
                                navigate( `/myblog/${article.article_id}`)
                            } else{
                                if (article.sub_required === 0){
                                    navigate( `/blog/${article.article_id}`)
                                }
                                else {
                                    navigate( `/profile/${article.author_id}`)
                                }
                            }
                            
                            } }>
                            <div className="slider-card-image" 
                                style={{backgroundImage:`url(${"http://localhost:8080" + `/image/${article.article_pic}`})`}}></div>
                            <p className="slider-card-title">{article.title.substring(0, 15)}...</p>
                            <p className="slider-card-content">{article.content.substring(0, 49)} ...</p>
                        </div>
                    )
                })
            }
        </div>
        <ChevronRight className="slider-icon right" onClick={slideRight} />
    </div>
    )
}
