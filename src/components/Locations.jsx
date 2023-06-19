import React from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
// import Card from './props/Card';
import InfoCard from './props/InfoCard';

function Locations() { // VISITED
  const Seattle = "https://scenicusa.net/images/JL09SeattleSkylinePD.jpg";
  const PV = "https://destinationlesstravel.com/wp-content/uploads/2022/04/Puerto-Vallarta-from-above-at-sunset.jpg.webp";
  const Houston = "https://media.timeout.com/images/105124790/image.jpg";
  const QMx = "https://images.squarespace-cdn.com/content/v1/53c0344ce4b0fd8b5108ec18/1557895592808-JR5EYSCBN45Z4DOH5UO7/Quer%C3%A9taro";
  const GMx = "https://www.prologis.com/sites/corporate/files/images/2017/03/MX_Guadalajara%2C-Mexico-2.jpg";
  const Valle = "https://www.vamonostomexico.com/wp-content/uploads/2021/10/valle-de-bravo-1.jpg";
  const Malinalco = "https://upload.wikimedia.org/wikipedia/commons/d/d6/Templo_de_San_Nicol%C3%A1s%2C_Malinalco_%28Estado_de_M%C3%A9xico%29.JPG";
  const Bacalar = "https://publish.purewow.net/wp-content/uploads/sites/2/2022/08/bacalar-mexico-lake-bacalar.png?fit=728%2C524";
  const MXCity = "https://media.cntraveler.com/photos/5df7d20d70aab000096fdd11/master/w_3000,h_1998,c_limit/Antara-Fashion-Hall_Leila-Ashtari_2019_AntaraFH_CNT_CDMX_DSF4974_FLAT.jpg"
  const Morelia = "https://oasishoteles.com/blog/wp-content/uploads/2021/04/catedral.jpg"
  const Patzcuaro = "https://mediaim.expedia.com/destination/1/3f7ba8bbc7e42f29405aefb75efe8568.jpg"
  const Zirahuen = "https://zirahuen.com/storage/app/uploads/public/609/adf/faa/609adffaad70f151961469.jpg"
  const PuertoRico = "https://assets.editorial.aetnd.com/uploads/2017/09/puerto-rico-gettyimages-824742862.jpg";
  const KansasCity = "https://images.squarespace-cdn.com/content/v1/53dd6676e4b0fedfbc26ea91/1603980793447-J1YD48BV6W3PZ74Q83R5/Kansas_City_Union_Station.jpg?format=750w";
  const Orlando = "https://cdn.britannica.com/07/201607-050-0B5774CB/Orlando-Florida-aerial-cityscape-towards-Eola-Lake.jpg";
  const Phoenix = "https://blog-www.pods.com/wp-content/uploads/2023/02/resized_FI_GettyImages-1288752517_Phoenix-AZ-skyline.jpg";
  // TO VISIT
  const Tulum = "https://www.cancunadventure.net/images/mayanruins/tulum.jpg";
  const Taxco = "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/228000/228360-Taxco.jpg";
  const TMx = "https://static2.tripoto.com/media/filter/tst/img/1233769/TripDocument/1543426351_tepolz_1_1280x628.jpg";
  const KLM = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Kuala_Lumpur_Skyline_at_dusk_1.jpg/1200px-Kuala_Lumpur_Skyline_at_dusk_1.jpg";
  const Botoga = "https://img2.10bestmedia.com/Images/Photos/393641/Bogota-Skyline-2---Credit-ProColombia_54_990x660.jpg";
  const Chiapas = "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/245000/245511-Chiapas.jpg?impolicy=fcrop&w=512&h=288&q=medium";


  const visited = [
    {
      name: "Seattle, WA, USA",
      src: Seattle,
      content: "The beautiful PNW. Able to make the most of the mountains, water and scenery."
    },
    {
      name: "Puerto Vallarta, Jalisco, MX",
      src: PV,
      content: "Tropical paradise. Beautiful, great weather, people and overall location. Very affordable, even for being a tourist trap."
    },
    {
      name: "Houston, TX, USA",
      src: Houston
    },
    {
      name: "Querétaro, Estado de México, MX",
      src: QMx
    }, {
      name: "Guadalajara, Jalisco, MX",
      src: GMx
    }, {
      name: "Valle de Bravo, Jalisco, MX",
      src: Valle
    },
    {
      name: "Malinalco, Estado de México, MX",
      src: Malinalco
    },
    {
      name: "Bacalar, Quintana Roo, MX",
      src: Bacalar
    },
    {
      name: "Tulum, Quintana Roo, MX",
      src: Tulum
    },
    {
      name: "Morelia, Michocan, MX",
      src: Morelia
    },
    {
      name: "Patzcuaro, Michocan, MX",
      src: Patzcuaro
    },
    {
      name: "Zirahuen, Michocan, MX",
      src: Zirahuen
    },
    {
      name: "Kansas City, Missouri, USA",
      src: KansasCity
    },
    {
      name: "Puerto Rico",
      src: PuertoRico
    },
    {
      name: "Phoenix, Arizona, USA",
      src: Phoenix
    },
    {
      name: "Orlando, Florida, USA",
      src: Orlando
    }
  ];
  const toVisit = [
     {
      name: "Tepotzotlán, Estado de México, MX",
      src: TMx
    }, {
      name: "Taxco, Estado de México, MX",
      src: Taxco
    },
    {
      name: "Kuala Lumpur, Malaysia",
      src: KLM
    },
    {
      name: "Bogotá, Columbia",
      src: Botoga
    },
    {
      name: "Chiapas, Oxaca, Columbia",
      src: Chiapas
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
