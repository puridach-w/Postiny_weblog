import React, { useState , useEffect} from "react";
import PaymentTable from "./PaymentTable";
import ClaimModal from './ClaimModal';
import SidebarUser from "../../components/Layout/SidebarUser";
import Topbar from "../../components/Layout/Topbar";
import Axios from "axios";

import "../../css/pages_css/approverRole/payment.css"

function ClaimApprove() {
    const [select, setSelect] = useState("All");
    const options = ["All", "Pending", "Approved", "Rejected"];
    const [modalOpen, setModalOpen] = useState(false);
	const [blur, setBlur] = useState(false);
    const [data,setData] = useState();
    const [allData,setAllData] = useState([]);
    const token = localStorage.getItem('token');
    const approver_id = localStorage.getItem("user_id");
    

    useEffect( () => {
        Axios.post('http://localhost:8080/auth', {
            authorization : "Bearer " + token
            }).then((response) => {
                if(response.data.status === 'ok'){
                    if(response.data.decoded.role_id != 2){
                        alert("This page for only approver role.");
                        if(response.data.decoded.role_id === 3){
                            window.location = "/home";
                        } else if(response.data.decoded.role_id === 1){
                            window.location = "/report-admin"
                        }
                    }
                } else{
                    alert("authen failed");
                    localStorage.removeItem("token");
                    window.location = "/";
                }
            });


        Axios.get('http://localhost:8080/getAllPayment').then((response) => {
            setAllData(response.data);
        });
    }, []);


    const updateStatus = (status,data) => {
        console.log("status" + status);
        Axios.patch('http://localhost:8080/updateStatus', {
            payment_id: data.payment_id,
            status: status,
            approver_id: approver_id
        }).then(res => console.log(res.data));

        if(status === 2){
            Axios.patch('http://localhost:8080/updateCoinbalance', {
            user_id: data.user_id,
            amount: data.amount
            }).then(res => console.log(res.data));
        }
    }

    const approveToReject = (status,data) => {
        console.log("status ator" + status);
        Axios.patch('http://localhost:8080/updateStatus', {
            payment_id: data.payment_id,
            status: status,
            approver_id: approver_id
        }).then(res => console.log(res.data));

        Axios.patch('http://localhost:8080/updateChangeApproveToReject', {
            user_id: data.user_id,
            amount: data.amount
        }).then(res => console.log(res.data));
    }

    const exceptAll = allData.filter( (item) => {
        return item.status_name === select;
    });

    function callForModal(data) {
        setModalOpen(true);
        setBlur(true);
        setData(data);
    }

    function dropdown() {
        return (
            <span className="selectApprove">
                    <select 
                        value={select}
                        onChange={ e => setSelect(e.target.value)}
                    >
                        {options.map( item => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
            </span>
        );
    }

    return (
        <div>
            <div className="topbar-color">
                <Topbar user_id={approver_id}/>
                <div style={{display: "flex"}}>
                    <SidebarUser role="approver" />
                    <div>
                    <div style={{paddingLeft: "60px"}}>
            {modalOpen && <ClaimModal approveToReject={approveToReject} update={updateStatus} data={data} setOpenModal={setModalOpen} setBlur={setBlur} />}
            <div style={{ filter: blur? "blur(5px)" : "none"}}>
                <h1 className="payment-header">Approve claim request&emsp;
                    {dropdown()}
                </h1>
                <br />
                {select !== "All" ? 
                <PaymentTable 
                    data={exceptAll} callForModal={callForModal}
                />
                :
                <PaymentTable
                    data={allData} callForModal={callForModal}
                />
                }       
            </div>
        </div>
                    </div> 
                </div>
            </div>
        </div>
        
    );
}

export default ClaimApprove;