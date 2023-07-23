import React from 'react'
import "../CSS/About.css"

export default function About() {
  return (
    <>
      {/* <div className='about'>
        <div className="vision-headline">OUR VISION</div>
        <div className="vision">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto numquam vitae aperiam ipsa obcaecati iste soluta officia.
        </div>
        <div className="para1">
          <div id='para-1-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum explicabo quidem sint porro asperiores modi beatae reiciendis iste distinctio ea, rem harum corrupti illum itaque, minus eligendi eius dolorum architecto veritatis, culpa perferendis. Incidunt autem quasi ipsam quam quaerat ab! Provident animi accusantium, necessitatibus nulla porro possimus odio inventore, consequuntur quisquam at esse distinctio ullam temporibus ad dolore officia!
          </div>
          <div style={{"display": "flex"}}>
            {/* <img id='about-photo-1' src="https://wp-media-partyslate.imgix.net/2021/01/photo-4e533484-e9fb-4444-9894-b10a2fa15657.jpg?auto=compress%2Cformat&ixlib=php-3.3.1" alt="" /> */}
          {/* </div>
          </div>
        <div className="para2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui quae eum accusantium aut cupiditate quam, illum iusto reprehenderit recusandae corrupti eos, culpa rem et distinctio animi maiores. Tenetur quasi nihil necessitatibus. Maxime, aut vitae provident inventore, quam architecto quaerat quibusdam asperiores quos odit delectus eos assumenda unde reprehenderit amet, dicta cum perspiciatis illo molestiae earum in quis cumque ex?
          {/* <img src="https://partyslate.imgix.net/photos/614328/photo-b7c1902f-20e8-4abd-b3f9-46477b84190a.JPG?ixlib=js-2.3.2&auto=compress%2Cformat&w=400" alt="" id="about-photo-2" /> */}
        {/* </div> */}
    {/* </div>
    <div className="about-photos">
        <img src="https://wp-media-partyslate.imgix.net/2021/01/photo-4e533484-e9fb-4444-9894-b10a2fa15657.jpg?auto=compress%2Cformat&ixlib=php-3.3.1" alt="" id="about-photo-1" />
        <img src="https://partyslate.imgix.net/photos/614328/photo-b7c1902f-20e8-4abd-b3f9-46477b84190a.JPG?ixlib=js-2.3.2&auto=compress%2Cformat&w=400" alt="" id="about-photo-2" />
        <img src="https://www.installation-international.com/wp-content/uploads/2019/01/airstar-neo-e-sports.jpg" alt="" id="about-photo-3" />
    </div>  */}

      <div className='h-fit flex flex-row mlg:flex-col w-screen background mh-[2vh] pb-[13vh] pt-[6vh] ' id='about'>
        <div className='w-[50%] h-[90%] xxlg:w-[40%] mt-[12vh] mlg:mt-[6vh] mlg:mb-[5vh] mlg:ml-[1vw] lg:w-[35%] lg:pt-[4vh] mlg:w-[100%] flex flex-row justify-center ml-[2vw] '>
          <img src={require("../Assets/meetup1.png")} data-aos-once = "true" data-aos = "fade-up" alt="" className='about-image ' />


        </div>
        <div className='flex flex-col items-center xxlg:w-[60%] lg:w-[65%] w-[63%] mlg:w-[100%] pr-[4vw] about-con'>
          <h1 className=' about-title mt-[9vh] xlg:mt-[2vh]  sm:text-4xl xsm:text-3xl text-5xl font-mono items-center font-bold text-black'>Nice to meet you</h1>
          <p className='text-xl  xsm:text-sms sm:text-lg mt-[3vh] ml-[4vw] mr-2 text-[#0D2F3F]  font-medium font-sans sans-serif'>With <span className='text-[#1c145f] comme'>DevFeed</span>, you'll never miss out on an opportunity to not only expand your skills but also connect with other tech professionals in your community. Our newsletter is your personal roadmap to navigating the tech scene, providing you with exclusive <span >updates on the latest events, speakers, and topics that matter most to you.</span></p>
          <ul class="list-disc about-pts ml-[1.2vw]  pt-3 text-xl sm:text-lg xsm:text-sms text-[#0D2F3F] font-medium ">
  <li className='pt-3  ml-[4vw] '>Centralized location for subscribers to receive all the relevant information about tech events happening in their city</li>
  <li className='pt-3  ml-[4vw]'>Attending tech events can provide valuable networking opportunities for professionals and enthusiasts in the industry</li>
  <li className='pt-3  ml-[4vw]'>All the relevant information you need in one place, instead of having to search for events individually.</li>
  {/* <li className='pt-3  ml-[4vw]'>Now this is a story all about how, my life got flipped-turned upside down</li> */}
  

</ul>






        </div>

      </div>
    </>
  )
}

// centralized location for subscribers to receive all the relevant information about tech events happening in their city