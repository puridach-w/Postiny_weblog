import React from 'react';
import "../../css/layout_css/sidebar.css";
import * as SidebarData from "./SidebarData";

function SidebarUser(props) {
    let data1 = [];
    let data2 = [];
    const role = props.role;

    if(role === "user"){
        data1 = SidebarData.SidebarData;
        data2 = SidebarData.SidebarData2;
    } else if(role === "admin"){
        data1 = SidebarData.SidebarData3;
        data2 = SidebarData.SidebarData5;
    } else{
        data1 = SidebarData.SidebarData4;
        data2 = SidebarData.SidebarData5;
    }

  return (
    <div className='sidebar'>
        <ul className="sidebar-list">
            {data1.map((item, index) => {
                return (
                    <li 
                        key={index} 
                        className="row" 
                        id={window.location.pathname === item.link? "active" : ""}
                        onClick={() => {
                            window.location.pathname = item.link;
                        }}> 
                        <div id="icon">{item.icon}</div>
                        <div id="title">{item.title}</div>
                    </li>
                );
            })}
            <br />
            {data2.map((item, key) => {
                return (
                    <li 
                        key={key} 
                        className="row" 
                        id={window.location.pathname === item.link? "active" : ""}
                        onClick={() => {
                            window.location.pathname = item.link;
                        }}> 
                        <div id="icon">{item.icon}</div>
                        <div id="title">{item.title}</div>
                    </li>
                );
            })}
        </ul>
    </div>
  )
}

export default SidebarUser;