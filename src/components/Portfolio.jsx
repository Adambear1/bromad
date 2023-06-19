import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBBtn,
  MDBCardFooter
} from 'mdb-react-ui-kit';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import InfoCard from './props/InfoCard';

import ssk from "../utils/images/ssk.jpeg"
import mollyshopsimage from "../utils/images/mollyshops.jpeg"

export default function Portfolio() {
  const [section, setSection] = React.useState("real estate");
  //PLACEHOLDER LOGOS
  const house_placeholder_logo = "https://cdn.dribbble.com/users/110792/screenshots/17024372/placeholder-listings.png?compress=1&resize=400x300";
  const placeholder_logo = "https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
  // REAL ESTATE
  const e56thHouse = "https://photos.zillowstatic.com/fp/bedaa15c78744ee1634295c27af9c109-uncropped_scaled_within_1536_1152.webp";
  const FedWayHouse = "https://photos.zillowstatic.com/fp/4902d49827dc108024d445ad6dc3130a-uncropped_scaled_within_1536_1152.webp";
  const ParklandHouse = "https://photos.zillowstatic.com/fp/a0cab311bc22d1491298ed24d0869af1-uncropped_scaled_within_1536_1152.webp";
  const KingwoodHouse = "https://photos.harstatic.com/206183029/hr/img-1.jpeg";
  const UPHouse = "https://photos.zillowstatic.com/fp/f674df71a3bcb78b4f0ec73a2850d306-uncropped_scaled_within_1536_1152.webp"
  // BUSINESSES
  const SSK = ssk;
  const BromadConsulting = placeholder_logo;
  const BAC = placeholder_logo;
  const CDLM = placeholder_logo;
  // WEBSITES
  const zipprichCPAS = "https://www.zipprichcpas.com/images/logo.png";
  const zipprichResorts = placeholder_logo;
  const mollyshops = mollyshopsimage;
  const spotlesssquad = "https://static.wixstatic.com/media/343523_22e61fe7ee1d4d2a8c75bc5717d67580.png/v1/fill/w_241,h_335,al_c,lg_1,q_85,enc_auto/343523_22e61fe7ee1d4d2a8c75bc5717d67580.png";
  const wwwoa = "http://www.wwwoa.org/wrestling-icon.jpg";
  const tacticaltrees = "https://images.emojiterra.com/twitter/v14.0/512px/1f332.png"
  const shieldpad = placeholder_logo;
  const _component = {
    "real estate": [
      {
        name: "single family house",
        location: "Tacoma, WA",
        src: e56thHouse,
        year: "Purchased 2021"
      },
      {
        name: "multifamily house",
        location: "Federal Way, WA",
        src: FedWayHouse,
        year: "Purchased 2021"
      },
      {
        name: "single family house",
        location: "Tacoma, WA",
        src: ParklandHouse,
        year: "Purchased 2021"
      },
      {
        name: "single family house",
        location: "Houston, TX",
        src: KingwoodHouse,
        year: "Purchased 2022"
      }, 
      {
        name: "multifamily house",
        location: "University Place, WA",
        src: UPHouse,
        year: "Purchased 2022"
      },
      {
        name: "single family house",
        location: "University Place, WA",
        src: house_placeholder_logo,
        year: "Coming soon..."
      },
      {
        name: "condo",
        location: "Mexico City, MX",
        src: house_placeholder_logo,
        year: "Coming soon..."
      },
      {
        name: "resort",
        location: "Malinalco, MX",
        src: house_placeholder_logo,
        year: "Coming soon..."
      },
    ],
    "businesses": [
      {
        name: "La Chateaus de Malinalco",
        location: "Malinalco, MX",
        year: "2023",
        src: CDLM,
      },
      {
        name: "Seven Sons Kitchen",
        location: "Greater Seattle Area, WA",
        src: SSK,
        year: "2021",
        link: "https://www.tacomasbestbbq.com"
      },
      {
        name: "The Bromad - Consulting",
        location: "International",
        src: BromadConsulting,
        year: "2022",
        link: "http://consulting.thebromad.com/"
      },
      {
        name: "Birgenheier Analytics Consulting (BAC)",
        location: "International",
        src: BAC,
        year: "2022",
      }
    ],
    "websites": [
      {
        name: "Seven Sons Kitchen",
        location: "Greater Seattle Area, WA",
        src: SSK,
        year: "2021",
        link: "https://www.tacomasbestbbq.com"
    },
      {
        name: "Zipprich CPAs",
        location: "International",
        src: zipprichCPAS,
        year: "2022",
    },
    {
      name: "Spotless Squad",
      location: "Houston, TX",
      src: spotlesssquad,
      year: "2022"
    },
    {
      name: "Zipprich Resorts",
      location: "Puerto Vallarta, Jalisco, MX",
      src: zipprichResorts,
      year: "2021"
    },
    {
      name: "Molly Hops",
      location: "Tacoma, WA",
      src: mollyshops,
      year: "2021"
    },
    {
      name: "WWWOA",
      location: "Tacoma, WA",
      src: wwwoa,
      year: "2021"
    },
    {
      name: "Tactical Trees",
      location: "Houston, TX",
      src: tacticaltrees,
      year: "2022"
    },
    {
      name: "Shield Pad",
      location: "Houston, TX",
      src: shieldpad,
      year: "2022"
    },
    {
      name: "Bromad Consulting",
      location: "International",
      src: BromadConsulting,
      year: "2022"
    }
  ],
  "tools": [
    {
      name: "Real Estate Procurement Calculator",
      location: "mobile application",
      src: placeholder_logo,
      year: "$25 p/month or $200 lifetime license"
    },
    {
      name: "Business Procurement Calculator",
      location: "mobile application",
      src: placeholder_logo,
      year: "$25 p/month or $200 lifetime license"
    },
    {
      name: "Cribbage AI Helper",
      location: "mobile application",
      src: placeholder_logo,
      year: "$5 p/month or $50 lifetime license"
    },
    {
      name: "Geocoordinate Distance Tracker API",
      location: "online API",
      src: placeholder_logo,
      year: "-"
    },
    {
      name: "MLB Tic-Tac-Toe Guesser",
      location: "Free Online Guessing Game",
      src: placeholder_logo,
      year: "-"
    },
    {
      name: "Shopify Analytics App",
      location: "Hydrogen application, downloadable for enhanced ecommerce tracking",
      src: placeholder_logo,
      year: "Contact for more information."
    },

  ]
  }
  return (
    <MDBCard className='text-center mt-0'>
      <MDBCardHeader>
        <MDBTabs className='card-header-tabs justify-content-center'>
          <MDBTabsItem>
            <MDBTabsLink active={
                section === "real estate"
              }
              onClick={
                () => setSection("real estate")
            }>
              Real Estate
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink active={
                section === "businesses"
              }
              onClick={
                () => setSection("businesses")
            }>
              Businesses
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink active={
                section === "websites"
              }
              onClick={
                () => setSection("websites")
            }>
              Websites and Consulting
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink active={
                section === "tools"
              }
              onClick={
                () => setSection("tools")
            }>
              Tools
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
      </MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{
          section.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
        }</MDBCardTitle>
        <ResponsiveMasonry columnsCountBreakPoints={
          {
            350: 1,
            750: 2,
            900: 3
          }
        }>
          <Masonry> {
            _component[section].map(({
              location,
              src,
              year,
              name,
              link
            }, index) => {
              return (
                <InfoCard src={src}
                  location={location}
                  year={year}
                  name={name}
                  link={link}
                  key={index}/>
              )
            })
          } </Masonry>
        </ResponsiveMasonry>
      </MDBCardBody>

    </MDBCard>
  );
}
