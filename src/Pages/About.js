import React, {Component} from "react";
import ReactDOM from "react-dom";
import Card from "../Card/Card";
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class About extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return(
            <>
                <Header number="3"/>
                <div className="content">
                    <h1 align="center">Творческое задание по дисциплине "ППИ"</h1>
                    <p align="center">Приложение включает в себя многофункциональное SPA, которое позволяет просматривать новости космической отрасли, а также добавлять их в избранное.</p>
                    <p align="center">Работу выполнил:<br/>Студент группы ИВТ-02<br/>Миназов Наиль</p>
                </div>
                <Footer/>
            </>
        )
    }


}

export default About;