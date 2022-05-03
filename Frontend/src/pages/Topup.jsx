import React from "react";
import Pony from "../images/ponyreg.png"
import '../css/pages_css/topup.css';
import { useNavigate } from "react-router-dom";

import SidebarUser from "../components/Layout/SidebarUser";
import Topbar from "../components/Layout/Topbar";

function Topup(){
    var user_id = localStorage.getItem("user_id");

    const [amount,setAmount] = React.useState("");
    const [type,setType] = React.useState(false);
    let navigate = useNavigate(); 

    function handleChanged(event){
        const {value} = event.target;
        setAmount(value)
        setType(true)
    }

    function handleClicked(){
        const routeChange = () =>{ 
        let path = '/transaction-upload'; 
        navigate(path,{state:{value: amount}});
        }
        if(amount >= 100) {
            routeChange();
        } else {
            alert("minimum: THB 100");
        }
    }

    const dummy = {
        username: "Jimmy",
        profile_pic: "https://picsum.photos/400/600"
    };


    return (
        <div>
            <div className="topbar-color">
                <Topbar user_id={user_id}/>
                <div style={{display: "flex"}}>
                    <SidebarUser role="user" />
                    <div>
                    <div style={{marginLeft: "60px"}} className="container-fluid">
        <div className="content row">
            <div className="col-lg-6">
                <img className="ponyImg" alt="" src={Pony} />
            </div>
            <div className="col-lg-6 topup">
                <h1 style={{fontSize: "34px"}}>Top-up</h1> 
                <label className="label">Enter amount (THB)</label> 
                <input className="input" type="number" onChange={handleChanged} value={amount} min="100" autofocus/> <br/>
                <label className="require">*minimum: THB 100 </label> <br/> <br/>
                <label className="label">Receive</label> 
                <p className="showRecieve">{amount} {type && 'COIN'} </p>  
                <button className="paid" onClick={handleClicked}>Pay now</button>
            </div>
        </div>
    </div>
                    </div> 
                </div>
            </div>
        </div>
    
    )
}

export default Topup;