import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Loading from '../../assets/images/loading.png'
import {Tweets, TweetsReplies, Media, Likes} from "../../pages/Dashboard/ProfileItems"

const Home = lazy(() => new Promise(resolve => {
  return setTimeout(() => resolve(import("../../pages/Dashboard/Home")), 1500)
}))
const Profile = lazy(() => new Promise(resolve => {
  return setTimeout(() => resolve(import("../../pages/Dashboard/Profile")), 1500)
}))

function index() {
  return ( 
    <div className='container mx-auto px-10 flex justify-between'>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <Suspense fallback={
            <div className='flex items-start justify-start mr-[200px] p-[300px]'>
              <img src={Loading} alt="Loading..." width={150} height={150} />
            </div>
          }>
            <Home/>
          </Suspense>
        }/>
        <Route path='/profileFill' element={<Suspense fallback={<div  className='flex items-start justify-start mr-[200px] p-[300px]'><img src={Loading} alt="Loading..." width={100} height={100} /></div>}>
        <Profile/></Suspense> }>
        <Route path='/profileFill' index element={<Tweets/>}/>
        <Route path='tweets-replies' element={<TweetsReplies/>}/>
        <Route path='media' element={<Media/>}/>
        <Route path='likes' element={<Likes/>}/>
        </Route>
        </Routes>
    </div>
  )
}

export default index
