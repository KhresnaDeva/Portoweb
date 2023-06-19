import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

const work = () => {
  return (
    <div>
        <Hero heading='My Work' message='This is my recent app that i build.' />
        <Portfolio />
    </div>
  )
}

export default work