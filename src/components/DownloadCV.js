import React, { useState } from 'react'

const DownloadCV = () => {

    const [color, setColor] = useState(false);

    const downloadFile = (url) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    return (
        <div className="relative flex items-center justify-center pt-10">
            {!color && <button visibility="hidden" className="rounded-full border-solid border-2 border-white py-2 px-4" 
                onClick={() => downloadFile("assets/KrishnenduCV.pdf")} onMouseOver={() => setColor(true)}>
                    Download CV
            </button>}
            {color && <div class="flex items-center justify-center cursor-pointer">
                <div class="h-11 rounded-full bg-gradient-to-r from-[#7928ca] to-[#ff0080] p-0.5">
                    <div class="flex h-full w-full rounded-full items-center justify-center bg-gray-900" onClick={() => downloadFile("assets/KrishnenduCV.pdf")} onMouseLeave={() => setColor(false)}>
                    <h1 class="py-2 px-4">Download CV</h1>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default DownloadCV;