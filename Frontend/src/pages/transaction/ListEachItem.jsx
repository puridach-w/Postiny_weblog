import React from "react";
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function listEachItem(props){
    return (
        <div>
            <p>{props.type} &emsp;&emsp;&emsp;&emsp;&emsp; {props.amount}</p> 
            <p><AccessTimeIcon />{props.create}</p>
        </div>
    )
}

export default listEachItem;