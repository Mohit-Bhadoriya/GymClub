import React from 'react'
import Header from './Header/Header'
import './Hero.css'
import hero_image from '../assets/hero_image.png';
import hero_image_back from '../assets/hero_image_back.png';
import Heart from "../assets/heart.png";
import Calories from '../assets/calories.png';
import CountUp from 'react-countup';


const Hero = () => {
  return (
    <div className='hero' id='Home'>
        <div className="blur hero-blur"></div>
        <div className='left-h'>
            <Header/>
            {/*the best ad*/}
        <div className='the-best-ad'>
            <div></div>
            <span>the best fitness club in the town</span>
        </div>

        {/*Hero Heading*/}
        <div className='hero-text'>
            <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
            </div>
            <div>
                <span>Ideal Body</span>
            </div>
            <div>
                <span>
                    In here we will help you to shape and build your 
                ideal body and live up your life to fullest
                </span>

            </div>
          </div> 
          {/* figures */}
          <div className='figures'>
            <div>
                <span>+<CountUp  start={1} end={50} duration={8}/></span>
                <span>expert coaches</span>
            </div>
            <div>
                <span>+<CountUp  start={1} end={1898} duration={8}/></span>
                <span>members joined</span>
            </div>
            <div>
                <span>+<CountUp  start={1} end={90} duration={8}/></span>
                <span>fitness programs</span>
            </div>
          </div>

          {/*hero buttons*/}
        <div className='hero-buttons'>
            <button className='btn'>Get Started</button>
            <button className='btn'>Learn More</button>
        </div>

        </div>
        <div className='right-h'>
            <button className='btn'>Join Now</button>

            <div className='heart-rate'>
                <img src={Heart} alt=''/>
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>

            {/* hero images */}
            <img src={hero_image} alt=''className='hero_image'/>
            <img src={hero_image_back} alt='' className='hero_image_back'/>
            {/* calories*/}
            <div className='calories'>
            <img src={Calories} alt=''/>
            <div>
              <span>Calories Burned</span>
              <span>220kcal</span>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Hero