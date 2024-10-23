import React from 'react'

function Contact() {
  return (
    <div id="contact" className="text-xl text-center  text-white my-14">
          <h2 className=" text-4xl font-black non-italic mb-4">Contact Me</h2>
          <p className="italic">Please contact me at: </p>
          <a href= "mailto:wkwarda.08@gmail.com" target ="_blank">
            <i className="fa-solid fa-envelope mx-3 pt-9"></i></a>
          <a href= "https://github.com/WardaWaseem2812" target ="_blank">
            <i className="fa-brands fa-github mx-3"></i></a>
          <a href= "https://www.linkedin.com/in/warda-waseem-5b1634233" target ="_blank">
               <i className="fa-brands fa-linkedin mx-3"></i></a>
          <a href= "https://discordapp.com/users/993223049488904232" target ="_blank">
               <i className="fa-brands fa-discord mx-3"></i></a>

        </div> 
  )
}

export default Contact
