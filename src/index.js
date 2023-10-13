import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";

// 1. Paņem elementu no index.html
const noDOM = document.getElementById("root");

// 2. Pārvērš reālo elementu par React sakni
const root = ReactDOM.createRoot(noDOM);

// 3. React saknē renderē pirmo komponenti (App)
root.render(<App />);
