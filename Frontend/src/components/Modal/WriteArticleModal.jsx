import React, { useEffect, useState } from "react";
import "./writeArticleModal.css";
import DropPicture from '@material-ui/icons/WallpaperRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import Switch from '@mui/material/Switch';
import Axios from 'axios';

function WriteArticleModal({ setOpenModal, setBlur}) {
  const [select, setSelect] = useState([]);
  const [image, setImage] = useState({});
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();
  const [lock, setLock] = useState(0);
  const [haveimg, setHaveImg] = useState(false);
  const user_id = localStorage.getItem("user_id");

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
    setHaveImg(true);
  }

  //get category list
  useEffect( () => {
    Axios.get('http://localhost:8080/getcategory').then((response) => {
      setSelect(response.data);
    });
  }, []);

  const addArticle = async () => {
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
              Axios.post('http://localhost:8080/writearticle', {
                user_id: user_id,
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
              {haveimg?
                <CheckCircleRoundedIcon className="drop-picture" style={{fontSize: "70px", color: "green"}}/>
                :
                <DropPicture className="drop-picture" style={{ fontSize: "70px" }} />
              }
			        { haveimg===false? "Drop your image here" : <p>*{image.name}*was uploaded</p> }
              <input 
                className="input-file" 
                type="file" 
                name="article-cover" 
                onChange={onImageChange} 
                accept="image/*" 
                required
              >
              </input>
            </label>
            <span>
              <div className="detail">
                <p>Category <span style={{color: "red"}}>*</span>
                <span>
                  <select 
                      required
                      value={category}
                      onChange={(event) => {
                        setCategory(event.target.value);
                    }}
                  >
                  <option value="" disabled selected hidden>Unselect</option>
                  {select.map( item => (
                      <option key={item.category_id} value={item.category_id}>{item.category_name}</option>
                  ))}
                  </select>
                </span>
                </p>
                <p>Title <span style={{color: "red"}}>*</span></p>
                <input 
                  required
                  className="title" 
                  type="text" 
                  placeholder="Once upon a time..." 
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
                <p>Description <span style={{color: "red"}}>*</span></p>
                <textarea  
                  required
                  className="des" 
                  placeholder="The start of  a wonderful story..." 
                  onChange={(event) => {
                    setContent(event.target.value);
                  }}
                />
              </div>
            </span>
          </div>
        </div>

        <div className="footer">
          <label>{lock? "Only subscribers 🔒" : "Public 🔓"}</label>
          <Switch checked={lock} onChange={ () => {lock? setLock(0) : setLock(1)}} />
          <button onClick={() => {
              setOpenModal(false);
              setBlur(false);
			        addArticle();
          }}>Post</button>
        </div>
      </div>
    </div>
  );
}

export default WriteArticleModal;