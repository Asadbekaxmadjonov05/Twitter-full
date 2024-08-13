import React from 'react'
import { ModeIcon } from '../../components/Icons'
import ProfileImg from "../../assets/images/profile.png"
import BoburImg from "../../assets/images/avatar.png"
import Button from "../../components/Button"
import { Link, Outlet } from 'react-router-dom'

function Profile() {
  return (
    <div className='w-[80%]'>
      <div className='w-[70%] border-r-[1px] border-slate-400 h-[100vh] overflow-y-auto'>
        <div className='bg-white sticky z-40 top-0 flex items-center justify-between p-[20px] border-b-[1px] w-full border-slate-400'>
          <h2 className='font-bold text-[24px]'>Profile</h2>
          <button><ModeIcon /></button>
        </div>
      <div className='h-[280px] relative'>
        <img src={ProfileImg} alt="Profile img" width={910} height={280}/>
      <div className='flex items-end justify-between px-[25px] -translate-y-[80px]'>
        <img src={BoburImg} alt="Avatar-img"  width={150} height={150}/>
        <Button title={"Edit Profile"} width={120} extraStyle={"py-[10px] bg-transparent text-black !border-[2px] !border-slate-500" }/>
      </div>
      </div>
      <ul className='mt-[80px] flex items-center justify-between px-[25px]'> 
        <li>
          <Link  className='text-[18px] font-bold' to={""}>Tweets</Link>
        </li>
        <li>
          <Link  className='text-[18px] font-bold' to={"tweets-replies"}>Tweets & replies</Link>
        </li>  
        <li>
          <Link  className='text-[18px] font-bold' to={"media"}>Media</Link>
        </li>
        <li>
          <Link  className='text-[18px] font-bold' to={"likes"}>Likes</Link>
        </li>
      </ul>
      <Outlet/>
      </div>
      <div className='w-[30%]'>
      </div>
    </div>
  )
}

export default Profile
