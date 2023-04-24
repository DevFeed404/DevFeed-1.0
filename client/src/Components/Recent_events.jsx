import React from 'react'
import "../CSS/Recent_events.css"

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
        <img src="https://secure.meetupstatic.com/photos/event/c/8/e/2/highres_472311426.jpeg" alt="" className='meetup-photo' id='meetup-photo-1' />
        <img src="https://substackcdn.com/image/fetch/h_600,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fpbs.substack.com%2Fmedia%2FFSzbIv-VEAABDP6.jpg" className='meetup-photo' alt="" id='meetup-photo-2' />
        {/* <img src="https://secure.meetupstatic.com/photos/event/d/a/d/3/600_468476019.jpeg" alt="" className='meetup-photo' id='meetup-photo-3'/> */}
        <img src="https://assets.telegraphindia.com/telegraph/2022/Nov/1668743799_untitled-design-2022-11-18t092905-972.jpg" alt="" className='meetup-photo' id='meetup-photo-3' />
        <img src="https://www.codemotion.com/magazine/wp-content/uploads/2020/04/35344608_1932760713412894_8299069717268660224_o-1024x683.jpg" alt="" className='meetup-photo' id='meetup-photo-4' />
    </div>
    </>
  )
}
