import "./Header.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../assets/logo/InStock-Logo_1x.png";

const Header = () => {
	return (
		<div className="header">
			<div className="header__logo">
				{
					<img
						src={logoImg}
						alt="InStock logo"
					/>
				}
			</div>
			<nav className="header__nav">
				<div className="header__nav-link">
					<NavLink to="warehouses">Warehouses</NavLink>
				</div>
				<div className="header__nav-link">
					<NavLink to="inventory">Inventory</NavLink>
				</div>
			</nav>
		</div>
	);
};

export default Header;
