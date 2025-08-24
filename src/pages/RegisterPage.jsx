import React from 'react'
import Register from '../components/register/Register'
import SidePic from '../components/shared/sidePic/SidePic'

const RegisterPage = () => {
  return (
    <div className="grid grid-cols-2 gap-6 min-h-screen bg-secondary-body-color py-14 px-12">
      {/* Left Section - Visual Background */}
      <div className="flex items-center justify-center">
        <SidePic/>
      </div>
      {/* Right Section - UI Panel */}
      <div className="flex items-center">
        <Register/>
      </div>
    </div>
  )
}

export default RegisterPage