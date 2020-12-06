import { Fragment, h, render } from "preact";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

const App = () => {
	return (
		<Fragment>
			<Nav />
			<Hero />
			<Projects />
			<Contact />
		</Fragment>
	);
};

export default App;
