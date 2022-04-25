import React from 'react';
import {walletData} from "../dummyData";
import '../css/pages_css/wallet.css';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import ListTransaction from "./transaction/ListTransaction";
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import { useNavigate } from "react-router-dom";


function Wallet() {
	const balance = walletData[0].coinBalance;

	let navigate = useNavigate(); 
  	const routeChange = () =>{ 
    let path = '/topup'; 
    navigate(path);
  	}

	return (
	<div style={{marginLeft: "60px"}} className="container-fluid">
		<div className='content'>
			<div className='row'>
				<div className='col-lg-6'>
					<div className='balance'>
						<span><AccountBalanceWalletIcon style={{ fontSize: 80 }}/></span>
						<div className="coin-balance">
							<p>Current Balance</p>
							<p>{balance} COIN </p>
						</div>
					</div>
					<br/> <br/> <br/> <br/>
					<div>
						<button onClick={routeChange} className='btn_topUp'>
						<CreditCardOutlinedIcon style={{ fontSize: 35 }}/>&ensp;
						<span className='spanTopUp'>Top-up</span></button>
					</div>
					<br/> <br/> 
					<div>
						<button className='btn_claim'>
						<ArrowForwardRoundedIcon style={{ fontSize: 35 }}/>
						&ensp;Claim</button>
					</div>
				</div>
				<div className='transaction col-lg-6'>
					<h1>Transaction history</h1>
					<br/>
					{walletData.map(item => (
						<ListTransaction
							userId={item.userId}
							payment={item.payment}
							subscription={item.subscription}
						/>
					))}
				</div>
			</div>
		</div>
	</div>
	);
	
}

export default Wallet;