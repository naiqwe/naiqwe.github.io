import React, {Component} from "react";
import Header from "../Header/Header";
import {Redirect, useParams} from "react-router-dom";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import Card from "../Card/Card";
import {withRouter} from "../hoc/with-router";
import Similar from "../Card/Similar";
import Page404 from "../page404/page404";

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            items: [],
            similar: [],
            title: "",
            err: false
        }
        this.changeSearch = this.changeSearch.bind(this);
        console.log(this.state.id);
        console.log(this.props.match.params.id);
    }

    componentDidMount() {
        //запрос новости по id
        fetch("https://api.spaceflightnewsapi.net/v3/articles/"+this.state.id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        err: false,
                        items: result,
                        title: result.newsSite
                    });
                },
                (error) => {
                    this.setState({
                        err: true
                    });
                }
            )
        const {title} = this.state;
        console.log(title);
        //запрос похожих новостей по тайтл
        fetch("https://api.spaceflightnewsapi.net/v3/articles/?title_contains="+title)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        similar: result
                    });
                },
                (error) => {
                    this.setState({
                    });
                }
            )
    }
    render() {
        const {err, items, similar} = this.state;
        console.log(this.state.err);
        document.title = items.title;
        if (this.state.err) {
            return (
                <>
                    <Page404/>
                </>
            )
        }
        else
        return (
            <>
                <Header number="1"/>
                <div className="content">
                    <div className="article">
                        <div className="text">
                            <p id="title">{items.title}</p>
                            <p id="news">{items.newsSite}</p>
                            <p id="summary">{items.summary}</p>
                            <p id="id">{items.publishedAt}</p>
                        </div>
                        <div className="img">
                            <img src={items.imageUrl} />
                        </div>
                    </div>
                    <div className="similar" align="center">
                        <h1>Похожие новости</h1>
                        {similar.map(item => (
                            <>
                            <Link to={"/News/"+item.id} onClick={() => {
                                setTimeout(()=>{
                                  window.location.reload(false);}, 500)
                            }}>
                                <Similar key={item.id} title={item.title} />
                            </Link>
                            </>
                        )).slice(4,8)}
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
    changeSearch() {
        // eslint-disable-next-line react/no-direct-mutation-state

        // enter проверка
        this.setState({
            search: document.getElementById("search").innerText
        })
        fetch("https://api.spaceflightnewsapi.net/v3/articles?title_contains="+this.state.search)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        err: false,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        err: true
                    });
                }
            )
    }
}

export default withRouter(Article);