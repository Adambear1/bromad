import React from 'react'
import Quote from './props/Quote'

function About() {
  return (
    <>
      <div className="container my-5 ">

        <p className='text-center'>
          <strong className='text-left'>About the Bromad:</strong>
          {"  "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat temporibus enim eveniet, corporis sapiente, maxime hic fugit totam similique quae quisquam? Placeat sequi possimus ipsa consequatur quidem consectetur ut ipsam.
                                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat temporibus enim eveniet, corporis sapiente, maxime hic fugit totam similique quae quisquam? Placeat sequi possimus ipsa consequatur quidem consectetur ut ipsam.
                                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat temporibus enim eveniet, corporis sapiente, maxime hic fugit totam similique quae quisquam? Placeat sequi possimus ipsa consequatur quidem consectetur ut ipsam.
        </p>
        <p className='text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat temporibus enim eveniet, corporis sapiente, maxime hic fugit totam similique quae quisquam? Placeat sequi possimus ipsa consequatur quidem consectetur ut ipsam.
        </p>
        <br/>
        <Quote quote={"a random motivational quote about something."}
          author={"Yes A. Sir"}/>
        <br/>
        <p className='text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsam architecto nam repellat cupiditate natus vero obcaecati, itaque recusandae quaerat quia quibusdam, fuga atque dolor odio, quasi sint eius eaque!
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsam architecto nam repellat cupiditate natus vero obcaecati, itaque recusandae quaerat quia quibusdam, fuga atque dolor odio, quasi sint eius eaque!
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsam architecto nam repellat cupiditate natus vero obcaecati, itaque recusandae quaerat quia quibusdam, fuga atque dolor odio, quasi sint eius eaque!
        </p>
      </div>
    </>
  )
}

export default About
