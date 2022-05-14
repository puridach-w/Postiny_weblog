import React,  { useState, useEffect } from "react";
import Axios from "axios";
import "./pePopup.css";
import DropPicture from '@material-ui/icons/WallpaperRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import Switch from '@mui/material/Switch';

function EditArticleModal({ setOpenModal, setBlur, blogData }) {
      const [select, setSelect] = useState([]);
      const [category, setCategory] = useState(blogData.category_id);
      const [image, setImage] = useState({});
      const [title, setTitle] = useState(blogData.title);
      const [content, setContent] = useState(blogData.content);
      const [lock, setLock] = useState(blogData.sub_required);
      const [haveimg, setHaveImg] = useState(false);
      const user_id = localStorage.getItem("user_id");

      const onImageChange = (e) => {
        setImage(e.target.files[0]);
        setHaveImg(true);
      }

      useEffect( () => {
        Axios.get('http://localhost:8080/getcategory').then((response) => {
          setSelect(response.data);
        });
      }, []);

      const editArticle = async () => {
        const formData = new FormData();
        formData.append('image',image);
        // alert when write article fail is not success
          try {
              const response = await Axios({
              method: "post",
              url: "http://localhost:8080/upload",
              data: formData,
              headers: { "Content-Type": "multipart/form-data" },
              });
              try{
                Axios.patch('http://localhost:8080/editArticle', {
                  article_id: blogData.article_id,
                  category: category,
                  title: title,
                  content: content,
                  article_pic: response.data.filename,
                  sub_required: lock
                }).catch(()=> {
                  alert("Error!");
                })
              }
              catch(err){
                  console.log("err:",err);
              }
          } catch(error) {
            console.log("err on upload photo",error);
          }
          window.location.reload();
      }

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
                {haveimg?
                <CheckCircleRoundedIcon className="drop-picture" style={{fontSize: "70px", color: "green"}}/>
                :
                <DropPicture className="drop-picture" style={{ fontSize: "70px" }} />
              }
			        { haveimg===false? "Drop your new image here" : <p>*{image.name}*was uploaded</p> }
                  <input 
                    className="einput-file" 
                    type="file" 
                    name="article-cover" 
                    onChange={onImageChange} 
                    accept="image/png, image/jpeg"
                    required
                  >
                  </input>
                </label>
                <span>
                  <div className="edetail">
                    <p>Category <span style={{color: "red"}}>*</span>
                    <span>
                      <select 
                          required
                          value={category}
                          onChange={(event) => {
                            setCategory(event.target.value);
                        }}
                      >
                      {select.map( item => (
                          <option key={item.category_id} value={item.category_id}>{item.category_name}</option>
                      ))}
                      </select>
                    </span>
                    </p>
                    <p>Title <span style={{color: "red"}}>*</span></p>
                    <input 
                      required 
                      value={title}
                      className="e2title" 
                      type="text" 
                      placeholder="Once upon a time..." 
                      onChange={(event) => {
                        setTitle(event.target.value);
                      }}
                    />
                    <p>Description <span style={{color: "red"}}>*</span></p>
                    <textarea 
                      required 
                      value={content} 
                      className="edes" 
                      placeholder="The start of  a wonderful story..." 
                      onChange={(event) => {
                        setContent(event.target.value);
                      }}
                    />
                  </div>
                </span>
              </div>
            </div>
    
            <div className="efooter">
              <label>{lock? "Only subscribers 🔒" : "Public 🔓"}</label>
              <Switch checked={lock} onChange={ () => {lock? setLock(0) : setLock(1)}} />
              <button onClick={() => {
                setOpenModal(false);
                setBlur(false);
                editArticle();
              }}>Save changes</button>
            </div>
          </div>
        </div>
      );
    }
    
    export default EditArticleModal;