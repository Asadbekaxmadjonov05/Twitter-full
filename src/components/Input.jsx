import React from 'react'


function Input({placeholder, type, name, extraClass, isRequired}) {
  return (
   <input required={isRequired} className={`w-full focus:shadow-lg duration-300 py-[23px] pl-[20px] border-[1px] border-slate-500 text-[18px] text-slate-500 rounded-[6px] ${extraClass}`} name={name} type={type}  placeholder={placeholder}/>
  )
}

export default Input
