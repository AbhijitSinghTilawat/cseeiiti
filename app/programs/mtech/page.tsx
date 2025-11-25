// फ़ाइल: app/programs/mtech/page.tsx

import React from 'react';
import Link from 'next/link'; // लिंक के लिए

export default function MTechProgramPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      
      {/* --- 1. पेज का टाइटल --- */}
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center border-b-2 border-blue-200 pb-4">
        M.Tech. Program
      </h1>

      {/* --- 2. आपका टेक्स्ट --- */}
      <div className="space-y-8 text-lg text-gray-800 leading-relaxed">
        <p>
          The M.Tech. (Master of Technology) program in Computer Science and 
          Engineering (CSE) offers an in-depth exploration of advanced topics in 
          computer science, blending theoretical knowledge with practical skills.
        </p>

        {/* --- 3. Curriculum Highlights --- */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Curriculum Highlights:
          </h2>
          <p className="mb-4">
            Students engage in a rigorous curriculum that includes both coursework 
            and thesis projects, covering key areas such as:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2 text-gray-700">
            <li>Algorithms</li>
            <li>Software Development</li>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Cybersecurity</li>
            <li>Networking, etc.</li>
          </ul>
        </div>

        {/* --- 4. Program Objectives --- */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Program Objectives:
          </h2>
          <p className="mb-4">
            This program is designed to:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2 text-gray-700">
            <li>Prepare graduates to tackle complex challenges in industrial environments.</li>
            <li>Foster further academic pursuits and research opportunities.</li>
          </ul>
        </div>

        {/* --- 5. Learning Approach --- */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Learning Approach:
          </h2>
          <p>
            By emphasizing both rigorous theoretical foundations and hands-on 
            experience, the M.Tech. program equips students to excel in diverse 
            roles within industry or academia. The integration of emerging 
            technologies ensures that graduates are well-prepared for the evolving 
            landscape of computer science.
          </p>
        </div>

        {/* --- 6. "Click here" बटन --- */}
        <div className="text-center pt-8">
          <Link 
            href="#" // <-- यहाँ असली लिंक डालें
            className="inline-block px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-300"
          >
            Click here for more details
          </Link>
        </div>

      </div>
      
    </div>
  );
}