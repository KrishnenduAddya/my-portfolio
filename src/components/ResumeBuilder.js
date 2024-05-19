import React, { useState } from 'react';
import jsPDF from "jspdf";

// Define the form fields
const fields = ['Personal Info', 'Work Experience', 'Education Details', 'Achievements', 'Hobbies'];

const ResumeBuilder = () => {
    const [data, setData] = useState({});

    const handleChange = (e, field) => {
        setData({...data, [field]: e.target.value});
    }

    const downloadPDF = () => {
        var doc = new jsPDF();
        doc.text(JSON.stringify(data, null, 2), 10, 10);
        doc.save("Resume.pdf");
    }

    return (
        <div className='bg-black text-white'>
            {fields.map(field => (
                <div key={field}>
                    <h2>{field}</h2>
                    <textarea  className="bg-gray-600" value={data[field] || ''} onChange={e => handleChange(e, field)} />
                </div>
            ))}
            <button className='text-white' onClick={downloadPDF}>Download as PDF</button>
        </div>
    );
}

export default ResumeBuilder;