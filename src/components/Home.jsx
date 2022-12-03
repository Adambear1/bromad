import React from 'react'
import Card from './props/Card'

function Home() {
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
      content: "lorem ipsum"
    }, {
      src: wine,
      content: "lorem ipsum"
    }, {
      src: mountains,
      content: "lorem ipsum"
    }, 
    {
      src: coding,
      content: "lorem ipsum"
    },
    {
      src: ocean,
      content: "lorem ipsum"
    },
    {
      src: coffee,
      content: "lorem ipsum"
    },
    {
      src: jungle,
      content: "lorem ipsum"
    },
    {
      src: building,
      content: "lorem ipsum"
    },
  ]
  return (
    <>
      <div className='container mt-3'>
        <div className="row">
          {
          cards.map(({
            src,
            content
          }, index) => <div className="col-12 col-sm-3 mt-1 p-1">
            <Card src={src}
              content={content}
              key={index}/>
          </div>)
        } </div>
      </div>
    </>
  )
}

export default Home
