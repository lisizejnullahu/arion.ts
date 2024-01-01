// Selection.js
import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Selection = () => {
  const { step, option } = useParams()

  return (
    <div className='main flex flex-col justify-center items-center h-screen'>
      <div className='bg-white p-8 rounded-lg shadow-md'>
        <h2 className='mb-4 text-2xl font-bold'>{`Step ${step}/2`}</h2>
        <p className='text-gray-700'>{`Selected Option: ${option}`}</p>
        <Link to='/' className='text-blue-500 hover:underline block mt-4'>
          Back to Selection
        </Link>
      </div>
    </div>
  )
}

export default Selection
