// फ़ाइल: app/about/facilities/page.tsx

import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'; 

// --- 1. आपकी लैब्स का डेटा ---
const facilitiesData = [
    "Design and Analysis of Algorithms Lab",
    "Logic Design Lab",
    "Software Engineering Lab",
    "Computer Graphics and Visualization Lab",
    "Computational Intelligence Lab",
    "Computer Networks Lab",
    "Compiler Techniques Lab",
    "Machine Learning Lab",
    "Advanced Algorithms Lab",
    "Cryptography and Network Security Lab",
    "Computer Vision Lab",
    "Natural Language Processing Lab",
    "Advanced Computer Networks Lab",
    "Artificial intelligence laboratory"
];

// --- 2. पेज कंपोनेंट ---
export default function FacilitiesPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-6xl">

            {/* --- 1. पेज का टाइटल --- */}
            <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center border-b-2 border-blue-200 pb-4">
                Research Facilities
            </h1>

            {/* --- 2. सबटाइटल --- */}
            <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                Various research and teaching laboratories in the CSE department are:
            </p>

            {/* --- 3. लैब्स का ग्रिड --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {facilitiesData.map((labName, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex items-center space-x-4"
                    >
                        {/* आइकॉन */}
                        <div className="flex-shrink-0">
                            {/* आइकॉन के लिए 'npm install @heroicons/react' की ज़रूरत हो सकती है */}
                            {/* <BeakerIcon className="h-8 w-8 text-blue-600" /> */}

                            {/* आइकॉन के बजाय एक स्टाइलिश बुलेट */}
                            <span className="h-8 w-8 flex items-center justify-center bg-blue-100 rounded-full">
                                <span className="h-3 w-3 bg-blue-600 rounded-full"></span>
                            </span>
                        </div>

                        {/* लैब का नाम */}
                        <h2 className="text-lg font-medium text-gray-800">
                            {labName}
                        </h2>
                    </div>
                ))}

            </div>
        </div>
    );
}