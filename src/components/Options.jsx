// Options.js
import React from 'react'
import { Link } from 'react-router-dom'

const Options = () => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-64'>
        {options.map((option, index) => (
          <Link
            key={index}
            to={`/selection/2/${index + 1}`} // Set '2' as the step parameter
            className='block mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded'
          >
            {option}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Options
