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
		<header>
			<div>
			<img
				src="images/navlogo.svg"
				width="30"
				height="30"
				  className="d-inline-block align-top mx-2"
				alt=""
			/>
			<h3>PLC projects</h3>
			</div>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/solutions">Solutions</a>
				<a href="/about">About</a>
				<a href="/contacts">Contacts</a>
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
		</header>
	);
}

export default Navbar;