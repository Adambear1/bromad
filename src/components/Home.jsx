import React from 'react'
import Card from './props/Card'
import Modal from "./props/Modal"

import desertSunset from "../utils/all_other_photos/desert.png";
import mountains from "../utils/all_other_photos/mountains.png";
import wine from "../utils/all_other_photos/wine.png";
import coding from "../utils/all_other_photos/coding.png";
import ocean from "../utils/all_other_photos/ocean.png";
import building from "../utils/all_other_photos/building.png";
import jungle from "../utils/all_other_photos/jungle.png";
import coffee from "../utils/all_other_photos/coffee.png";

function Home() {
  const [show, setShow] = React.useState(false);
  const [index, setIndex] = React.useState();
  const cards = [
    {
      src: desertSunset,
      content: "Travel",
      info: `The Bromad believes in traveling the world which propels one in life to get out of one's comfort zone, explore new places, create meaningful experiences and to build and invest to help those around you. This is the core pillar of the Bromad mentality. All succeeding factors are a faction of the traveling attribute. Experience is garnered when one travels. Exploring is means of traveling. Creating and building
      is done best as the end of traveling. Tasting is the emotion that comes from traveling: new food, new cultures, new experience. Investing is maximized from traveling.`
    },
    {
      src: wine,
      content: "Experience",
      info: "Experience is the propellant in life. It's what helps take you to the next level both mentally and physically. It is the true satisfaction one gets from it in turn for being on the right path. Living the Bromad lifestyle means that you'll always garner new experiences. It means you'll be living out of your comfort zone and continually being in shock of 'Holy Sxxt! I can't believe this is actually happening.'"
    },
    {
      src: mountains,
      content: "Explore",
      info:`Exploring is the means to experience, both literally and figuratively. One thing the Bromad philosophy preaches is to always push yourself and try new things. 'Pushing' oneself isn't to be conflated with working hard and doing extreme things. In fact, quite the opposite. 'Pushing' means to mentally, spiritually, and emotionally explore the confines of yourself and take it a step further. An example would be with daily journaling.
      I try to journal every day, but in reality I journal 3-5 times a week. During these sessions I explore what I am capable of and what I can do right now to take the next steps in the journey. These mental, spiritual, and emotional sessions help me put the next pieces to the puzzle when finding out what I am capable of. I am exploring the future to mold with the present.`
    },
    {
      src: coding,
      content: "Create",
      info: `To be a Bromad you need to have the ability to create. Create opportunity, create jobs, create a lifestyle. If you reflect and acknowledge you have this power, but haven't actually created anything worth mentioning yet. That is fine. This social dichotomy we're born in the "fortunate" United States and western society is one of the biggest and most crippling fallacies we could face.
      Here, we're told that we're either unfortunately part of the 99% and we'll never be anything. Or that we do well enough and that we're entitled assholes who needs the give everything back to society.`
    }, {
      src: ocean,
      content: "Build"
    }, {
      src: coffee,
      content: "Taste"
    }, {
      src: jungle,
      content: "Navigate"
    }, {
      src: building,
      content: "Invest"
    },
  ]
  return (
    <>
      <div className='container mt-3'>
        <div className="row">
          {
          cards.map(({
            src,
            content,
            info
          }, index) => <div className="col-12 col-sm-3 mt-1 p-1" key={index}>
            <Card src={src}
              content={content}
              key={index}
              cta={
                () => {
                  // setIndex(i);
                  // setShow(!show);
                }
              }/>
          </div>)
        }
          {show && <Modal title={
              cards[index].content
            }
            info={
              cards[index].info
            }
            show={show}
            setShow={setShow}
            key={Math.random()}/>
          }
        </div>
      </div>
    </>
  )
}

export default Home
