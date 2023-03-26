import React from "react";
import {Link} from "react-router-dom";

function Header(props) {
    if (props.number === "1")
    return(
        <header>
            <Link to="/News">
                <div className="header-item active" id="first">Новости</div>
            </Link>
            <Link to="/Favorite">
            <div className="header-item" id="second">Избранное</div>
            </Link>
            <Link to="/About">
                <div className="header-item" id="third">О авторе</div>
            </Link>
        </header>
    )
    else if (props.number === "2")
        return(
            <header>
                <Link to="/News">
                    <div className="header-item" id="first">Новости</div>
                </Link>
                <Link to="/Favorite">
                    <div className="header-item active" id="second">Избранное</div>
                </Link>
                <Link to="/About">
                    <div className="header-item" id="third">О авторе</div>
                </Link>
            </header>
        )
    else if (props.number === "3")
        return(
            <header>
                <Link to="/News">
                    <div className="header-item" id="first">Новости</div>
                </Link>
                <Link to="/Favorite">
                    <div className="header-item" id="second">Избранное</div>
                </Link>
                <Link to="/About">
                    <div className="header-item active" id="third">О авторе</div>
                </Link>
            </header>
        )
    else
        return (
            <header>
                <Link to="/News">
                    <div className="header-item" id="first">Новости</div>
                </Link>
                <Link to="/Favorite">
                    <div className="header-item" id="second">Избранное</div>
                </Link>
                <Link to="/About">
                    <div className="header-item" id="third"> О себе </div>
                </Link>
            </header>
        )
}

export default Header