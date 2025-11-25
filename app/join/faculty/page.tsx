// app/join/faculty/page.tsx

import React from 'react';
import { Star, CheckCircle, Send } from 'lucide-react'; // आइकन्स के लिए

export default function ProspectiveFacultyPage() {

    // list items
    const attractions = [
        "Computer Science and Engineering attracts some of the most highly ranked JEE candidates to its undergraduate programme",
        "The department has a strong thrust towards the involvement of undergraduate students in its research programmes",
        "Faculty members have complete freedom to tailor courses as and how they deem appropriate",
        "The department embraces the Open Sources movement and its laboratories conform to the use of Open Source Technologies for most applications",
        "The department houses some of the most advanced computing facilities including the best",
        "Faculty members in the discipline come with research experience behind them from the best institutions in India and abroad",
        "The department is proud of a very strong programming culture amongst its students that is in ample display in various hackathons, and prestigious programming contests like the ACM-ICPC",
        "The camaraderie between faculty members in the discipline is very positive and informal and makes for a great experience"
    ];

    const benefits = [
        "Attractive start-up grants with no upper limit restrictions.",
        "Seperate budget for procuring high end research.",
        "Faculty excellence award for exceptional teaching, research, institute service and outreach.",
        "Research funded post doctoral fellow for research production."
    ];

    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">

            {/* --- 1. Page Title --- */}
            <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center border-b-2 border-blue-200 pb-4">
                Faculty Recruitment @ CSE-IITI
            </h1>

            {/* --- 2. Main Paragraph --- */}
            <div className="space-y-6 text-lg text-gray-800 leading-relaxed mb-12">
                <p>
                    The Department of Computer Science and Engineering, IIT Indore solicits
                    applications from **highly motivated and competent candidates** for faculty
                    positions at various levels. The department adopts a modern approach to
                    teaching wherein students are rendered in adequate academic freedom to
                    innovate and learn in the process.
                </p>
                <p>
                    State of the art facilities including
                    the latest software and advanced hardware are available in various
                    laboratories for the use in both teaching and research. This facilitates
                    adequate implementation of major B.Tech projects and for verification
                    and validation of research results.
                </p>
                <p>
                    Being a part of
                    an emerging and relatively new institute, together with extremely
                    competent research environment, the Department of Computer Science and
                    Engineering of IIT Indore offers a **unique platform** for the faculty
                    members and students to explore the arena of fundamental and applied
                    research.
                </p>
            </div>

            {/* --- 3. (Attractions & Benefits) --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">

                {/* Attractions */}
                <div>
                    <h2 className="text-3xl font-semibold text-blue-800 mb-6 flex items-center">
                        <Star className="h-7 w-7 text-yellow-500 mr-3" />
                        Attractions
                    </h2>
                    <ul className="space-y-4">
                        {attractions.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Benefits */}
                <div>
                    <h2 className="text-3xl font-semibold text-blue-800 mb-6 flex items-center">
                        <CheckCircle className="h-7 w-7 text-green-600 mr-3" />
                        Benefits
                    </h2>
                    <ul className="space-y-4">
                        {benefits.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* --- 4. Application Procedure --- */}
            <div>
                <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
                    Application Procedure
                </h2>
                <div className="bg-blue-50 border-2 border-blue-200 p-8 rounded-lg text-center">
                    <p className="text-lg text-gray-800 mb-4">
                        For any other queries or to apply, please send your mail/updated CV to:
                    </p>
                    <a
                        href="mailto:hodcse@iiti.ac.in"
                        className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-bold text-lg rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-300"
                    >
                        <Send className="h-5 w-5 mr-3" />
                        hodcse@iiti.ac.in
                    </a>
                </div>
            </div>

        </div>
    );
}