import React from 'react'
import NavBar from './NavBar'
import Carousel from './Carousel/Carousel';
import LandingContent from './LandingContent'
import user from '../account.json'

const Landing = () => (
  <div className='landing'>
    <NavBar/>
    <Carousel/>
    <LandingContent name={user.account.name}/>
  </div>
);

export default Landing;
