import { Link } from "react-router-dom";
import "./App.css";
import App from "./App";
const South = () => {
	return (
		<div>
			<h1>South</h1>
			<Link to="/North">North</Link>
            <Link to="/South">South</Link>
            <Link to="/East">East</Link>
            <Link to="/West">West</Link>
		</div>
	);
};

export default South;