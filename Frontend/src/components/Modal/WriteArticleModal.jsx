import React, { useState } from "react";
import "./writeArticleModal.css";
import DropPicture from '@material-ui/icons/WallpaperRounded';

function WriteArticleModal({ setOpenModal, setBlur }) {
  const [select, setSelect] = useState([]);
  const category = ["Technology", "Gaming", "Music", "Beauty", "Sports", "Art"];
  
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
			        setBlur(false);
            }}
          >
			    ✕
          </button>
        </div>

        <div className="title">
          <h1>Write new article</h1>
        </div>

        <div className="body">
          <div className="upload">
            <label className="img-frame">
              <DropPicture className="drop-picture" style={{ fontSize: "70px" }} />
			        <p>Drop your image here</p>
              <input className="input-file" type="file" name="slip" accept="image/png, image/jpeg"></input>
            </label>
            <span>
              <div className="detail">
                <p>Category <span style={{color: "red"}}>*</span>
                <span>
                  <select 
                          value={select}
                          onChange={ e => setSelect(e.target.value)}
                      >
                          {category.map( item => (
                              <option key={item} value={item}>{item}</option>
                          ))}
                  </select>
                </span>
                </p>
                <p>Title <span style={{color: "red"}}>*</span></p>
                <input className="title" type="text" placeholder="Once upon a time..." />
                <p>Description <span style={{color: "red"}}>*</span></p>
                <textarea  className="des" placeholder="The start of  a wonderful story..." />
              </div>
            </span>
          </div>
        </div>

        <div className="footer">
          <button>Post</button>
        </div>
      </div>
    </div>
  );
}

export default WriteArticleModal;