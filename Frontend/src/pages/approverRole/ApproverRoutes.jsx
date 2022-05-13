import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from "../Page404";
import PaymentApprove from "./PaymentApprove";
import ClaimApprove from "./ClaimApprove";

function ApproverRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/payment" element={<PaymentApprove />} />
                <Route path="/claimrequest" element={<ClaimApprove />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default ApproverRoutes;

