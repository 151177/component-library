import React from "React";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Router>
)