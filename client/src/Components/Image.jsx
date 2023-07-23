import React from 'react';
import '../CSS/Image.css'

function Images() {
  return (
    <div className='flex flex-row h-[29vh] width image-con '>
         <img src={require("../Assets/devfest.jpg")} alt="" className='width pl-2'/>
         <img src={require("../Assets/solana.jpg")} alt="" className='width'/>
         <img src={require("../Assets/winterlude.jpg")} alt="" className='width'/>
        

         <img src={require("../Assets/wemakedev.png")} alt="" className='width'/>
          <img src={require("../Assets/polygon.png")} alt="" className='width'/>
          <img src={require("../Assets/uhack.jpg")} alt="" className='width'/>
           <img src={require("../Assets/azure.jpg")} alt="" className='width'/>
            <img src={require("../Assets/image1.jpg")} alt="" className='width'/>
            <img src={require("../Assets/image2.jpg")} alt="" className='width'/>
            <img src={require("../Assets/github1.jpg")} alt="" className='width'/>


    </div>
  )
}

export default Images