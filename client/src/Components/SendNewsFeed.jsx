//sendNewsFeed
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const SendNewsFeed = () => {
  const baseurl = "https://dev-feed-1-0-ka8g.vercel.app/api";
const [title, setTitle] = useState("")
const [message, setMessage] = useState("")

 const navigate= useNavigate();
  // window.location(baseurl);

const handleSend=(e)=>{
  e.preventDefault();
  axios.post( baseurl+"/send", {
    title: title,
    message: message,
  
  }).then((Response) => {
    
    if (Response.status === 200) {
      alert("news sent to all subscribers");
      console.log("success");
      navigate('/')
    }
    
  }).catch((err)=>{
    console.log("error occured");
  })
   
  console.log("clecked send");
}
return (
<>
<Navbar/>
<div className='flex items-center justify-center p-36'>
<form className="h-screen w-2/5">
  <h1 className='text-3xl m-6 font-medium'>DevFeed Admin</h1>
            <div className="space-y-5">
              <div>
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Title{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Message{' '}
                  </label>
                
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Message"
                    value={message}
                    onChange={(e)=>setMessage (e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={handleSend}
                  className="inline-flex items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
</div>
<Footer/>

</> 
 )
}

export default SendNewsFeed