import React, {Component} from "react";
import Card from "../Card/Card";
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Page404 from "../page404/page404";

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            page: parseInt(props.page)
        };
        this.pageDown = this.pageDown.bind(this);
        this.pageUp = this.pageUp.bind(this);
        this.changeSearch = this.changeSearch.bind(this);
    }

    componentDidMount() {
        fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=90")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    changeSearch(e) {
            if (e.code === 'Enter') {
                alert("a'");
                fetch("https://api.spaceflightnewsapi.net/v3/articles/?title_contains=" + e.target.value+"&_limit=90")
                    .then(res => res.json())
                    .then(
                        (result) => {
                            this.setState(prevState => ({
                                items: result
                            }));
                        },
                        (error) => {
                            this.setState(prevState => ({
                                error
                            }));
                        }
                    )
            }
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return (<>
                <Page404/>
            </>)
        } else if (!isLoaded) {
            document.title = "Новости";
            return (<>
                <Header number="1"/>
                <div className="content">
                    <div id="message-load">Loading</div>
                </div>
                <Footer/>
            </>)
        } else {
            return (
                <>
                    <Header number="1"/>
                    <div className="content">
                        <div className="search">
                            <label>Поиск <input type={"text"} onKeyPress={this.changeSearch} id="search"/> </label>
                        </div>
                        {items.map(item => (
                            <>
                                {/*<Link to={"/News/" + item.id}>*/}
                                    <Card item={item}  key={item.id}
                                          title={item.title}
                                          newsSite={item.newsSite}
                                          imageUrl={item.imageUrl}
                                          publishedAt={item.publishedAt}
                                          id={"/" + item.id}/>
                                {/*</Link>*/}
                            </>
                        )).slice(this.state.page * 10 - 10, this.state.page * 10)}
                        <div className="buttons">
                            <button id="prev" className="arrow" onClick={this.pageDown}>{'\u2190'}</button>
                            <button id="current" className="page">{this.state.page}</button>
                            <button id="next" className="arrow" onClick={this.pageUp}>{'\u2192'}</button>
                        </div>
                    </div>
                    <Footer/>
                </>
            )
        }
    }

    pageDown() {
        if (parseInt(this.state.page) === 1) return;
        this.setState(prevState => ({
            page: parseInt(this.state.page) - 1
        }))
    }

    pageUp() {
        if (parseInt(this.state.page) === 8) return;
        this.setState(prevState => ({
            page: parseInt(this.state.page) + 1
        }))
    }
}