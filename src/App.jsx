import React from "react"

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./utils/styles.css"
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import About from "./components/About";
import Locations from "./components/Locations";
import Portfolio from "./components/Portfolio";
import Philosophy from "./components/Philosophy";
import Home from "./components/Home";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";


function App() {
  const [page, setPage] = React.useState("home");
  const _component = {
    home: <Home/>,
    about: <About/>,
    locations: <Locations/>,
    portfolio: <Portfolio/>,
    philosophy: <Philosophy/>}
  return (
    <>
      <header>
        <TopNavbar/>
        <Carousel/>
        <Navbar page={page}
          setPage={setPage}/>
      </header>
      <body> {
        _component[page]
      } </body>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
