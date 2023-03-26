import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Page404 = () => {
    document.title = "Error: 404";
    return (
        <>
            <Header number="0"/>
            <div className="content">
                <h2 className="p404" align="center">Page not found!</h2>
            </div>
            <Footer/>
        </>
    )
}

export default Page404;