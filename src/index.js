import React from 'react';
import ReactDOM from 'react-dom/client';
//import {Route, Router, Routes} from "react-router";
import {BrowserRouter as Router, NavLink, Navigate, Route, Routes, Link, Outlet} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from "./App";
import Content from "./Pages/Content";
import About from "./Pages/About";
import Article from "./Pages/Article";
import './CSS/Width-Screen.css';
import Page404 from "./page404/page404";
import Favorite from "./Pages/Favorite";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Navigate from="/" to="/News" replace/>}/>
                <Route name="News/" path="/News" element={<Outlet />}>
                    <Route index element={<Content page="1"/>} />
                    <Route path=':id' element={<Article id=':id'/>} />
                </Route>
                <Route path="/Favorite" element={<Favorite/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="*" element={<Page404 />}/>
            </Routes>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
