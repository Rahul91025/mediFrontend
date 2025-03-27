import React from 'react'
import HomePage from './Home'
import FeaturesSection from './Home1'
import GetStarted from './Home2'
import Chatbot from '../components/Chatbot'

const Main = () => {
  return (
    <div>
      <HomePage/>
      <FeaturesSection/>
      <GetStarted/>
      <Chatbot/>

    </div>
  )
}

export default Main
