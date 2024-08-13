import React  from 'react'

function CustomModal({isOpenModal, setIsOpenModal, children }) {
    function handaleCloseClick(e){
        if(e.target.id == "wrapper")setIsOpenModal(false)
    }
    return (
    <div onClick={handaleCloseClick} className={`fixed top-0 bottom-0 z-50 right-0 left-0 backdrop-blur-[5px] ${isOpenModal ? "scale-100" : "scale-0" }`} id='wrapper'>
        <div className='absolute w-[800px] h-[400px] bg-slate-200  shadow-lg right-[400px]  top-0 m-auto bottom-0 p-5 rounded-lg '>{children}</div>
    </div>
  )
}

export default CustomModal
