import React from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
// import Card from './props/Card';
import InfoCard from './props/InfoCard';
import seattle from "../utils/images/seattle.png";
import puertovallarta from "../utils/images/puertovallarta.png";
import houston from "../utils/images/houston.png";
import queretaro from "../utils/images/queretaro.png";
import valledebravo from "../utils/images/valledebravo.png";
import malinalco from "../utils/images/malinalco.png";
import guadalajara from "../utils/images/guadalajara.png";
import bacalar from "../utils/images/bacalar.png";
import mexicocity from "../utils/images/mexicocity.png";
import morelia from "../utils/images/morelia.png";
import patzcuaro from "../utils/images/patzcuaro.png";
import zirahuen from "../utils/images/zirahuen.png";
import puertorico from "../utils/images/puertorico.png";
import kansascity from "../utils/images/kansascity.png";
import orlando from "../utils/images/orlando.png";
import phoenix from "../utils/images/phoenix.png";
import monterrey from "../utils/images/monterrey.png";
import tulum from "../utils/images/tulum.png";
import taxco from "../utils/images/taxco.png";
import tepotzotlan from "../utils/images/tepotzotlan.png";
import kualalumpur from "../utils/images/kualalumpur.png";
import bogota from "../utils/images/bogota.png";
import chiapas from "../utils/images/chiapas.png";
import sma from "../utils/images/sma.png";

function Locations() {
  const visited = [
    // {
    //   name: "Seattle, WA, USA",
    //   src: seattle,
    //   content: "The beautiful PNW. Able to make the most of the mountains, water and scenery."
    // },
    {
      name: "Puerto Vallarta, Jalisco, MX",
      src: puertovallarta,
      content: "Tropical paradise. Beautiful, great weather, people and overall location. Very affordable, even for being a tourist trap."
    },
    // {
    //   name: "Houston, TX, USA",
    //   src: houston
    // },
    {
      name: "Querétaro, Estado de México, MX",
      src: queretaro
    }, {
      name: "Guadalajara, Jalisco, MX",
      src: guadalajara
    }, {
      name: "Valle de Bravo, Jalisco, MX",
      src: valledebravo
    },
    {
      name: "Malinalco, Estado de México, MX",
      src: malinalco
    },
    {
      name: "Bacalar, Quintana Roo, MX",
      src: bacalar
    },
    {
      name: "Tulum, Quintana Roo, MX",
      src: tulum
    },
    {
      name: "Mexico City, Mexico, MX",
      src: mexicocity
    },
    {
      name: "Morelia, Michocan, MX",
      src: morelia
    },
    {
      name: "Patzcuaro, Michocan, MX",
      src: patzcuaro
    },
    {
      name: "Zirahuen, Michocan, MX",
      src: zirahuen
    },
    {
      name: "Kansas City, Missouri, USA",
      src: kansascity
    },
    {
      name: "Puerto Rico",
      src: puertorico
    },
    // {
    //   name: "Phoenix, Arizona, USA",
    //   src: phoenix
    // },
    // {
    //   name: "Orlando, Florida, USA",
    //   src: orlando
    // },
    {
      name: "Tepotzotlán, Estado de México, MX",
      src: tepotzotlan
    }, 
    {
      name: "Monterrey, Nuevo Leon, MX",
      src: monterrey
    },
    {
      name: "San Miguel De Allende, Guanajuato, Mexico",
      src: sma
    }
  ];
  const toVisit = [
    {
      name: "Taxco, Estado de México, MX",
      src: taxco
    },
    {
      name: "Kuala Lumpur, Malaysia",
      src: kualalumpur
    },
    {
      name: "Bogotá, Columbia",
      src: bogota
    },
    {
      name: "Chiapas, Oxaca, Mexico",
      src: chiapas
    }
  ]
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="h1">Locations Visited</div>
          <ResponsiveMasonry columnsCountBreakPoints={
            {
              350: 1,
              500: 2,
              750: 3,
            }
          }>
            <Masonry> {
              visited.map(({
                name,
                src,
              }, index) => <InfoCard name={name}
                src={src}
                key={index}
                className="p-1 m-1"/>)
            } </Masonry>
          </ResponsiveMasonry>
        </div>
        <div className="row">
          <div className="h1">Locations To Be Visited Soon...</div>
          <ResponsiveMasonry columnsCountBreakPoints={
            {
              350: 1,
              500: 2,
              750: 3,
            }
          }>
            <Masonry> {
              toVisit.map(({
                name,
                src,
              }, index) => 
              <InfoCard name={name}
                src={src}
                key={index}
                className="p-2 m-2"/>)
            } </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  )
}

export default Locations
