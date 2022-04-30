import React from 'react'
import '../css/pages_css/home.css';
import ChevronLeft from '@material-ui/icons/ChevronLeftRounded';
import ChevronRight from '@material-ui/icons/ChevronRightRounded';
import { useNavigate } from "react-router-dom";

export default function CardSlider(props) {

    let navigate = useNavigate(); 

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
                props.adsArticles.map((article, index) => {
                    return (
                        <div className="slider-card" key={index} onClick={ () => {
                            if (article.subRequired === "0"){
                            article.clickAds()
                            }
                            else {navigate( `/subscribe/${article.id}`)}
                            } }>
                            <div className="slider-card-image" 
                                style={{backgroundImage:`url(${article.image})`}}></div>
                            <p className="slider-card-title">{article.title}</p>
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
