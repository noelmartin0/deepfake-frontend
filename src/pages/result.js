import Background from "../components/property1-variant";
import Footer from "../components/footer";
import Upload from "../components/upload";
import Navbar from "../components/nav";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <header className="result-parent">
      <Navbar/>
        <Background
          propTop="0px"
          propBackground="linear-gradient(127.22deg, #000 53.53%, #16431d)"
          propLeft="0px"
          propWidth="100%"
          propHeight="100%"
          propMargin="0 !important"
          propRight="0px"
          propBottom="0px"
        />
        <div classname="result-area">
          <h1 color="white">Jeloo</h1>
        </div>
        
        <Footer />
      </header>
    </div>
  );
};

export default Home;
