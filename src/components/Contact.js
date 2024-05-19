import React from 'react'
import { Link } from 'react-router-dom';
import ResumeBuilder from './ResumeBuilder';

const Contact = () => {
    return (
        <div className="w-screen h-screen relative mt-[4%]">
            <img className="w-screen h-screen absolute object-cover opacity-50" src="assets/contact-bg.png" alt="contact-bg"></img>
            {/* <img className="w-screen h-screen absolute object-cover opacity-50" src="assets/galaxy-gif.gif" alt="contact-bg"></img> */}
            <div className="relative flex items-center justify-center">
                <h1 className="text-4xl pt-5 font-bold mt-[4%]">Contact</h1>
            </div>
            <div className="relative flex ml-[5%]">
                <form className="mt-8 px-12 py-8 flex flex-col gap-4 text-2xl w-[40%] backdrop-filter backdrop-blur-2xl">
                    <label className="flex flex-col">
                        <span className="text-white font-bold mb-4">Name</span>
                        <input type="text" name="name" placeholder="What is your name?" className="py-4 px-6 bg-gray-600 font-semibold rounded-lg outline-none border-none"/>
                    </label>
                    <label class="flex flex-col"><span class="text-white font-bold mb-4">Email</span>
                    <input type="email" name="email" placeholder="What is your email address?" class="py-4 px-6 bg-gray-600 font-semibold rounded-lg outline-none border-none"/></label>
                    <label class="flex flex-col"><span class="text-white font-bold mb-4">Message</span>
                    <textarea rows="2" name="message" placeholder="What do you want to say?" className="py-4 px-6 bg-gray-600 font-semibold rounded-lg outline-none border-none">
                    </textarea>
                    </label>
                    <button type="submit" className="w-40 rounded-full border-solid border-2 mt-4 border-white py-2 px-2 bg-[#000033.] hover:bg-[#cc0066]">Send</button>
                </form>
            </div>
            <div className="flex justify-end">
                <h1 className="relative -mt-6 mr-12">© 2024 Designed and Developed by <Link className="text-[#ff0080] hover:text-[#7928ca]" to="https://in.linkedin.com/in/krishnendu-addya-025915121" target="_blank" rel="noreferrer">Krishnendu Addya</Link></h1>
            </div>
            <ResumeBuilder/>
        </div>
    )
}

export default Contact;