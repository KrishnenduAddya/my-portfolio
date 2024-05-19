import Typewriter from 'typewriter-effect';
import Contact from './Contact';
import Education from './Education';
import Work from './Work';
import SocialLinks from './SocialLinks';
import DownloadCV from './DownloadCV';
import { useState } from 'react';

const MainContainter = ({about, work, education, contact}) => {

    const [color, setColor] = useState(false);

    const scrollHandler = (elementRef) => {
        window.scrollTo({ top : elementRef.current.offsetTop, behavior : "smooth" });
    }

    return (
        <div className="text-white">
            <div ref={about} className="w-screen h-screen">
                <img className="w-screen h-screen absolute object-cover opacity-40" src="assets/profile-bg.jpg" alt="profile-bg"></img>
                <div className="relative pt-[10%] text-2xl">
                    <h1 className="text-white flex items-center justify-center text-white">Hello & Welcome</h1>
                </div>
                <div className="relative flex items-center justify-center">
                    <h1 className="text-white text-8xl py-2 pr-4">{"I Am"}</h1>
                    <h1 className="text-8xl py-2 font-bold">
                        <Typewriter onInit={(typewriter) => {
                        typewriter.typeString("Krishnendu.")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("A Software Developer.")
                        .pauseFor(1000).deleteAll().typeString("Krishnendu.")
                        .start();
                    }}/></h1>
                </div>
                <div className="relative text-2xl">
                    <h1 className="flex items-center justify-center slidein 1s ease 500ms forwards">I am a Full Stack Developer</h1>
                    <h1 className="flex items-center justify-center">I develop web applications in .NET & React</h1>
                    <SocialLinks/>
                </div>
                <DownloadCV/>
                { !color &&<div className="relative flex items-center justify-end pr-16">
                    <img  onClick={() => scrollHandler(work)} className="w-7 h-12 relative -mr-8 pt-2 cursor-pointer" src="assets/down-arrow.png" alt="down-arrow" onMouseOver={() => setColor(true)}/>
                    <button onClick={() => scrollHandler(work)} className="w-6 h-14 rounded-full border-2 border-white py-2 px-4" onMouseOver={() => setColor(true)} ></button>
                </div> } 
                { color && <div class="relative flex items-center justify-end pr-16 cursor-pointer">
                                <div class="w-9 h-14 rounded-full bg-gradient-to-r from-[#7928ca] to-[#ff0080] p-0.5">
                                    <div class="flex h-full w-full rounded-full items-center justify-center bg-gray-900" onMouseLeave={() => setColor(false)}>
                                    <img  onClick={() => scrollHandler(work)} className="w-7 h-12 relative pt-2 mt-4 cursor-pointer animate-bounce" src="assets/down-arrow.png" alt="down-arrow" onMouseLeave={() => setColor(false)}/>
                                </div>
                            </div> 
                </div>}        
            </div>
            <div ref={work}>
                <Work/>
            </div>
            <div ref={education}>
                <Education/>
            </div>
            <div ref={contact}>
                <Contact/>
            </div>
        </div>
    )
}

export default MainContainter;