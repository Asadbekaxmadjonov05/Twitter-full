import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signin, SignUp } from '../../pages/Login'

function index() {
  return (
    <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
    </Routes>
  )
}

export default index
