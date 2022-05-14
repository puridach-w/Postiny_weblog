import React from "react";
import "../css/profile.css";
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/EditOutlined';
import { useNavigate } from "react-router-dom";

export default function ProfileSideButton(props) {
    

    let navigate = useNavigate(); 
    
    function routeChange(option) { 
      let path = `/profile`; 

      if (option === "myprofile"){
        path = `/editprofile`; 
    }
    else if (option === "nosubprofile"){
        path = `/subscribe/${props.id}`; 
    }
      navigate(path);

    }


   
    return (
        <div>
            {props.type === "myprofile" && props.role_id === 3 &&
        <Button style={{color: '#1D1D2B', borderColor: "#E3E3E6"}} variant="outlined" startIcon={<EditIcon />}
            onClick={() => routeChange(props.type)}>
            Edit profile
        </Button>
        }
            {props.type === "nosubprofile" &&
        <Button style={{color: '#FFFFFF', backgroundColor: '#1572A1', borderColor: "#1572A1"}} variant="contained"
            onClick={() => routeChange(props.type)}>
            Subscribe
        </Button>
        }
        </div>
        );
}