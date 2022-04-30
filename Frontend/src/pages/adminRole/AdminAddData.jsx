import React , { useState } from "react";
import DropPicture from '@material-ui/icons/WallpaperRounded';
import "../../components/Modal/pePopup.css";
import "../../components/Modal/writeArticleModal.css";
import { optionGroupUnstyledClasses } from "@mui/base";



function AdminAddData({ setOpenModal, setBlur }) {

    function handleAddCategory(){
        setOpenModal(false);
			  setBlur(false);
              alert("added new category!");
    }

    function handleAddReportType(){
        setOpenModal(false);
			  setBlur(false);
              alert("added new report type!");
    }

    const [reportType, setReportType] = useState("");
    const [category, setCategory] = useState("");

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
                            <DropPicture className="drop-picture" style={{ fontSize: "70px" }} />
                                    <p>Drop your report icon here</p>
                            <input className="input-file" type="file" name="rpticon" accept="image/png, image/jpeg"></input>
                            </label>
                        </div>
                        <div className="detailadd">   
                                <p className="rptn">Report type name </p>
                                <input className="addrptname" type="text" placeholder="Enter report type name" onChange={ e => setReportType(e.target.value)}/>
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
                            <DropPicture className="drop-picture" style={{ fontSize: "70px" }} />
                                    <p>Drop your category icon here</p>
                            <input className="input-file" type="file" name="caticon" accept="image/png, image/jpeg"></input>
                            </label>
                        </div>
                        <div className="detailadd">
                                <p className="cname">Category name </p>
                                <input className="addcatname" type="text" placeholder="Enter category name" onChange={ e => setCategory(e.target.value)}/>
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



