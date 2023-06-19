import React from 'react'
import Quote from './props/Quote'

function About() {
  return (
    <>
      <div className="container my-5 ">

        <p className='text-center'>
          <strong className='text-left'>About the Bromad:</strong>
          {"  "}
          From investing, business development, personal freedom, and overall experience,
          this unique twist on Tim Ferriss' "4 Hour Work Week" mixed with modern day
          Nomadism, this philosophy allows you to get the most in life. Traveling
          to Latin America, living abroad in Eastern Europe, or roaming the foothills in Asia,
          the goal in life is to be free and to leave your footmark in the family airloom.
        </p>
        <p className='text-center'>
          Sadly, today many people fall into the 9-5 trap. They believe they need to work to 
          have the coolest car, the biggest house, or the most unbelievable life. I know people with 
          8-figures and I know people with $8 and unfortunately the underlying fallacy that lie with
          each is that money somehow defines who we are. I disagree. The experience and mindset of an 
          individual defines who they are. When I started this journey I had less than a $1,000 to my name.
          The entire time I was mentally and morally rich though. I had bright thoughts, knew this wasn't the 
          life I wanted to live, and made extreme sacrifices to build a platform to get on the path I am on.
          Working numerous jobs simultaneously, taking 25 credits a quarter in college, and living off PB&J 
          sandwiches for a year I learned how to concept of money. Money is nothing but a means to an end. To live
          the Bromad lifestyle the main focal points needs to be how money works for you.
        </p>
        <br/>
        <Quote quote={"Go where you are treated best."}
          author={"Andrew Henderson - The Nomad Capitalist"}/>
        <br/>
        <p className='text-center'>
          
        </p>
      </div>
    </>
  )
}

export default About
