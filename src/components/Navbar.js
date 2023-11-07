import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles/Styles.css";

function Navbar() {
	const navRef = useRef();

	//isjungia/ijungia dropdown
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className="navbar-container">
			<div className="navbar-clearfix">
			<div className="navbar-logo">
			<img
				src="https://pic.onlinewebfonts.com/thumbnails/animations_368928.svg"
				width="64px"
				height="64px"
				  className="d-inline-block align-top mx-2"
				alt=""
			/>
			<h3>PLC projects</h3>
			</div>
			<nav ref={navRef} className="navbar-items">
				<a href="/">HOME</a>
				<a href="/solutions">SOLUTIONS</a>
				<a href="/about">ABOUT</a>
				<a href="/contacts">CONTACTS</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
			</div>
		</header>
	);
}

export default Navbar;