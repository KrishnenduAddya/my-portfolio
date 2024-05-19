import React, { useState } from 'react'
import { SkillSet, ToolSet } from '../utils/constants';
import SkillImage from './SkillImage';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StarIcon from './StarIcon';
import SchoolIcon from './SchoolIcon';
import WorkIcon from './WorkIcon';
import ToolImage from './ToolImage';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import CheckedIcon from './CheckedIcon';
import UncheckedIcon from './UncheckedIcon';

const Work = () => {

    const [isSkillSet, setIsSkillSet] = useState(true);
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
        setIsSkillSet(!isSkillSet);
    }

    return (
        <div>
            <div className=" relative px-2 py-1 m-4 mx-auto md:mx-0 font-bold pt-[4%] text-3xl">
                <img className="w-screen h-screen absolute object-cover opacity-20" src="assets/work-bg.jpg" alt="work-bg"></img>
                <div className="relative flex items-center justify-center">
                    <h1 className="text-6xl py-8 font-bold">Work Experience</h1>
                </div>
            </div>
            <div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(29, 24, 54)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
                        date="Jan, 2024 - Present"
                        iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                        icon={<WorkIcon/>}>
                        
                        <h3 className="vertical-timeline-element-title text-3xl font-bold text-white">Senior Associate</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg font-semibold text-[#AAA6C3]">PwC India</h4>
                        <h4 className="vertical-timeline-element-subtitle text-lg font-semibold text-[#AAA6C3]">Kolkata, West Bengal, India</h4>

                        <ul className="mt-5 list-disc ml-5 space-y-2">
                            <li>Working as a Full Stack Developer on a Client Project.</li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(29, 24, 54)', color: '#fff' }}
                        date="Nov, 2021 - Jan, 2024"
                        iconStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
                        icon={<WorkIcon />}>
                        
                        <h3 className="vertical-timeline-element-title text-3xl font-bold text-white">Associate</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg font-semibold text-[#AAA6C3]">Cognizant</h4>
                        <h4 className="vertical-timeline-element-subtitle text-lg font-semibold text-[#AAA6C3]">Kolkata, West Bengal, India</h4>

                        <ul className="mt-5 list-disc ml-5 space-y-2">
                            <li>Worked as a Full Stack Developer in a Web Application (Client Project).</li>
                            <li>Developed Email Notifier Application using AWS Lambda.</li>
                            <li>Completed Microsoft Certified Azure Fundamentals (AZ-900) Certification in January, 2023.</li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(29, 24, 54)', color: '#fff' }}
                        date="July, 2021 - Nov, 2021"
                        iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                        icon={<WorkIcon />}>

                        <h3 className="vertical-timeline-element-title text-3xl font-bold text-white">Senior Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg font-semibold text-[#AAA6C3]">Mindteck</h4>
                        <h4 className="vertical-timeline-element-subtitle text-lg font-semibold text-[#AAA6C3]">Kolkata, West Bengal, India</h4>

                        <ul className="mt-5 list-disc ml-5 space-y-2">
                            <li>Started AWS Certified Developer Activities.</li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(29, 24, 54)', color: '#fff' }}
                        date="July, 2018 - June, 2021"
                        iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                        icon={<WorkIcon />}>

                        <h3 className="vertical-timeline-element-title text-3xl font-bold text-white">Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg font-semibold text-[#AAA6C3]">Mindteck</h4>
                        <h4 className="vertical-timeline-element-subtitle text-lg font-semibold text-[#AAA6C3]">Kolkata, West Bengal, India</h4>

                        <ul className="mt-5 list-disc ml-5 space-y-2">
                            <li>Developed several tools in C# Windows Form Application.</li>
                            <li>Worked on WCF service based application in backend side.</li>
                            <li>Worked on Encryption of Database and Config Data.</li>
                            <li>Developed Database Upgradation Software to upgrade a existing production database.</li>
                            <li>Worked on Multilingual Implementation of a Production Software.</li>
                        </ul>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <div className="flex justify-center mt-28 mx-20 text-white">
                <div className="text-3xl py-8 font-bold w-8/12">
                    <h1>My Programming Skills</h1>
                    <div className="my-8 flex">
                        <p className="px-4 -mt-1.5">Skills</p><Toggle onChange={handleChange} icons={{checked: <CheckedIcon />, unchecked: <UncheckedIcon />}}/><p className="px-4 -mt-1.5">Tools</p> 
                    </div>
                </div>
                { isSkillSet && <div className="relative flex flex-wrap justify-center">
                    {SkillSet.map((skill) => <SkillImage skill={skill}/>)}
                </div> }
                { !isSkillSet && <div className="relative flex flex-wrap justify-center">
                    {ToolSet.map((tool) => <ToolImage tool={tool}/>)}
                </div> }
            </div>
        </div>
    )
}

export default Work;