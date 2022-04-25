import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from "../Page404";
import AdminRP from "./AdminRP";


function AdminRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/report-admin" element={<AdminRP />} />
                {/* <Route path="/article-admin" element={<AdminRP />} />
                <Route path="/user-admin" element={<AdminRP />} /> */}
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AdminRoutes;

