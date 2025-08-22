import React from 'react'
import SidePic from '../components/sidePic/SidePic'
import GettingStarted from '../components/gettingStarted/GettingStarted'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-secondary-body-color flex">
      {/* Left Section - Visual Background */}
      <div className="w-1/2 flex items-center justify-center py-8 pl-8">
        <SidePic />
      </div>
      
      {/* Right Section - UI Panel */}
      <div className="w-1/2 flex items-center justify-center py-8 pr-8">
        <GettingStarted />
      </div>
    </div>
  )
}

export default LandingPage