import React, { useEffect, useState } from 'react'

const Header = ({about, work, education, contact}) => {
  const scrollHandler = (elementRef) => {
    window.scrollTo({ top : elementRef.current.offsetTop, behavior : "smooth" });
  }
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let colorAbout, colorWork, colorEducation, colorContact;


  const colorWhite = "#ffffff", colorGray = "#718096";
  colorAbout = colorWhite; colorWork = colorGray; colorEducation = colorGray; colorContact = colorGray;
    if(scrollPosition > 3000)
    {
        colorAbout = colorGray; colorWork = colorGray; colorEducation = colorGray; colorContact = colorWhite;
    }
    else if(scrollPosition > 2300)
    {
        colorAbout = colorGray; colorWork = colorGray; colorEducation = colorWhite; colorContact = colorGray;
    }
    else if(scrollPosition > 500)
    {
        colorAbout = colorGray; colorWork = colorWhite; colorEducation = colorGray; colorContact = colorGray;
    }
  

  return (
      <div className="w-screen absolute w-screen flex flex-col md:flex-row sticky top-0 z-10 justify-between shadow-lg">
          <div className="absolute"><img className="w-screen h-16" src="/assets/header-bg.png" alt="header-bg"/></div>
          <div className="ml-12" onClick={() => scrollHandler(about)}>
              <h1 className="relative px-2 py-1 m-2 mx-auto md:mx-0 font-bold text-white text-3xl cursor-pointer">Krishnendu.</h1>
          </div>
          <div className="flex relative mr-12 mt-1">
              <h1 className={"px-6 py-1 m-2 mx-auto md:mx-0 font-bold text-white text-lg hover:text-white cursor-pointer"} onClick={() => scrollHandler(about)}>About</h1>
              <h1 className={"px-6 py-1 m-2 mx-auto md:mx-0 font-bold text-gray-400  text-lg hover:text-white cursor-pointer"} onClick={() => scrollHandler(work)}>Work</h1>
              <h1 className={"px-6 py-1 m-2 mx-auto md:mx-0 font-bold text-gray-400  text-lg hover:text-white cursor-pointer"} onClick={() => scrollHandler(education)}>Education</h1>
              <h1 className={"px-6 py-1 m-2 mx-auto md:mx-0 font-bold text-gray-400  text-lg hover:text-white cursor-pointer"} onClick={() => scrollHandler(contact)}>Contact</h1>
          </div>
      </div>
    )
}

export default Header;