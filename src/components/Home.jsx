import React from 'react'
import Card from './props/Card'
import Modal from "./props/Modal"

function Home() {
  const [show, setShow] = React.useState(false);
  const [index, setIndex] = React.useState();
  const desertSunset = "https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg?auto=compress&cs=tinysrgb&w=1600";
  const wine = "https://images.pexels.com/photos/39351/purple-grapes-vineyard-napa-valley-napa-vineyard-39351.jpeg?auto=compress&cs=tinysrgb&w=1600";
  const mountains = "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1600";
  const coding = "https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1600";
  const ocean = "https://images.pexels.com/photos/9499007/pexels-photo-9499007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const building = "https://images.pexels.com/photos/3700245/pexels-photo-3700245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const jungle = "https://images.pexels.com/photos/12316620/pexels-photo-12316620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const coffee = "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

  const cards = [
    {
      src: desertSunset,
      content: "Travel",
      info: "The Bromad believes in traveling the world which propels one in life to get out of one's comfort zone, explore new places, create meaningful experiences and to build and invest to help those around you. This is the core pillar of the Bromad mentality."
    },
    {
      src: wine,
      content: "Experience"
    },
    {
      src: mountains,
      content: "Explore"
    },
    {
      src: coding,
      content: "Create"
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
          }, i) => <div className="col-12 col-sm-3 mt-1 p-1">
            <Card src={src}
              content={content}
              key={i}
              cta={
                () => {
                  setIndex(i);
                  setShow(!show);
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
            setShow={setShow}/>
          }
        </div>
      </div>
    </>
  )
}

export default Home
