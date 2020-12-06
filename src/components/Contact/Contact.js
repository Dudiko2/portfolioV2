import { h } from "preact";
import { GITHUB_URL, LINKEDIN_URL } from "../../global";
import "./Contact.css";

const Contact = () => {
	return (
		<div id="Contact">
			<h2>Contact</h2>
			<p>Interested in working together?</p>
			<p>
				I am available via <a href={LINKEDIN_URL}>LinkedIn</a> &{" "}
				<a href={GITHUB_URL}>Github</a>
			</p>
			<h5 className="initials">&copy; d.g.</h5>
		</div>
	);
};

export default Contact;
