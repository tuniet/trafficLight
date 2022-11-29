import React from "react";
import TraficLight from "./traficLight.jsx";
import Info from "./info.jsx"


//create your first component
const Home = () => {
	return (
		<div>
			<div className="info">
				<Info />
			</div>
			<TraficLight />
			<h1 className="title">Trafficlight Simulator</h1>
		</div>
	);
};

export default Home;
