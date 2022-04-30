import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import './css/app.css';
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import NewCat from "./pages/NewCat";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import EditPersonal from "./pages/EditPersonal";
import ChangeCategory from "./pages/ChangeCategory";
import ChangePW from "./pages/Changepw";
import PaymentApprove from "./pages/approverRole/PaymentApprove";
import AdminRP from "./pages/adminRole/AdminRP";
import Home from "./pages/Home";
import Blog from './pages/Blog';
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet"
import Report from "./pages/Report"
import Page404 from "./pages/Page404";
import Topup from "./pages/Topup";
import TransactionUpload from "./pages/TransactionUpload"


import Layout from "./components/Layout/Layout";

export default function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Signin/>}/>
					<Route path="/signin" element={<Signin/>}/>
					<Route path="/register" element={<Register/>}/>
					<Route path="/newcategory" element={<NewCat/>}/>
					<Route path="/profile" element={<Profile 
						fname="Puridach"
						lname="Wutthihathaithamrong"
						sub="245"
						article="21"
						like="910"
						bio="Deadline is faster than karma :("
						category={["Technology", "Sports", "Gaming"]}/>}/>
					<Route path="/editprofile" element={<EditProfile/>}/>
					<Route path="/editpersonal" element={<EditPersonal />}/>
					<Route path="/changecategory" element={<ChangeCategory />}/>
					<Route path="/changepassword" element={<ChangePW />}/>

					<Route path="/payment" element={<PaymentApprove />} />

					<Route path="/report-admin" element={<AdminRP />} />

					<Route path="/home" element={<Home />} />
					<Route path="/topup" element={<Topup />} />
					<Route path="/blog/:id" element={<Blog />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/wallet" element={<Wallet />} />
					<Route path="/report" element={<Report />} />
					<Route path="/transaction-upload" element={<TransactionUpload />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</BrowserRouter>
			{/* <Layout /> */}
		</div>
	)
}

{/* <Route exact path="/" render={() => (
  loggedIn ? (
    <Redirect to="/dashboard"/>
  ) : (
    <PublicHomePage/>
  )
)}/> */}