import { h } from "preact";
import ProjectItem from "./ProjectItem/ProjectItem";
import "./Projects.css";

const Projects = () => {
	const pjs = ["blank", "blank"];

	return (
		<div id="Projects">
			<h1>Projects</h1>
			<div id="project-list">
				{pjs.map((p) => (
					<ProjectItem />
				))}
			</div>
		</div>
	);
};

export default Projects;
