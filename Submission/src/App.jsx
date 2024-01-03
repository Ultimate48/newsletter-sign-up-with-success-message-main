import React from 'react'
import LoginPage from './Pages/LoginPage'
import SuccessPage from './Pages/SuccessPage'
import { useState } from 'react'

export default function () {

  const [isValid, setIsValid] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
      </style>
      {isValid ? <SuccessPage email={email}/> : <LoginPage setIsValid={setIsValid} email={email} setEmail={setEmail}/>}
    </div>
  )
}
