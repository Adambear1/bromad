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
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfoCard from './props/InfoCard';

import mollyshops from "../utils/images/portfolio/mollyshops.png";
import homeplaceholder from "../utils/images/portfolio/homeplaceholder.png";
import logoplaceholder from "../utils/images/portfolio/logoplaceholder.png";
import _821e56thst from "../utils/images/portfolio/821e56th.png";
import _3132712thpls from "../utils/images/portfolio/3132712thpls.png";
import _710111thsts from "../utils/images/portfolio/710111thsts.png";
import _valledelmaiz from "../utils/images/portfolio/valledelmaiz.png";
import _3907wildwoodvalleyct from "../utils/images/portfolio/3907wildwoodvalleyct.png";
import _741625thsts from "../utils/images/portfolio/741625thstw.png";
import zipprichcpas from "../utils/images/portfolio/zipprichcpas.png";
import spotlesssquad from "../utils/images/portfolio/spotlesssquad.png";
import wwwoa from "../utils/images/portfolio/wwwoa.png"
import tacticaltrees from "../utils/images/portfolio/tacticaltrees.png";
import innocean from "../utils/images/portfolio/innocean.png";
import certus from "../utils/images/portfolio/certus.png";
import usdc from "../utils/images/portfolio/usdc.png";
import circle from "../utils/images/portfolio/circle.png";
import asc from "../utils/images/portfolio/asc.png";


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
        name: "single family house",
        location: "University Place, WA",
        src: _741625thsts,
        year: "Purchased 2022"
      },
      {
        name: "single family house",
        location: "San Miguel De Allende, MX",
        src: _valledelmaiz,
        year: "Purchased 2023"
      },
      {
        name: "single family house",
        location: "University Place, WA",
        src: homeplaceholder,
        year: "Coming soon..."
      }
    ],
    "businesses": [
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
    "consulting": [
      {
        name: "Circle Financial",
        location: "International",
        src: circle,
        year: "2024",
      },
      {
        name: "USDC",
        location: "International",
        src: usdc,
        year: "2024",
      },
      {
        name: "American Safety Council",
        location: "United States",
        src: asc,
        year: "2023",
      },
      {
        name: "Certus Holdings",
        location: "United States",
        src: certus,
        year: "2023",
      },
      {
        name: "Innocean",
        location: "International",
        src: innocean,
        year: "2024",
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
        year: "-"
      },
      {
        name: "Business Procurement Calculator",
        location: "mobile application",
        src: logoplaceholder,
        year: "-"
      },
      {
        name: "Cribbage AI Helper",
        location: "mobile application",
        src: logoplaceholder,
        year: "-"
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
        location: "Shopify Theme Analytics developer, downloadable for enhanced ecommerce tracking",
        src: logoplaceholder,
        year: "-"
      },
      {
        name: "Edge Analytics",
        location: "Edge analytics, loading all analytical tools serverless via Cloudflare",
        src: logoplaceholder,
        year: "-"
      }
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
              section === "consulting"
            }
              onClick={
                () => setSection("consulting")
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
                  key={index} />
              )
            })
          } </Masonry>
        </ResponsiveMasonry>
      </MDBCardBody>

    </MDBCard>
  );
}
