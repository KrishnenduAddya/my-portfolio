import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import WorkIcon from './WorkIcon';
import SchoolIcon from './SchoolIcon';
import StarIcon from './StarIcon';

const Education = () => {
    return (
        <div>
            <div className=" relative px-2 py-1 m-4 mx-auto md:mx-0 font-bold pt-[4%] text-3xl">
                <img className="w-screen h-screen absolute object-cover opacity-20" src="assets/education-bg.jpg" alt="work-bg"></img>
                <div className="relative flex items-center justify-center">
                    <h1 className="text-6xl py-8 font-bold">Education</h1>
                </div>
            </div>
            <div className="text-black">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(29, 24, 54)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
                        date="Aug, 2014 - May, 2018"
                        iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                        icon={<WorkIcon/>}>
                        
                        <h3 className="vertical-timeline-element-title text-3xl font-bold text-white">B.Tech, Computer Sciennce & Engineering</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg font-semibold text-[#AAA6C3]">Academy of Technology</h4>
                        <h4 className="vertical-timeline-element-subtitle text-lg font-semibold text-[#AAA6C3]">Adisaptagram, West Bengal, India</h4>

                        <ul className="mt-5 list-disc ml-5 space-y-2">
                            <li>Graduated with 9.27 DGPA</li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(29, 24, 54)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
                        date="2011 - 2013"
                        iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                        icon={<WorkIcon/>}>
                        
                        <h3 className="vertical-timeline-element-title text-3xl font-bold text-white">Higher Secondary Education, Science</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg font-semibold text-[#AAA6C3]">Pingla Krishna Kamini Institution</h4>
                        <h4 className="vertical-timeline-element-subtitle text-lg font-semibold text-[#AAA6C3]">Pingla, West Bengal, India</h4>

                        <ul className="mt-5 list-disc ml-5 space-y-2">
                            <li>Completed education with 80%.</li>
                        </ul>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Education;