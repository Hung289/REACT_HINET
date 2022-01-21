import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App";

import "./assets/css/fontawesome-pro-5/css/all.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
