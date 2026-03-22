import React from 'react';
import "./Tech.css";

const Techs = ({image, techTitle}) => {
  return (
    <>
        <div className='w-[400px] h-[80px] bg-black float-left ml-7 mt-5 rounded-lg hover:bg-zinc-800' 
         id='skill_box' data-aos="zoom-in-down">
            <div className='w-[100px] h-full float-left'>
                <img src={image} alt="" className='w-[35%] h-[45%] object-cover m-[25%]'/>
            </div>
            <div className='w-[300px] h-full bg-slat-800 float-left' id='skill_name'>
                <h1 className='text-white leading-[80px]'>{techTitle}</h1>
            </div>
        </div>
    </>
  )
}

export default Techs