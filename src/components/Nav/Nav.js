import { h } from "preact";
import "./Nav.css";

const Nav = () => {
	return (
		<div id="Nav">
			<a>
				<span className="initials">d.g.</span>
			</a>
			<nav>
				<a href="#">projects</a>
				<a href="#">contact</a>
			</nav>
		</div>
	);
};

export default Nav;
