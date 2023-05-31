import React from 'react';
import '../CSS/Image.css'
import imageList from '../utils/imagesComponentList';

function Images() {
  return (
    <div className='flex flex-row h-[29vh] width image-con '>
     {
      imageList.map((images, index)=>{
          return <img src={require(`../Assets/${images.imageName}`)} alt="" className={index === 0? "width pl-2 image-scroll": "width image-scroll"} key={index}/>
      })
     }

    </div>
  )
}

export default Images
