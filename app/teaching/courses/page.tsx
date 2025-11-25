// फ़ाइल: app/teaching/courses/page.tsx

import React from 'react';

// --- 1. आपका पूरा Core Course डेटा ---
const coreCourses = [
    { code: "CS 103", name: "Computer Programming", lpt: "2-0-0", credit: "2" },
    { code: "IC 151", name: "Computer Programming Lab", lpt: "0-0-3", credit: "1.5" },
    { code: "CS 201", name: "Discrete Mathematical Structures", lpt: "2-1-0", credit: "3" },
    { code: "CS 202", name: "Automata Theory and Logic", lpt: "2-1-0", credit: "3" },
    { code: "CS 203", name: "Data Structure and Algorithms", lpt: "2-1-0", credit: "3" },
    { code: "CS 204", name: "Design and Analysis of Algorithms", lpt: "2-1-0", credit: "3" },
    { code: "CS 207N", name: "Database and Information System", lpt: "2-1-0", credit: "3" },
    { code: "CS 209", name: "Logic Design", lpt: "2-0-2", credit: "3" },
    { code: "CS 210", name: "Computer Architecture", lpt: "2-1-0", credit: "3" },
    { code: "CS 253", name: "Data Structure and Algorithms Lab", lpt: "0-0-3", credit: "1.5" },
    { code: "CS 254", name: "Design and Analysis of Algorithms Lab", lpt: "0-0-3", credit: "1.5" },
    { code: "CS 257", name: "Database and Information Systems Lab", lpt: "0-0-3", credit: "1.5" },
    { code: "CS 264", name: "Computer Architecture Lab", lpt: "0-0-3", credit: "1.5" },
    { code: "CS 302N", name: "Computer Graphics and Visualization", lpt: "2-0-2", credit: "3" },
    { code: "CS 303", name: "Operating Systems", lpt: "2-1-0", credit: "3" },
    { code: "CS 304N", name: "Computer Intelligence", lpt: "2-1-0", credit: "3" },
    { code: "CS 307", name: "Optimization Algorithms and Techniques", lpt: "2-1-0", credit: "3" },
    { code: "CS 308N", name: "Compiler Techniques", lpt: "2-0-2", credit: "3" },
    { code: "CS 310", name: "Software Engineering", lpt: "2-0-2", credit: "3" },
    { code: "CS 311", name: "Parallel Computing", lpt: "2-0-2", credit: "3" },
    { code: "CS 313", name: "Computer Networks", lpt: "2-0-2", credit: "3" },
    { code: "CS 353N", name: "Operating Systems Lab", lpt: "0-0-2", credit: "1" },
    { code: "CS 354N", name: "Computer Intelligence Lab", lpt: "0-0-3", credit: "1.5" },
    { code: "CS 357N", name: "Optimization Algorithms and Techniques Lab", lpt: "0-0-2", credit: "1" },
    { code: "CS 493N", name: "B Tech Project (BTP)", lpt: "0-0-32", credit: "16" }
];

// --- 2. आपका पूरा Elective Course डेटा ---
const electiveCourses = [
    { code: "CS 401 / CS 601", name: "Soft Computing", lpt: "2-0-2", credit: "3" },
    { code: "CS 404 / EE 304", name: "Digital Signal Processing", lpt: "3-1-0", credit: "4" },
    { code: "CS 406 / CS 606", name: "Data Mining and Data Warehousing", lpt: "2-0-2", credit: "3" },
    { code: "CS 407", name: "Peripherals and Interfaces", lpt: "2-0-2", credit: "3" },
    { code: "CS 408", name: "Algorithms for Convex Programming", lpt: "2-0-2", credit: "3" },
    { code: "CS 409 / CS 609", name: "Advanced Topics in Database Management Systems", lpt: "2-1-0", credit: "3" },
    { code: "CS 410", name: "Genetic Algorithms", lpt: "2-0-2", credit: "3" },
    { code: "CS 411", name: "Advanced Algorithms", lpt: "2-0-2", credit: "3" },
    { code: "CS 412", name: "Pattern Recognition", lpt: "2-0-2", credit: "3" },
    { code: "CS 413", name: "Topics in Artificial Intelligence Programming", lpt: "2-1-0", credit: "3" },
    { code: "CS 414 / CS 614", name: "Cloud Computing and Applications", lpt: "2-1-0", credit: "3" },
    { code: "CS 416 / CS 616", name: "Service Oriented Systems", lpt: "2-1-0", credit: "3" },
    { code: "CS 417 / CS 617", name: "Cryptography and Network Security", lpt: "2-1-0", credit: "3" },
    { code: "CS 418 / CS 618", name: "Systems and Usable Security", lpt: "2-1-0", credit: "3" },
    { code: "CS 419 / CS 619 / ICS 419", name: "Computer Vision", lpt: "2-1-0", credit: "3" },
    { code: "CS 420 / CS 620", name: "Embedded Systems", lpt: "2-1-0", credit: "3" },
    { code: "CS 422 / CS 622", name: "Numerical Simulation", lpt: "2-1-0", credit: "3" },
    { code: "CS 424", name: "Functional and Logic Programming", lpt: "2-0-2", credit: "3" },
    { code: "CS 701", name: "Selected Topics in Advanced Algorithms", lpt: "2-1-0", credit: "3" }
];

// --- 3. एक दोबारा इस्तेमाल होने वाला टेबल कंपोनेंट ---
// (यह एक ही पेज पर है, इसलिए इसे कहीं और import करने की ज़रूरत नहीं)
function CourseTable({
    title,
    data,
}: {
    title: string;
    data: {
        code: string;
        name: string;
        instructor?: string; // 👈 optional कर दिया
        lpt?: string;
        credit?: string;
    }[];
}) {


    return (
        <div className="mb-16">
            <h2 className="text-3xl font-semibold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
                {title}
            </h2>
            <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-blue-900">
                        <tr>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                Course Code
                            </th>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                Course Name
                            </th>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                L-P-T
                            </th>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                                Credit
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((course) => (
                            <tr key={course.code} className="hover:bg-blue-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {course.code}
                                </td>
                                <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">
                                    {course.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    {course.lpt}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    {course.credit}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

// --- 4. मुख्य पेज कंपोनेंट ---
export default function CoursesPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">
                Courses Offered
            </h1>

            {/* पहली टेबल: Core Courses */}
            <CourseTable title="Core Courses" data={coreCourses} />

            {/* दूसरी टेबल: Elective Courses */}
            <CourseTable title="Elective Courses" data={electiveCourses} />
        </div>
    );
}