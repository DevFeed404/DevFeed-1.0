import React from 'react'
import "../CSS/Recent_events.css"
import meetUpList from '../utils/MeetupImageList';

export default function RecentEvents() {
    var min = 10;
    var max = 40;

    function random_angle(min, max) {
        var photos = document.getElementsByClassName("meetup-photo");
        console.log(photos);
        for (let i = 0; i < photos.length; i++) {
          // const element = photos[i];          
          // element.style.transform = "rotate("+Math.floor(Math.random() * (max - min + 1)) + min+")";
        }
        // 👇️ get number between min (inclusive) and max (inclusive)
        // return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    setTimeout(random_angle(min, max), 1000);

  return (
    <>
    <div className='recent_events'>
        Recent Events
    </div>
    <div className="recent-meetups-gallery">
    {
      meetUpList.map((meetup,index)=>{
        return <img src={meetup.src} alt=""  className="meetup-photo" id={meetup.id} key={index} />
      })
    }
    </div>
    </>
  )
}
