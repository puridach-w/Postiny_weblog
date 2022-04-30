import React,  { useState } from "react";
import "./pePopup.css";
import DropPicture from '@material-ui/icons/WallpaperRounded';

function EditArticleModal({ setOpenModal, setBlur }) {
      const [select, setSelect] = useState([]);
      const category = ["Technology", "Gaming", "Music", "Beauty", "Sports", "Art"];
      
      return (
        <div className="emodalBackground">
          <div className="emodalContainer">
            <div className="etitleCloseBtn">
              <button
                onClick={() => {
                  setOpenModal(false);
                  setBlur(false);
                }}
              >
              ✕
              </button>
            </div>
    
            <div className="etitle">
              <h1>Edit article</h1>
            </div>
    
            <div className="ebody">
              <div className="eupload">
                <label className="eimg-frame">
                  <DropPicture className="edrop-picture" style={{ fontSize: "70px" }} />
                  <p>Drop your new image here</p>
                  <input className="einput-file" type="file" name="slip" accept="image/png, image/jpeg"></input>
                </label>
                <span>
                  <div className="edetail">
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
                    <input className="e2title" type="text" placeholder="Once upon a time..." />
                    <p>Description <span style={{color: "red"}}>*</span></p>
                    <textarea  className="edes" placeholder="The start of  a wonderful story..." />
                  </div>
                </span>
              </div>
            </div>
    
            <div className="efooter">
              <button>Save changes</button>
            </div>
          </div>
        </div>
      );
    }
    
    export default EditArticleModal;