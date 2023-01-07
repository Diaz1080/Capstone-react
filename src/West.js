import { Link } from "react-router-dom";
import "./App.css";
import App from "./App";
const West = () => {
	return (
		<div>
			<h1>West</h1>
			<Link to="/North">North</Link>
            <Link to="/South">South</Link>
            <Link to="/East">East</Link>
            <Link to="/West">West</Link>
		</div>
	);
};

export default West;