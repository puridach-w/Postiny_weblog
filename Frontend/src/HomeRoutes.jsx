import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from './pages/Blog';
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet"
import Report from "./pages/Report"
import Page404 from "./pages/Page404";
import Topup from "./pages/Topup";
import TransactionUpload from "./pages/TransactionUpload"

function HomeRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/blog/:id" element={<Blog />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/report" element={<Report />} />
                <Route path="/topup" element={<Topup />} />
                <Route path="/transaction-upload" element={<TransactionUpload />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default HomeRoute;

