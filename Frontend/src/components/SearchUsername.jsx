import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import "../css/searchusername.css"
import Axios from 'axios';

const customStyles = {
  control: base => ({
    ...base,
    height: 45
  })
};

function SearchUsername() {
    const [username,setUserName] = useState("");
    let navigate = useNavigate();


    const getSearchId = () => {
      Axios.get(`http://localhost:8080/getSearchId/${username}`).then((response) => {
      if(response.data.length > 0){
        navigate(`/profile/${response.data[0].user_id}`);
      }else{
        alert("User not found");
      }
    })
      
    }

    function handleChange(event) {
        setUserName(event.target.value);
     }
    
    return (
      <div className="sucontainer">
            <input type="text" className='searchUser' styles={customStyles} placeholder="Search username"
            onChange={handleChange} name="username" value={username}/>
           <button className="searchusernamebtn" onClick={getSearchId}>Search</button>
          
      </div>
    );
  
}
export default SearchUsername;