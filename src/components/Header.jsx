// Header.js
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const [step, setStep] = useState('1')

  useEffect(() => {
    const match = location.pathname.match(/\/selection\/(\d+)\/\d+/)
    if (match) {
      setStep(match[1])
    } else {
      setStep('1')
    }
  }, [location.pathname])

  return (
    <header className='flex justify-center items-center'>
      <h2>{step === '2' ? 'Step 2/2' : `Step ${step}/2`}</h2>
    </header>
  )
}

export default Header
