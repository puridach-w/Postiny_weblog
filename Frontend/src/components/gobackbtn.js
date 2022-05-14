import React from "react";
import "../css/gobackbtn.css"

export default function GoBackBtn({path}) {
    
    const back = () => {
        if(path){
            window.location = path;
        }else{
            window.history.back();
        }
    }

    return (
        <div className="goback-btn">
            <a onClick={back}>&lt; back</a>
        </div>
    );
}