import React, { useState} from "react";
import "./pePopup.css";



function PromoteArticleModal({ setOpenModal, setBlur ,promote}) {
  
  var date = new Date();

  var day = date.getDate() + 1;
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  var today = year + "-" + month + "-" + day;      

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const assignFromDate = e => {
    setStartDate(e.target.value);
  };

  const assignToDate = e => {
    setEndDate(e.target.value);
  };

  const checkPeriod = () => {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = (Difference_In_Time / (1000 * 3600 * 24)) + 1; // +1 for include startdate

    if(Difference_In_Days > 7){
      alert("Can reserve only 7 days per 1 transaction");
    }else{
      setOpenModal(false);
			setBlur(false);
      promote(startDate,Difference_In_Days);
    }
  }

  return (
    <div className="pmodalBackground">
      <div className="pmodalContainer">
        <div className="ptitleCloseBtn">
          <button
            onClick={() => {
            setOpenModal(false);
			      setBlur(false);
            }}
          >
			    ✕
          </button>
        </div>

        <div className="ptitle">
          <h1>Promote</h1>
        </div>

            <form className="formpromote">
            <div className="input-container startdate">
              <label>Start date</label>
              <input id="startdate" name="startdate" value={startDate} onChange={assignFromDate} min={today} type="date" required/>
            </div>
            <div className="input-container enddate">
              <label>End date</label>
              <input id="enddate" name="enddate" type="date" value={endDate} onChange={assignToDate} min={startDate} required/>
            </div> 
        <div className="p-footer">
          <button type = "button" className="p-btn" onClick={() => {
            checkPeriod();
          }}>Promote</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default PromoteArticleModal;



