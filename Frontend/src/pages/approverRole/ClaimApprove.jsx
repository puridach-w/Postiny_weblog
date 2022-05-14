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
    const [image,setImage] = useState({});
    const [haveimg,setHaveImg] = useState(false);
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


        Axios.get(`http://localhost:8080/getAllPayment/${1}`).then((response) => {
            setAllData(response.data);
        });
    }, []);

    const onImageChange = (e) => {
        setImage(e.target.files[0]);
        setHaveImg(true);
    }


    const updateStatus = async (status,data) => {
        const formData = new FormData();
        formData.append('image',image);

        try {
            const response = await Axios({
            method: "post",
            url: "http://localhost:8080/upload",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
            });
            try{
                Axios.patch('http://localhost:8080/updateStatus', {
                    payment_id: data.payment_id,
                    status: status,
                    approver_id: approver_id,
                    payment_slip: response.data.filename
                });
            }
            catch(err){
                console.log("err:",err);
            }
          } catch(error) {
            console.log("err on upload photo",error);
          }

        //reject claim request because we cut the coin of user when him send claim request
        //if aprrover reject we need to give the money back to him
        if(status === 3){
            Axios.patch('http://localhost:8080/updateCoinbalance', {
            user_id: data.user_id,
            amount: data.amount
            });
        }
        location.reload();
    }

    const rejectToApprove = async (status,data) => {
        const formData = new FormData();
        formData.append('image',image);
        try {
            const response = await Axios({
            method: "post",
            url: "http://localhost:8080/upload",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
            });
            try{
                Axios.patch('http://localhost:8080/updateStatus', {
                    payment_id: data.payment_id,
                    status: status,
                    approver_id: approver_id,
                    payment_slip: response.data.filename
                });
            }
            catch(err){
                console.log("err:",err);
            }
          } catch(error) {
            console.log("err on upload photo",error);
          }

        Axios.patch('http://localhost:8080/updateChangeApproveToReject', {
            user_id: data.user_id,
            amount: data.amount
        });
        location.reload();
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
                    {modalOpen && <ClaimModal rejectToApprove={rejectToApprove} 
                    update={updateStatus} data={data} setOpenModal={setModalOpen} 
                    setBlur={setBlur} onImageChange={onImageChange} haveimg={haveimg} image={image}/>}
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