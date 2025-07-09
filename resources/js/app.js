import "./bootstrap";
import "../css/app.css";
import React from "react";
import { createRoot } from "react-dom/client";
import Navigasi from "../components/Navigasi";

const root = document.getElementById("react-app");
if (root) {
    createRoot(root).render(<Navigasi />);
}
