import React from 'react';
import {
  MDBCarousel, MDBCarouselItem
} from 'mdb-react-ui-kit';

import hangGliding from "../utils/all_other_photos/hangglider.png";
import kayaking from "../utils/all_other_photos/kayak.png";
import mexico from "../utils/all_other_photos/mexico.png";
import construction from "../utils/all_other_photos/construction.png";


export default function Carousel() {
  const items = [
    {
      "src": hangGliding,
      label_text: "Live like today was your last day.",
      description_text: "Be adventurous, try new things, take challenges. And most of all, live life."
    },
    {
      "src": kayaking,
      label_text: "When the cows grow wings...",
      description_text: "Governments have been milking producing citizens for decades. When the milk cow grows wings and learns to fly, the government is in trouble, and the cow becomes fully autonomous."
    },
    {
      "src": mexico,
      label_text: "Find the diamond in the rough",
      description_text: "Discovering the next big thing is easy. You just need to keep your eyes open and listen to your intuition. No one really knows how masses will operate. But instead based on our intuition and our likings, we can figure out what other rational people would like when that opportunity presents itself to them."
    },
    {
      "src": construction,
      label_text: "Zig and Zag",
      description_text: "When the masses zig, you need to zag. Stay ahead of the curve and always be one move ahead of the masses to capitalize on the opportunity yet to be revealed."
    }
  ]
  return (
    <MDBCarousel showIndicators={true} showControls={true} fade={true}>
      {
        items.map(({ src, label_text, description_text }, index) => < MDBCarouselItem
          className='w-100 d-block'
          itemId={index}
          key={index}
          src={src}
          style={{ maxHeight: "600px", width: "100%", objectFit: "cover" }}
          alt={"..."}
        >
          <h5>{label_text}</h5>
          <p>{description_text}</p>
        </MDBCarouselItem>)
      }

    </MDBCarousel >
  );
}