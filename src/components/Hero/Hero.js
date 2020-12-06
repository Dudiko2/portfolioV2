import { h } from "preact";
import HexGraphic from "../HexGraphic/HexGraphic";
import ScrollerGraphic from "../ScrollerGraphic/ScrollerGraphic";
import "./Hero.css";
import { LINKEDIN_URL, GITHUB_URL } from "../../global";
import LinkedInIcon from "../LinkedInIcon/LinkedInIcon";
import GithubIcon from "../GithubIcon/GithubIcon";

const Hero = () => {
	return (
		<div id="Hero">
			<div id="hero-text">
				<h3>Hey, I'm</h3>
				<h1>David Gavriel</h1>
				<span>a front-end developer</span>
				<div id="media-links">
					<a href={LINKEDIN_URL}>
						<LinkedInIcon />
					</a>
					<a href={GITHUB_URL}>
						<GithubIcon />
					</a>
				</div>
			</div>
			<div id="hex">
				<HexGraphic />
			</div>
			<div id="scroller">
				<ScrollerGraphic />
			</div>
		</div>
	);
};

export default Hero;
