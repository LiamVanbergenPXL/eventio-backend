import {createBrowserRouter} from "react-router-dom";
import Login from "./Pages/Login";
import Registreren from "./Pages/Registreren";
import React from "react";
import Dashboard from "./Pages/Dashboard";

export const router = createBrowserRouter(
    [
        {path: "/", element: <Dashboard/>},
        { path: "/login", element: <Login/>},
        { path: "/aanmelden", element: <Registreren/>}
    ]
);