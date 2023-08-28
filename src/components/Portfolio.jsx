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

import ssk from "../utils/images/portfolio/ssk.png"
import mollyshops from "../utils/images/portfolio/mollyshops.png"
import homeplaceholder from "../utils/images/portfolio/homeplaceholder.png"
import logoplaceholder from "../utils/images/portfolio/logoplaceholder.png"
import _821e56thst from "../utils/images/portfolio/821e56th.png";
import _3132712thpls from "../utils/images/portfolio/3132712thpls.png"
import _710111thsts from "../utils/images/portfolio/710111thsts.png"
import _3907wildwoodvalleyct from "../utils/images/portfolio/3907wildwoodvalleyct.png"
import _741625thsts from "../utils/images/portfolio/741625thstw.png";
import zipprichcpas from "../utils/images/portfolio/zipprichcpas.png"
import spotlesssquad from "../utils/images/portfolio/spotlesssquad.png"
import wwwoa from "../utils/images/portfolio/wwwoa.png"
import tacticaltrees from "../utils/images/portfolio/tacticaltrees.png"

export default function Portfolio() {
  const [section, setSection] = React.useState("real estate");
  // WEBSITES
  const shieldpad = logoplaceholder;
  const _component = {
    "real estate": [
      {
        name: "single family house",
        location: "Tacoma, WA",
        src: _821e56thst,
        year: "Purchased 2021"
      },
      {
        name: "multifamily house",
        location: "Federal Way, WA",
        src: _3132712thpls,
        year: "Purchased 2021"
      },
      {
        name: "single family house",
        location: "Tacoma, WA",
        src: _710111thsts,
        year: "Purchased 2021"
      },
      {
        name: "single family house",
        location: "Houston, TX",
        src: _3907wildwoodvalleyct,
        year: "Purchased 2022"
      }, 
      {
        name: "multifamily house",
        location: "University Place, WA",
        src: _741625thsts,
        year: "Purchased 2022"
      },
      {
        name: "single family house",
        location: "University Place, WA",
        src: homeplaceholder,
        year: "Coming soon..."
      },
      {
        name: "condo",
        location: "Mexico City, MX",
        src: homeplaceholder,
        year: "Coming soon..."
      },
      {
        name: "resort",
        location: "Malinalco, MX",
        src: homeplaceholder,
        year: "Coming soon..."
      },
    ],
    "businesses": [
      {
        name: "Seven Sons Kitchen",
        location: "Greater Seattle Area, WA",
        src: ssk,
        year: "2021",
        link: "https://www.tacomasbestbbq.com"
      },
      {
        name: "The Bromad - Consulting",
        location: "International",
        src: logoplaceholder,
        year: "2022",
        link: "http://consulting.thebromad.com/"
      },
      {
        name: "Birgenheier Analytics Consulting (BAC)",
        location: "International",
        src: logoplaceholder,
        year: "2022",
      }
    ],
    "websites": [
      {
        name: "Seven Sons Kitchen",
        location: "Greater Seattle Area, WA",
        src: ssk,
        year: "2021",
        link: "https://www.tacomasbestbbq.com"
    },
      {
        name: "Zipprich CPAs",
        location: "International",
        src: zipprichcpas,
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
      src: logoplaceholder,
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
      src: logoplaceholder,
      year: "2022"
    }
  ],
  "tools": [
    {
      name: "Real Estate Procurement Calculator",
      location: "mobile application",
      src: logoplaceholder,
      year: "$25 p/month or $200 lifetime license"
    },
    {
      name: "Business Procurement Calculator",
      location: "mobile application",
      src: logoplaceholder,
      year: "$25 p/month or $200 lifetime license"
    },
    {
      name: "Cribbage AI Helper",
      location: "mobile application",
      src: logoplaceholder,
      year: "$5 p/month or $50 lifetime license"
    },
    {
      name: "Geocoordinate Distance Tracker API",
      location: "online API",
      src: logoplaceholder,
      year: "-"
    },
    {
      name: "MLB Tic-Tac-Toe Guesser",
      location: "Free Online Guessing Game",
      src: logoplaceholder,
      year: "-"
    },
    {
      name: "Shopify Analytics App",
      location: "Hydrogen application, downloadable for enhanced ecommerce tracking",
      src: logoplaceholder,
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
