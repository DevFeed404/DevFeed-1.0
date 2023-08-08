import React, { useState , useEffect } from 'react'
import {getHackthonsData} from '../api/index'
import Navbar from './Navbar'
import '../CSS/Event.css'
function Event() {

  const[data,setData]=useState([]);
  useEffect(() => {
    getHackthonsData().then((data) => {
      console.log(data.data.data);
      setData(data.data.data);
    });
  }, [])
  return (
    <>
    <Navbar/>
      <div className="heading">
        <h1>UPCOMING EVENTS</h1>
        <p className='lead'>Find, compete, and earn points at the largest, most diverse hacker events in the world.</p>
      </div>
      <div className="event-card grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
        {data?.map((item) =>(
          <div className="event-wrapper" key={item.id}>
          <a href={item.mainLink}>
            <div className="inner">
                <div className="image-wrap">
                  <img src={item.imageLink}/>
                </div>
                <div className="event-logo">
                  <img src={item.logoLink} alt="" />
                </div>
                <div className="content">
                  <h3 className="event-name">{item.name}</h3>
                  <p className="event-date">{item.eventDate}</p>
                  <meta itemProp='startDate' content={item.startDate}/>
                  <meta itemProp='endDate' content={item.endDate}/>
                  <div className="event-location">
                    <span itemProp='city'>{item.city}</span>
                    ,
                    <span itemProp='state'> {item.state}</span>
                  </div>
                  <div className="event-notes">
                    <span>{item.eventNotes}</span>
                  </div>
                </div>
            </div>
          </a>
        </div>
        ))}
        

      </div>
      
      
    </>
  )
}

export default Event