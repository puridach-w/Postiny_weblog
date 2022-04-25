import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from "../Page404";
import PaymentApprove from "./PaymentApprove";

function AdminRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/payment" element={<PaymentApprove />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AdminRoutes;

