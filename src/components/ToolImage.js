import React from 'react';
import Hexagon from 'react-hexagon';

const ToolImage = (props) => {
    const {name, imagePath} = props.tool;
    return (
        <div className='w-28 -mb-10 -mr-0.5'><Hexagon
        style={{stroke: '#61DBFB'}} backgroundScale={1}
        backgroundImage={"assets/tools/"+ imagePath} backgroundWidth={500} backgroundHeight={500}
      /></div>
    )
}

export default ToolImage;