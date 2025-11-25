//  app/join/interns/page.tsx

import React from 'react';
import Link from 'next/link';

export default function InternsPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">

            {/* --- 1. Page Title--- */}
            <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center border-b-2 border-blue-200 pb-4">
                Internship @ CSE-IITI
            </h1>

            {/* --- 2. Task--- */}
            <div className="space-y-8 text-lg text-gray-800 leading-relaxed">

                {/* --- 3. Main information--- */}
                <p>
                    The department of CSE hosts a good number of interns during the
                    summer and winter every year. It also offers semester long internships
                    to under-graduate and graduate students.
                </p>
                <p>
                    During their stay at IIT
                    Indore, interns get an excellent opportunity to work in the **cutting edge
                    research problems**. The work done by most of the interns get published
                    in the form of a high quality journal or conference publication.
                </p>

                {/* --- 4. Application Procedure --- */}
                <div>
                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                        Application Procedure
                    </h2>
                    <p>
                        The interns are independently chosen by the individual faculty members.
                        Interested applicants are encouraged to visit profile of the faculty
                        members of the department and **contact them directly** to get details of
                        the openings in their research groups.
                    </p>
                    <div className="mt-4">
                        <Link
                            href="/people/faculty"
                            className="font-medium text-blue-600 hover:underline"
                        >
                            Profiles of the faculty members are available here Click
                        </Link>
                    </div>
                </div>

                {/* --- 5. Accommodation --- */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                        Accommodation
                    </h2>
                    <p className="text-gray-700">
                        Hostel accomodation to interns is made available in the campus
                        (subjected to the availability) on payment basis and can be availaed on
                        the recommendation of the faculty member with whom intern is going to
                        join.
                    </p>
                </div>

            </div>

        </div>
    );
}