import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home2 = () => {
	const [color, setColor] = useState("red");
	const [colorRed, setColorRed] = useState("red radius selected");
	const [colorYellow, setColorYellow] = useState("yellow radius");
	const [colorGreen, setColorGreen] = useState("green radius");

	setInterval(() => {
		if (color === "red") {
			setColorRed("red radius selected");
			setColorGreen("green radius");
			setColorYellow("yellow radius");
			setColor("yellow");
		} else if (color === "yellow") {
			setColorRed("red radius");
			setColorYellow("yellow radius selected");
			setColorGreen("green radius");
			setColor("green");
		} else {
			setColorRed("red radius");
			setColorYellow("yellow radius");
			setColorGreen("green radius selected");
			setColor("red");
		}
	}, 3000);
	return (
		<div className="text-center container">
			<div className="linea"></div>
			<div className="text-center semaforo">
				<div className={colorRed}></div>
				<div className={colorYellow}></div>
				<div className={colorGreen}></div>
			</div>
		</div>
	);
};

export default Home2;
