import React from "react";
import logo from "../assets/images/techsystems-logo.jpg";
import PwaInstall from "../Utils/PwaInstall";
import { useNavigate, useLocation } from "react-router";
import { Book, House } from "react-bootstrap-icons";
const Header = () => {
	const Navigate = useNavigate();
	const Location = useLocation();
	return (
		<div className="bg-secondary header " style={{ color: "white" }}>
			<div className=" d-flex justify-content-between">
				<div
					className="d-flex align-items-center"
					onClick={() => Navigate("/")}
					style={{ cursor: "pointer" }}
				>
					{" "}
					<img
						src={logo}
						alt="techsystems-logo"
						className="rounded "
						style={{ maxHeight: "40px", width: "auto" }}
					/>
					<p className="navbar-brand h5 mx-2">Techsystems </p>
				</div>
				<div className="d-flex justify-content-around align-items-between">
					<div
						onClick={() => Navigate("/payment-policy")}
						className="nav-link rounded text-decoration-underline text-capitalize text-center d-flex justify-content-center align-items-center "
					>
						Payment Policy
					</div>
					<PwaInstall></PwaInstall>
				</div>
			</div>
		</div>
	);
};

export default Header;
