import React from "react";
import "../css/gobackbtn.css"

export default function GoBackBtn() {
    
    const back = () => {
        window.history.back();
    }

    return (
        <div className="goback-btn">
            <a onClick={back}>&lt; back</a>
        </div>
    );
}