import React, { useState } from "react";
import PaymentTable from "./PaymentTable";
import {paymentApprove} from "../../dummyData";
import ApproveModal from './ApproveModal';

import "../../css/pages_css/approverRole/payment.css"

function PaymentApprove() {
    const [select, setSelect] = useState("All");
    const options = ["All", "Pending", "Approved", "Rejected"];
    const [modalOpen, setModalOpen] = useState(false);
	const [blur, setBlur] = useState(false);
    const [data,setData] = useState();

    const exceptAll = paymentApprove.filter( (item) => {
        return item.status === select;
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
        <div style={{paddingLeft: "60px"}}>
            {modalOpen && <ApproveModal data={data} setOpenModal={setModalOpen} setBlur={setBlur} />}
            <div style={{ filter: blur? "blur(5px)" : "none"}}>
                <h1 className="payment-header">Payment approve &emsp;
                    {dropdown()}
                </h1>
                <br />
                {select !== "All" ? 
                <PaymentTable 
                    data={exceptAll} callForModal={callForModal}
                />
                :
                <PaymentTable
                    data={paymentApprove} callForModal={callForModal}
                />
                }       
            </div>
        </div>
    );
}

export default PaymentApprove;