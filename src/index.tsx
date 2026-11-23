import React from "react";
import { createRoot } from "react-dom/client";
import { Routes } from "./Routes";

import "./index.scss";

createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Routes />
    </React.StrictMode>
);
