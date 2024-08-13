import React from 'react';

function Button({ title, type, extraStyle, width, onClick }) {  
  return (
    <button
    onClick={onClick}
      style={{width:`${width}px`}}   
      type={type} 
      className={`w-full py-[18px] font-semibold border-none bg-[#1DA1F2] text-white rounded-[76px] text-[18px] ${extraStyle ? extraStyle : "border-none"}`}>
      {title}
    </button>
  );
}

export default Button;
