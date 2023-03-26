import React, {useState, useEffect} from "react";
import Header from "../Header/Header";
import Content from "./Content";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import favorite from "../assets/favorite.png";


function Favorite(news) {
    var articles = [];
    var ids = [];
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var newItem = new Object();
            newItem.id = key;
            newItem.title = localStorage.getItem(key);
            articles.push(newItem);
        }


    return(
        <>
            <Header number={"2"}/>
            <div className="content">
                {
                    articles.map((news) => (
                    <Link to={"/News/" + news.id}>
                    <div key={news.id} id={news.id} className={"favorite-item"}>
                    <h2>{news.title}</h2>
                    </div>
                    </Link>
                    ))}
            </div>
            <Footer/>
        </>
    )
}

export default Favorite

