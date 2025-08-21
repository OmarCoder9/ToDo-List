import React from 'react'

const GettingStarted = () => {
  return (
    <div className="bg-main-body-color rounded-main my-10 mr-10 p-15 w-full h-full shadow-lg flex flex-col justify-center">
      <h1 className="font-main-font text-4xl font-bold text-black text-center mb-8">
        ToDo Py
      </h1>
      <p className="font-main-font text-normal leading-5 text-black mb-10 text-left">
        Stay Organized, Get Things Done: Your Ultimate To-Do List App. 
        A todo list app is a digital task management tool designed to help users organize and prioritize their daily activities and responsibilities.
      </p>
      <button className="bg-btn-gr text-black border-none py-4 px-10 rounded-sec font-main-font text-base font-semibold cursor-pointer w-full mb-5 hover:bg-btn-gr-hover transition-colors duration-300">
        Get Started
      </button>
      <div className="font-main-font text-sm text-black text-center">
        Already have an account? <a href="#signin" className="text-btn-gr no-underline font-semibold hover:underline">Sign In</a>
      </div>
    </div>
  )
}

export default GettingStarted