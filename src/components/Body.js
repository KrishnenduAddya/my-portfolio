import React, { useRef } from 'react'
import Header from './Header';
import MainContainter from './MainContainter';

const Body = () => {
    const about = useRef();
    const work = useRef();
    const education = useRef();
    const contact = useRef();

  return (
    <div className="bg-black text-white min-h-screen">
        <Header about={about} work={work} education={education} contact={contact}/>
        <MainContainter about={about} work={work} education={education} contact={contact}/>
    </div>
  )
}

export default Body;