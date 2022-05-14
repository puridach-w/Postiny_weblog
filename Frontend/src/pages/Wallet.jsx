import React, {useState,useEffect} from 'react';
import '../css/pages_css/wallet.css';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import { useNavigate } from "react-router-dom";
import pony from "../images/ponyreg.png"

import SidebarUser from "../components/Layout/SidebarUser";
import Topbar from "../components/Layout/Topbar";
import Axios from 'axios';


function Wallet() {
	var user_id = localStorage.getItem("user_id");
	const [userData,setUserData] = useState([]);
	const token = localStorage.getItem('token');
	

	useEffect( () => {
		Axios.post('http://localhost:8080/auth', {
		authorization : "Bearer " + token
		}).then((response) => {
			if(response.data.status === 'ok'){
				if(response.data.decoded.role_id != 3){
					alert("This page for only user role.");
					if(response.data.decoded.role_id === 2){
						window.location = "/payment";
					} else if(response.data.decoded.role_id === 1){
						window.location = "/report-admin";
					}
				}
			} else{
				alert("authen failed");
				localStorage.removeItem("token");
				window.location = "/";
			}
		});
	})

	let navigate = useNavigate(); 

  	const routeChange = (name) =>{ 
    let path = '/' + name; 
    navigate(path);
  	}

	useEffect( () => {
		Axios.get(`http://localhost:8080/currentuser/${user_id}`).then((response) => {
			setUserData(response.data[0]);
		})
	}, []);
	

	return (
		<div>
            <div className="topbar-color">
                <Topbar user_id={user_id}/>
                <div style={{display: "flex"}}>
                    <SidebarUser role="user" />
                    <div>
                      <div style={{marginLeft: "60px"}} className="container-fluid">
			<div className='contentAtWalletPage'>
				<div>
					<div className='balance'>
					<span><AccountBalanceWalletIcon style={{ fontSize: 80 }}/></span>
					<div className="coin-balance">
						<p>Current Balance</p>
						<p>{userData.coin_balance} COIN </p>
					</div>
					</div>
					<br/> <br/> <br/> <br/>
					<div className='button'>
						<button onClick={() => {
							routeChange("topup")
						}} className='btn_topUp'>
						<CreditCardOutlinedIcon style={{ fontSize: 35 }}/>&ensp;
						<span className='spanTopUp'>Top-up</span></button>
					</div>
					<br/> <br/> 
					<div className='button'>
						<button onClick={() => {
							routeChange("claim")
						}} className='btn_claim'>
						<ArrowForwardRoundedIcon style={{ fontSize: 35 }}/>
						&ensp;Claim</button>
					</div>
				</div>
				<div className='ponyImgAtWalletPage'>
					<img src={pony} />
				</div>
			</div>
	</div>
                    </div> 
                </div>
            </div>
        </div>
	
	);
	
}

export default Wallet;