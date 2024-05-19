import React from 'react';
import Hexagon from 'react-hexagon';

const SkillImage = (props) => {
    const {name, imagePath} = props.skill;
    return (
        <div className='w-28 -mb-8 -mr-0.5'><Hexagon
        style={{stroke: '#61DBFB'}} backgroundScale={1}
        backgroundImage={"assets/skills/"+ imagePath} backgroundWidth={400} backgroundHeight={450}
      /></div>
    )
}

export default SkillImage;