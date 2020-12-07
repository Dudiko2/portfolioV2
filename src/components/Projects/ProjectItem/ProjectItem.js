import { h } from "preact";
import "./ProjectItem.css";

const ProjectItem = ({ isEven }) => {
	return (
		<div className={`project`}>
			<img width="30" src="https://via.placeholder.com/600/" />
			<div className="p-details">
				<h3>name</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
					vehicula diam. Nulla facilisis, neque eleifend fringilla imperdiet,
					elit quam
				</p>
				<div className="p-links">
					<a href="#">code</a>
					<a href="#">see live</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
