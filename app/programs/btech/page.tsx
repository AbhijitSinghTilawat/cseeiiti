// फ़ाइल: app/programs/btech/page.tsx

import React from 'react';

export default function BTechProgramPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">

            {/* --- 1. पेज का टाइटल --- */}
            <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center border-b-2 border-blue-200 pb-4">
                B.Tech. Program
            </h1>

            {/* --- 2. आपका टेक्स्ट --- */}
            <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
                <p>
                    The B.Tech. Program in Computer Science Engineering is a four-year
                    program with selection through the IIT Joint Entrance Examination.
                </p>
                <p>
                    Students are encouraged to work on research projects from their second
                    year onwards in addition to course work and a semester long B.Tech.
                    project offered in seventh semester. Projects undertaken are of
                    inter–disciplinary nature and involve faculty members from across
                    disciplines.
                </p>
                <p>
                    Its strong and interactive curriculum and hands-on learning
                    makes students capable of taking their career to the next level,
                    whether it be in the professional engineering practice or in advanced
                    study.
                </p>
            </div>

        </div>
    );
}