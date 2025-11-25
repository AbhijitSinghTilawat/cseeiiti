// फ़ाइल: app/research/sponsored-projects/fellowships/page.tsx

import React from 'react';

// --- 1. आपका पूरा Fellowships डेटा ---
const fellowshipsData = [
    {
        title: "Efficient Solution of Linear Systems arising in Non-Parametric Model Reduction of Second Order Systems.",
        pi: "Dr. Kapil Ahuja",
        agency: "IIT-TU9 Faculty Exchange Program of DAAD (German Academic Exchange Service).",
        duration: "Visit to TU Braunschweig for month of June 2014 (Approved on 19th March 2014).",
        funding: "2200 Euros"
    },
    {
        title: "Reducing parametrized complexities of determinant and permanents",
        pi: "Dr. Ranveer Singh",
        agency: "DST",
        duration: "December 2020 - December 2025",
        funding: "INR 3500000"
    }
];

// --- 2. पेज कंपोनेंट ---
export default function FellowshipsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">
                Fellowships
            </h1>

            {/* Fellowships की लिस्ट */}
            <div className="space-y-8">
                {fellowshipsData.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
                    >
                        {/* नंबर और टाइटल */}
                        <div className="flex items-start">
                            <span className="text-2xl font-bold text-blue-800 mr-4">
                                {index + 1}.
                            </span>
                            <h2 className="text-xl font-semibold text-blue-800 mb-4 flex-1">
                                {project.title}
                            </h2>
                        </div>

                        {/* बाकी की जानकारी */}
                        <div className="pl-10 space-y-2">
                            <p className="text-gray-700">
                                <strong className="font-medium text-gray-900">
                                    Project Investigator:
                                </strong> {project.pi}
                            </p>

                            {project.agency && (
                                <p className="text-gray-700">
                                    <strong className="font-medium text-gray-900">
                                        Sponsoring Agency:
                                    </strong> {project.agency}
                                </p>
                            )}

                            <p className="text-gray-700">
                                <strong className="font-medium text-gray-900">
                                    Duration:
                                </strong>
                                {/* यह dangerouslySetInnerHTML का उपयोग करता है क्योंकि आपके डेटा में &nbsp; है।
                  यह HTML को रेंडर करने की अनुमति देता है।
                */}
                                <span dangerouslySetInnerHTML={{ __html: project.duration }} />
                            </p>

                            {project.funding && (
                                <p className="text-gray-700">
                                    <strong className="font-medium text-gray-900">
                                        Funding Amount:
                                    </strong> {project.funding}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}