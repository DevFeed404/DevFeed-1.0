import React,{useState,useEffect} from 'react'
import "../CSS/Subscribe.css"
import axios from 'axios';
import Translation from './Translate/Subscribe.json'

export default function Subscribe({language}) {
  const baseurl = "https://dev-feedmain.vercel.app/api";//baseurl for posting
  const [content, setContent] = useState(Translation.english);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [organisation, setorganisation] = useState("");
  useEffect(() => {
    if (language === "english") {
      setContent(Translation.english);
    } else if (language === "hindi") {
      setContent(Translation.hindi);
    }
  }, [language]);
  //function to post data in backend
  const subscribe = () => {
    axios.post( baseurl+"/subscribe", {
      name: name,
      email: email,
      organization: organisation
    }).then((Response) => {
      
      if (Response.status = 200) {
        alert(Response.data.message);

        console.log("success");
      }
     
      console.log(Response);
      // window.location(baseurl);
    })

  }
  return (
    <div className='subscribe-con ' id='subscribe-con' data-aos = "slide-up" data-aos-once = "true">
      <div className="subs-doodle lg:hidden">
        <img src={require("../Assets/subs-doodle.png")} alt="" />
      </div>

      <div className="subscribe-body ">

        <div className="subscribe-heading ">
          <h2 className='poppins'>{content.h2}</h2>
        </div>

        <div className="hr"></div>

        <div className="form-subheading comme">
          <h3>{content.h3}</h3>
        </div>

        <form className="subscribe-form comme" method='POST' action = "localhost:3000">
          <h3 id="person-name-heading">{content.form.f1.h3}</h3>
          <input type="text" name="person-name" id="person-name" className='text-[0D2F3F]' placeholder={content.form.f1.placeholder} onChange={(e) => {

            setname(e.target.value);

          }} />

          <h3 id="person-email-heading">{content.form.f2.h3}</h3>
          <input type="email" name="person-email" id="person-email" className='text-[0D2F3F]' placeholder={content.form.f2.placeholder} onChange={(e) => {

            setemail(e.target.value);

          }} />

          <h3 id="person-org-heading">{content.form.f3.h3}</h3>
          <input type="text" name="person-org" id="person-org" className='text-[0D2F3F]' placeholder={content.form.f3.h3} onChange={(e) => {
            if(e.target.value === "" || " " || "."){setorganisation(e.target.value); console.log("Success");};
            
            
          }} />

          <button type="submit" id='subscribe-btn' onClick={subscribe} ><p>{content.form.button}</p></button>
        </form>
      </div>
    </div>
  )
}
