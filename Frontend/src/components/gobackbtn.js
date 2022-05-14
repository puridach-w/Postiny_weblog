import React, { useState } from "react";
import "../css/gobackbtn.css"

export default function GoBackBtn() {
    
    const back = () => {
        window.history.back();
        // window.location.reload();
    }

    return (
        <div className="goback-btn">
            <a onClick={back}>&lt; back</a>
        </div>
    );
}