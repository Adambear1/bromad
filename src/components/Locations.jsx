import React from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import Card from './props/Card';

function Locations() { // VISITED
  const Seattle = "https://scenicusa.net/images/JL09SeattleSkylinePD.jpg";
  const PV = "https://destinationlesstravel.com/wp-content/uploads/2022/04/Puerto-Vallarta-from-above-at-sunset.jpg.webp";
  const Houston = "https://media.timeout.com/images/105124790/image.jpg";
  const QMx = "https://images.squarespace-cdn.com/content/v1/53c0344ce4b0fd8b5108ec18/1557895592808-JR5EYSCBN45Z4DOH5UO7/Quer%C3%A9taro";
  const GMx = "https://www.prologis.com/sites/corporate/files/images/2017/03/MX_Guadalajara%2C-Mexico-2.jpg";
  const Valle = "https://www.vamonostomexico.com/wp-content/uploads/2021/10/valle-de-bravo-1.jpg"
  // TO VISIT
  const Tulum = "https://www.cancunadventure.net/images/mayanruins/tulum.jpg";
  const Taxco = "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/228000/228360-Taxco.jpg";
  const TMx = "https://static2.tripoto.com/media/filter/tst/img/1233769/TripDocument/1543426351_tepolz_1_1280x628.jpg"
  const visited = [
    {
      name: "Seattle",
      src: Seattle,
      content: "The beautiful PNW. Able to make the most of the mountains, water and scenery."
    },
    {
      name: "Puerto Vallarta, Jalisco, MX",
      src: PV,
      content: "Tropical paradise. Beautiful, great weather, people and overall location. Very affordable, even for being a tourist trap."
    },
    {
      name: "Houston, TX",
      src: Houston,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis vel consequuntur dignissimos consequatur voluptatem minima ex. Rerum consequatur praesentium nam amet in, velit repellendus sit nostrum sunt, dolor dignissimos dicta."
    },
    {
      name: "Querétaro, MX",
      src: QMx,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis vel consequuntur dignissimos consequatur voluptatem minima ex. Rerum consequatur praesentium nam amet in, velit repellendus sit nostrum sunt, dolor dignissimos dicta."
    }, {
      name: "Guadalajara, Jalisco, MX",
      src: GMx,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis vel consequuntur dignissimos consequatur voluptatem minima ex. Rerum consequatur praesentium nam amet in, velit repellendus sit nostrum sunt, dolor dignissimos dicta."
    }, {
      name: "Valle de Bravo, Jalisco, MX",
      src: Valle,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis vel consequuntur dignissimos consequatur voluptatem minima ex. Rerum consequatur praesentium nam amet in, velit repellendus sit nostrum sunt, dolor dignissimos dicta."
    }
  ];
  const toVisit = [
    {
      name: "Tulum, Mx",
      src: Tulum,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis vel consequuntur dignissimos consequatur voluptatem minima ex. Rerum consequatur praesentium nam amet in, velit repellendus sit nostrum sunt, dolor dignissimos dicta."
    }, {
      name: "Tepotzotlán, Mx",
      src: TMx,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis vel consequuntur dignissimos consequatur voluptatem minima ex. Rerum consequatur praesentium nam amet in, velit repellendus sit nostrum sunt, dolor dignissimos dicta."
    }, {
      name: "Taxco, Mx",
      src: Taxco,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis vel consequuntur dignissimos consequatur voluptatem minima ex. Rerum consequatur praesentium nam amet in, velit repellendus sit nostrum sunt, dolor dignissimos dicta."
    },
  ]
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="h1">Locations Visit For Extended Periods</div>
          <ResponsiveMasonry columnsCountBreakPoints={
            {
              350: 1,
              750: 3,
            }
          }>
            <Masonry> {
              visited.map(({
                name,
                src,
                content
              }, index) => <Card name={name}
                src={src}
                content={content}
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
              750: 3,
            }
          }>
            <Masonry> {
              toVisit.map(({
                name,
                src,
                content
              }, index) => <Card name={name}
                src={src}
                content={content}
                key={index}
                className="p-1 m-1"/>)
            } </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  )
}

export default Locations
