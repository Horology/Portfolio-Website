import React from "react";
import Main from "./Main";
import "./styles/index.css";
import { HashRouter } from "react-router-dom";
import isPropValid from "@emotion/is-prop-valid";
import { createRoot } from "react-dom/client";
import { StyleSheetManager } from "styled-components";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
	<HashRouter hashType={"noslash"}>
		<StyleSheetManager shouldForwardProp={shouldForwardProp}>
			<Main />
		</StyleSheetManager>
	</HashRouter>
);

// This implements the default behavior from styled-components v5
function shouldForwardProp(propName, target) {
	if (typeof target === "string") {
		// For HTML elements, forward the prop if it is a valid HTML attribute
		return isPropValid(propName);
	}
	// For other elements, forward all props
	return true;
}
