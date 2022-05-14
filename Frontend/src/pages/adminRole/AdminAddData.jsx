import React , { useState } from "react";
import DropPicture from '@material-ui/icons/WallpaperRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import "../../components/Modal/pePopup.css";
import "../../components/Modal/writeArticleModal.css";

import Axios from "axios";

function AdminAddData({ setOpenModal, setBlur }) {
  const [reportType, setReportType] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState({});
  const [haveimg, setHaveImg] = useState(false);

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
    setHaveImg(true);
  }
  
  const handleAddCategory = async () => {
    setOpenModal(false);
    setBlur(false);
    const formData = new FormData();
    formData.append('image',image);

    try {
        const response = await Axios({
        method: "post",
        url: "http://localhost:8080/upload",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
        });
        try{
            Axios.post('http://localhost:8080/addCategoryType', {
              category_name: category,
              category_icon: response.data.filename
            }).then(() => {
              alert("Added new category!");
            }).catch(error => {
              alert(error + " - Cannot add category");
          });
        }
        catch(err){
            console.log("err:",err);
        }
      } catch(error) {
        console.log("err on upload photo",error);
      }

  }

  const handleAddReportType = async() => {
      setOpenModal(false);
      setBlur(false);
      const formData = new FormData();
        formData.append('image',image);

        try {
            const response = await Axios({
            method: "post",
            url: "http://localhost:8080/upload",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
            });
            try{
                Axios.post('http://localhost:8080/addReportType', {
                  report_type_name: reportType,
                  report_type_icon: response.data.filename
                }).then(() => {
                  alert("Added new report type!");
                }).catch(error => {
                  alert(error + " - Cannot add report");
              });
            }
            catch(err){
                console.log("err:",err);
            }
          } catch(error) {
            console.log("err on upload photo",error);
          }
      
  }

  return (
    <div className="rmodalBackground">
      <div className="rmodalContainer">
        <div className="rtitleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
			  setBlur(false);
            }}
          >
			    ✕
          </button>
        </div>

        <div className="rtitle">
          <h1>Add data</h1>
        </div>

        <div className="rwrapper">
            <div className="rtabs">
                <div className="rtab">
                    <input type="radio" name="css-tabs" id="tab-1" className="rtab-switch"/>
                    <label for="tab-1" className="rtab-label">Report type</label>
                    <div className="rtab-content">
                    <div className="upload">
                            <label className="img-frame">
                            {haveimg?
                            <CheckCircleRoundedIcon className="drop-picture" style={{fontSize: "70px", color: "green"}}/>
                            :
                            <DropPicture className="drop-picture" style={{ fontSize: "70px" }} />
                            }
                            { haveimg===false? "Drop your report icon here" : <p>*{image.name}*was uploaded</p> }
                            <input className="input-file" type="file" name="rpticon" onChange={onImageChange} accept="image/*"></input>
                            </label>
                        </div>
                        <div className="detailadd">   
                                <p className="rptn">Report type name </p>
                                <input className="addrptname" type="text" placeholder="Enter report type name" 
                                  onChange={ e => setReportType(e.target.value)}/>
                                <button className="r-btn" onClick={handleAddReportType}>Add report type</button>
                            </div>
                    </div>
                </div>

                <div className="rtab">
                    <input type="radio" name="css-tabs" id="tab-2" className="rtab-switch"/>
                    <label for="tab-2" className="rtab-label">Category</label>
                    <div className="rtab-content">
                        <div className="upload">
                            <label className="img-frame">
                              {haveimg?
                                <div>
                                  <CheckCircleRoundedIcon className="drop-picture" style={{fontSize: "70px", color: "green"}}/>
                                </div>
                                :
                                <DropPicture className="drop-picture" style={{ fontSize: "70px" }} />
                              }
                                { haveimg===false? "Drop your category icon here" : <p>*{image.name}*was uploaded</p> }
                                <input className="input-file" type="file" name="caticon" onChange={onImageChange} accept="image/*"></input>
                            </label>
                        </div>
                        <div className="detailadd">
                                <p className="cname">Category name </p>
                                <input className="addcatname" type="text" placeholder="Enter category name" 
                                  onChange={ e => setCategory(e.target.value)}/>
                                <button className="r-btn" onClick={handleAddCategory}>Add category</button>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
}

export default AdminAddData;



