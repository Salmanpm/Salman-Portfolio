import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function SocialMedia() {
  return (
    <div className='app__social'>
      <div>
        <a href="https://x.com/SSallu74716"> <BsTwitter></BsTwitter> </a>
      </div>
      <div>
      <a href="https://github.com/Salmanpm"><FaGithub></FaGithub></a>
      </div>
      <div>
       <a href="https://www.linkedin.com/in/salmanul-faris-p-m-557938294/"><FaLinkedin></FaLinkedin> </a> 
      </div>
    </div>
  )
}

export default SocialMedia
