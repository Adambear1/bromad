import React from 'react'
import Quote from './props/Quote'

function About() {
  return (
    <>
      <div className="container my-5 ">

        <p className='text-center'>
          <strong className='text-left'>About the Bromad:</strong>{"  "}
          Invest internationally. The United States is a legacy brand that is dying. One of the biggest market weaknesses today is the international market. The United States is bloated and overexpanded,
          while there are many countries that are under utilized that will see exponential returns in the years to come. Sign up <a href='http://consulting.thebromad.com/' target="_blank" rel="noopener noreferrer">here</a> or visit my <a href='/blog'>blog</a> to learn more.
        </p>
        <br/>
        <Quote quote={"Go where you are treated best."}
          author={"Andrew Henderson - The Nomad Capitalist"}/>
        <br/>
        <p className='text-center'>
          There are a few maxims that I live by that perfectly sum who I am: 
          <li><i>Diversify macroly, Focus microly.</i> This simply means on a large scale to diversify as much as possible. For me, I work many jobs, 
          invest in many businesses, and start in many side projects. I am very diversified. However, for each individual facet, I hone in on and assure that everything
          is done correctly. One thing I learned early on is that it sounds <i>cool</i> to be doing a lot of things, but if you don't focus on what you're 
          doing, its going to hit you right in the face. 
          </li>
          <li><i>Invest in yourself.</i> The greatest returns I have seen is when I invested <i>100%</i> of everything into my self. Rather if thats 
          by learning new crafts, starting businesses, or investing in real estate. If you have $1k, $10k, or $100k laying around. That money needs to 
          go towards yourself ever before you invest it in stocks, other businesses, or anything you don't have control over.
          </li>
          <li><i>Always learn.</i> Through investing in yourself you will always learn. I advise to learn through action. For me, as I travel, always explore and meet new people
          I am always learning. Though I might not always learn new formulas 
          </li>
        </p>
        <p className='text-center'>
          
        </p>
      </div>
    </>
  )
}

export default About
