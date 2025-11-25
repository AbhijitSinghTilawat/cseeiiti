//  app/join/phd/page.tsx

import React from 'react';
import Link from 'next/link'; 

export default function ProspectivePhDPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">

            {/* --- 1. Title Page --- */}
            <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center border-b-2 border-blue-200 pb-4">
                PhD Program Admissions
            </h1>

            {/* --- 2. Task--- */}
            <div className="space-y-8 text-lg text-gray-800 leading-relaxed">

                {/* --- 3. Main information --- */}
                <p>
                    Department of Computer Science and Engineering, IIT Indore offers
                    Doctor of Philosophy (PhD) program in almost all current areas of
                    Computer Science and is looking for **highly motivated and dedicated
                    research scholars** for its PhD program.
                </p>
                <p>
                    It welcomes and accepts
                    applications for admission to PhD program generally in **March/April for
                    Autumn semester** and in **September/October for Spring semester**.
                </p>
                <p>
                    In general,
                    students selected for PhD program have to undergo course-work during
                    first two semesters before actually starting their individual doctoral
                    research work. During these two semesters, students get an opportunity
                    to acquaint themselves with the research activities of faculty members
                    and suitably select their individual research supervisor.
                </p>

                {/* --- 4. Areas of Research --- */}
                <div>
                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                        Areas of Research
                    </h2>
                    <p>
                        Faculty members of the department of Computer Science and Engineering
                        are working in cutting-edge research areas.
                        <Link href="/research/areas" className="text-blue-600 font-medium hover:underline ml-1">
                            Complete list of areas... can be found here.
                        </Link>
                        <Link href="/people/faculty" className="text-blue-600 font-medium hover:underline ml-1">
                            Information about faculty members... can be found here.
                        </Link>
                    </p>
                </div>

                {/* --- 5. Admission Procedure --- */}
                <div>
                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                        Admission Procedure
                    </h2>
                    <p>
                        Selection process for admission to PhD program in discipline of Computer
                        Science and Engineering consists of a **written test followed by an
                        interview**. Syllabus of written test loosely follows the latest syllabus
                        of Graduate Aptitude Test in Engineering (GATE) for Computer Science and
                        Information Technology. Final selections are made considering
                        performance of candidates in both, the written test and the interview.
                    </p>
                </div>

                {/* --- 6. Applications --- */}
                <div>
                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                        Applications
                    </h2>
                    <p>
                        IIT Indore invites applications for admission to its Regular PhD Program
                        in every quarter of the year.
                        <Link href="#" className="text-blue-600 font-medium hover:underline ml-1">
                            For more details, please refer here.
                        </Link>
                    </p>
                </div>

            </div>

        </div>
    );
}