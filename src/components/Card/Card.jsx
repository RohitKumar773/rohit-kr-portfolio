import React from 'react';
import "./Card.css";

const Card = ({image, onBtnClick, projectName, codeLink}) => {
  return (
    <div className='w-[500px] h-[400px] text-white border mt-8 rounded-md float-left hover:scale-110 duration-200 overflow-hidden' 
    id='card' data-aos="zoom-in-down">
        <img src={image} alt="" className='w-full h-[300px] object-cover' id='imge'/>
        <h1 className='w-full h-auto text-center font-bold text-lg mt-2'>{projectName}</h1>

        <button className='w-[200px] ml-[30px] bg-green-700 text-white mt-2 p-1 rounded-lg hover:bg-green-800'>
            <a href={onBtnClick} target='_blank'>Review</a>
        </button>
        
        <button className='w-[200px] ml-[30px] bg-gray-700 text-white mt-2 p-1 rounded-lg hover:bg-gray-600'>
            <a href={codeLink} target='_blank'>Code</a>
        </button>
    </div>
  )
}

export default Card