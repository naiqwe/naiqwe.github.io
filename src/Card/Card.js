import React from "react";
import {Link} from "react-router-dom";
import favorite from "../assets/favorite.png";
import deleteFavorite from "../assets/deleteFavorite.png";

function Card({ item }) {
    const handleClick = () => {
        localStorage.setItem(item.id, JSON.stringify([item.title]))
    }
    const handleClickDelete = () => {
        localStorage.removeItem(item.id, JSON.stringify([item.title]))
    }
    return(
        <div className="card" id={item.id}>
            <div className="card-info">
                <Link to={"/News/" + item.id}>
                <h3>{item.title}</h3>
                </Link>
                <h4>{item.newsSite}</h4>
                <div className="meta">
                <button id={item.id} onClick={handleClick} className={"favorite-button"}><img src={favorite}/></button>
                <button id={item.id} onClick={handleClickDelete} className={"favorite-button"}><img src={deleteFavorite}/></button>
                <h6>{item.id} ... </h6>
                <h6> posted {item.publishedAt.slice(0,10)}</h6>
                </div>
            </div>
            <div className="card-img">
                <img src={item.imageUrl}/>
            </div>
        </div>
    );
}
export default Card;