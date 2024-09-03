import React from "react"

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./utils/styles.css"
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import About from "./components/About";
import Reviews from "./components/Reviews";
import Locations from "./components/Locations";
import Portfolio from "./components/Portfolio";
import Philosophy from "./components/Philosophy";
import Home from "./components/Home";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";


function App() {
  const [page, setPage] = React.useState("home");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const _component = {
    home: <Home />,
    about: <About />,
    reviews: <Reviews />,
    locations: <Locations />,
    portfolio: <Portfolio />,
    philosophy: <Philosophy />
  }
  var page_array = Object.keys(_component);
  return (
    <>
      <header>
        <TopNavbar cta={() => {
          let cI = currentIndex;
          setCurrentIndex(cI += 1);
          if(currentIndex === page_array.length + 1){setCurrentIndex(0)};
          setPage(page_array[currentIndex]);
        }
          } />
        <Carousel />
        <Navbar page={page}
          setPage={setPage} />
      </header>
      <div> {
        _component[page]
      } </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
