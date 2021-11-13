//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";
import Home2 from "./component/home2.jsx";

//render your react application
ReactDOM.render(
	<div>
		<Home />
	</div>,
	document.querySelector("#app")
);
