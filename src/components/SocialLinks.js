import React from 'react'
import { SocialIcon } from 'react-social-icons';

const SocialLinks = () => {
  return (
        <div className="mt-4 flex items-center justify-center">
            <p className="p-1"><SocialIcon target="_blank" url="https://in.linkedin.com/in/krishnendu-addya-025915121" bgColor="#" style={{ height: 40, width: 40 }}/></p>
            <p className="p-1"><SocialIcon target="_blank" url="https://github.com/KrishnenduAddya" bgColor="#" style={{ height: 40, width: 40 }}/></p>
            <p className="p-1"><SocialIcon url="mailto:krishnenduaddya@gmail.com" bgColor="#" style={{ height: 40, width: 40 }}/></p>
            <p className="p-1"><SocialIcon target="_blank" url="https://facebook.com/" bgColor="#" style={{ height: 40, width: 40 }} /></p>
            <p className="p-1"><SocialIcon target="_blank" url="https://instagram.com/" bgColor="#" style={{ height: 40, width: 40 }}/></p>
        </div>
    )
}

export default SocialLinks;