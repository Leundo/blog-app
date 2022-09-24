import React from 'react';
import '../styles/HomeNavigator.css';

import HomeProfile from './HomeProfile'


export default function HomeNavigator(props) {
  return (
    <div className='home-navigator'>
        <HomeProfile articles={props.articles}/>
    </div>
  )
}
