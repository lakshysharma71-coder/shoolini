import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
function HeaderNav() {
  
  return (
   <>
   <div className="w-full bg-white h-12 text-zinc-900 flex items-center">
    <ul className='flex gap-9 ml-auto text-sm text-semibold px-5 items-center'>
        <li><a href="src\component\web_development_notes.pdf">Self-Disclosure</a></li>
        <li><a href="src\component\web_development_notes.pdf">Blogs</a></li>
        <li><a href="src\component\web_development_notes.pdf">Contact</a></li>
        <li><a href="src\component\web_development_notes.pdf">SU Students</a></li>
        <li><a href="src\component\web_development_notes.pdf">Alaumni</a></li>
        <li><a href="src\component\web_development_notes.pdf"> UGC-NAD</a></li>
        <li><a href="src\component\web_development_notes.pdf">Online-Payment</a></li>
        <li><a href="src\component\web_development_notes.pdf">Ranking</a></li>

    </ul>
   <div className="flex">
  <ul className="flex gap-2 px-10">
    <li><FaFacebookF size={22}  className='bg-blue-900 rounded-md text-white  p-1' /></li>
    <li><IoLogoTwitter size={22}  className='bg-cyan-500 rounded-md text-white p-1' /></li>
    <li><TiSocialLinkedin size={22}  className='bg-sky-500 rounded-md text-white p-1' /></li>
    <li><FaInstagram size={22}  className='bg-pink-400 rounded-md text-white p-1' /></li>
  </ul>
</div>


   </div>
   
   </>
  )
}

export default HeaderNav


