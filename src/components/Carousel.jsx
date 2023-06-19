import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  const hangGliding = "https://images.pexels.com/photos/8390443/pexels-photo-8390443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const kayaking = "https://images.pexels.com/photos/6942810/pexels-photo-6942810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const mexico = "https://images.pexels.com/photos/12301281/pexels-photo-12301281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const construction = "https://images.pexels.com/photos/14089117/pexels-photo-14089117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const pictureStyle = {
   maxHeight: "600px", width: "100%", objectFit: "cover"
  }
  return (
    <MDBCarousel showIndicators={true} showControls={true} fade={true}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={hangGliding}
        style={pictureStyle}
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={kayaking}
        style={pictureStyle}
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={mexico}
        style={pictureStyle}
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        style={pictureStyle}
        src={construction}
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}