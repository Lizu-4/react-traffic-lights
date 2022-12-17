import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";

//create your first component
const Home = () => {

	const [ color, setColor] = useState("");


	let selectedR = ""
	let selectedY = ""
	let selectedG = ""

	color == "red"? selectedR = "selected" : null;	
	color == "yellow"? selectedY = "selected" : null;
	color == "green"? selectedG = "selected" : null;

	return (
		<div className="container traffic">
			<div className={"light red " + selectedR} onClick={()=> setColor("red")}>.</div>
			<div className={"light yellow " + selectedY} onClick={()=> setColor("yellow")} >.</div>
			<div className={"light green " + selectedG} onClick={()=> setColor("green")}>.</div>
		</div>
	);
};

export default Home;
