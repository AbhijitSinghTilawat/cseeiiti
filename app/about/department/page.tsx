// File: app/about/department/page.tsx

import React from 'react';
import Link from 'next/link';

export default function DepartmentPage() {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-12 py-16">

            {/* Page Title */}
            <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center border-b-2 border-blue-200 pb-4">
                Department of CSE
            </h1>

            {/* Auto-Responsive Text */}
            <div className="space-y-6 text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">

                <p>
                    The Department of Computer Science and Engineering (CSE) was established in
                    <strong> July 2009</strong>. The department offers Bachelor of Technology (B. Tech.),
                    Master of Science (M. S.) by Research, and Doctor of Philosophy (Ph.D.) programs.
                    Since <strong>2023</strong>, the department also offers a Master of Technology (M. Tech.) program.
                </p>

                <p>
                    The department follows a modern approach to teaching with ample academic freedom
                    that encourages students to innovate and learn. The
                    <strong> state-of-the-art facilities</strong> including advanced software and hardware
                    resources support both teaching and research, enabling successful completion of
                    B.Tech., MS (Research), and Ph.D. projects.
                </p>

                {/* Highlighted Section */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
                    <p className="font-medium text-blue-900">
                        The department benefits from its location in Indore, which is emerging as a
                        <strong> major IT hub</strong> in central India. Companies like CSC and Impetus have a
                        strong presence, while major firms like TCS, Infosys, and many others have
                        established operations in the city.
                    </p>
                </div>

                <p>
                    This creates excellent opportunities for industry–academia collaboration.
                    <Link href="/research/areas" className="text-blue-600 font-medium hover:underline ml-1">
                        Explore research areas here.
                    </Link>
                    <Link href="/people/faculty" className="text-blue-600 font-medium hover:underline ml-1">
                        Faculty details can be found here.
                    </Link>
                </p>

            </div>
        </div>
    );
}
