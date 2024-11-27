import Header from "../Header/Header.jsx";
import "../index.css"
import Section01 from "../Section01/Section01.jsx";
import Section2 from "../Section02/Section02.jsx";
import Footer from "../Footer/Footer.jsx";
import HeaderMobile from "../Header/HeaderMobile.jsx";
import SectionSobre from "../SectionSobre/SectionSobre.jsx";

const Home = () => {
    return (
        <>
            <Header />
            <HeaderMobile/>
            <Section01 />
            <Section2 />
            <SectionSobre/>
            <Footer />
        </>
    )
}

export default Home;