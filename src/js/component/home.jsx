import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [colorRed, setColorRed] = useState("red radius");
	const [colorGreen, setColorGreen] = useState("green radius");
	const [colorYellow, setColorYellow] = useState("yellow radius");
	return (
		<div className="text-center container">
			<div className="linea"></div>
			<div className="text-center semaforo">
				<div
					className={colorRed}
					onClick={() => {
						setColorRed("red radius selected");
						setColorGreen("green radius");
						setColorYellow("yellow radius");
					}}></div>
				<div
					className={colorYellow}
					onClick={() => {
						setColorRed("red radius");
						setColorGreen("green radius");
						setColorYellow("yellow radius selected");
					}}></div>
				<div
					className={colorGreen}
					onClick={() => {
						setColorRed("red radius");
						setColorGreen("green radius selected");
						setColorYellow("yellow radius");
					}}></div>
			</div>
		</div>
	);
};

export default Home;
