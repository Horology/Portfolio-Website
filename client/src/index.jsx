import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./styles/index.css";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
	<HashRouter hashType={"noslash"}>
		<Main />
	</HashRouter>,
	document.getElementById("root")
);
