import React from "react";
import {createRoot} from "react-dom/client";  //✅ This imports the createRoot function from react-dom/client.In React 18+, this is the modern way to render the app to the browser.
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
createRoot(container).render(<App/>);  // ✅ This does two things: createRoot(container) → connects React to the HTML element.  .render(<App />) → tells React to show the <App /> component inside the page.