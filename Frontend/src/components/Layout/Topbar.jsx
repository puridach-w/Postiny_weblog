import React from 'react'
import "../../css/layout_css/topbar.css";

function Topbar(props) {
    const name = props.name;
    const img = props.img;

    return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className='logo-background'>
                <p className="logo">Postiny</p>
            </div>
            <div className="topbarRight">
                <span className="topbarName">Hello, {name} </span>
                <img className="topbarProfile" src={img} alt="profile" />
            </div>
        </div>
    </div>
    )
}

export default Topbar;
