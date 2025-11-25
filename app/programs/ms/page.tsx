// फ़ाइल: app/programs/ms/page.tsx

import React from 'react';

export default function MSProgramPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">

            {/* --- 1. पेज का टाइटल --- */}
            <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center border-b-2 border-blue-200 pb-4">
                MS Program
            </h1>

            {/* --- 2. आपका टेक्स्ट --- */}
            <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
                <p>
                    MS Research program of the Department of Computer Science &
                    Engineering is a **two years research oriented Master's program**.
                    First two semesters of the program include course work whereas last two
                    semesters are fully devoted to thesis work.
                </p>
                <p>
                    Candidates with BTech/BE
                    degree in Computer Science and Engineering (CSE) or Information
                    Technology (IT) and having **valid GATE score in CSE/IT** are eligible to
                    apply. IIT graduates with 8.0 or more CPI/ CGPA are exempted from GATE
                    qualification.
                </p>

                {/* --- 3. हाइलाइट किया गया बॉक्स --- */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <p className="font-medium text-blue-900">
                        Applications for the admission to MS Research program are generally
                        invited in **March/April**. Information about the advertisement is made
                        available at Department of CSE website and at Academic webpage of IIT Indore.
                    </p>
                </div>

                <p>
                    For more details, interested candidates may contact Program Coordinator,
                    MS Research, CSE (pc-mscse[AT]iiti[DOT]ac[DOT]in) or Head, Department
                    of CSE (hodcse[AT]iiti[DOT]ac[DOT]in).
                </p>
            </div>

        </div>
    );
}