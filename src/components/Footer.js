import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <div className="w-screen absolute text-white w-screen flex flex-col md:flex-row sticky top-0 z-10 justify-end">
          <div className="absolute"><img className="w-screen h-20" src="/assets/header-bg.png" alt="header-bg"/></div>
          <div>
              <h1 className="relative mr-16 my-6">© 2024 Designed and Developed by <Link className="hover:text-[#ff0080]" to="https://in.linkedin.com/in/krishnendu-addya-025915121" target="_blank" rel="noreferrer">Krishnendu Addya</Link></h1>
          </div>
      </div>
    )
}

export default Footer;
