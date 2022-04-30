import React, {useState} from 'react';
import Select from 'react-select';
import { userInfo } from '../dummyData';
import { useNavigate } from "react-router-dom";
import "../css/searchusername.css"

const customStyles = {
  control: base => ({
    ...base,
    height: 45
  })
};

function SearchUsername() {
    const [selectedOption, setSelectedOption] = useState(null);
    var usernames = userInfo.map(user => ({label: user.username, value: user.user_id}))
    let navigate = useNavigate();

    function routeChange() {
        let path = `/profile/${selectedOption.value}`; 
        navigate(path);
      }
    
    return (
      <div className="sucontainer">
          
            <Select  styles={customStyles} placeholder={"Search username"} options={usernames}
             defaultValue={selectedOption} onChange={setSelectedOption}
        />
           <button className="searchusernamebtn" onClick={routeChange}>Search</button>
          
      </div>
    );
  
}
export default SearchUsername;