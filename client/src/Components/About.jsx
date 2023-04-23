import React from 'react'
import "../CSS/About.css"

export default function About() {
  return (
    <>
    <div className='about'>
        <div className="vision-headline">OUR VISION</div>
        <div className="vision">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto numquam vitae aperiam ipsa obcaecati iste soluta officia.
        </div>
        <div className="para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum explicabo quidem sint porro asperiores modi beatae reiciendis iste distinctio ea, rem harum corrupti illum itaque, minus eligendi eius dolorum architecto veritatis, culpa perferendis. Incidunt autem quasi ipsam quam quaerat ab! Provident animi accusantium, necessitatibus nulla porro possimus odio inventore, consequuntur quisquam at esse distinctio ullam temporibus ad dolore officia!</div>
        <div className="para2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui quae eum accusantium aut cupiditate quam, illum iusto reprehenderit recusandae corrupti eos, culpa rem et distinctio animi maiores. Tenetur quasi nihil necessitatibus. Maxime, aut vitae provident inventore, quam architecto quaerat quibusdam asperiores quos odit delectus eos assumenda unde reprehenderit amet, dicta cum perspiciatis illo molestiae earum in quis cumque ex?</div>
    </div>
    <div className="about-photos">
        <img src="https://wp-media-partyslate.imgix.net/2021/01/photo-4e533484-e9fb-4444-9894-b10a2fa15657.jpg?auto=compress%2Cformat&ixlib=php-3.3.1" alt="" id="about-photo-1" />
        <img src="https://partyslate.imgix.net/photos/614328/photo-b7c1902f-20e8-4abd-b3f9-46477b84190a.JPG?ixlib=js-2.3.2&auto=compress%2Cformat&w=400" alt="" id="about-photo-2" />
        <img src="https://www.installation-international.com/wp-content/uploads/2019/01/airstar-neo-e-sports.jpg" alt="" id="about-photo-3" />
    </div>
    </>
  )
}
