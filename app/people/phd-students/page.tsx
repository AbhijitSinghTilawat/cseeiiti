// app/phd-students/page.tsx

import { getPhdStudents } from "@/lib/phdStudentData";

export default async function PhdStudentsPage() {
    const phdStudents = await getPhdStudents();

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="container mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-indigo-600 pb-2 mb-8">
                    🎓 PhD Students
                </h1>
                <p className="text-lg text-gray-700 mb-10">
                    Meet our dedicated PhD scholars and researchers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {phdStudents.map((student) => (
                        <div
                            key={student.id}
                            // 👇 कार्ड को थोड़ा ज़्यादा स्पेस दिया
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-[1.02] flex flex-col items-center text-center"
                        >
                            <img
                                src={
                                    student.profileImagePath ||
                                    "https://placehold.co/150x150/cccccc/000000?text=NA"
                                }
                                alt={student.name}
                                className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-indigo-200"
                            />

                            <h2 className="text-2xl font-bold text-indigo-700 mb-1">
                                {student.name}
                            </h2>

                            {/* 👇 स्क्रॉल होने वाला हिस्सा */}
                            <div
                                // 👇 ये दो क्लास स्क्रॉलिंग के लिए हैं
                                className="space-y-2 w-full text-left mt-4 overflow-y-auto max-h-40 p-2"
                            >
                                <p className="text-gray-800">
                                    <span className="font-medium">Supervisor:</span>{" "}
                                    {student.supervisor}
                                </p>
                                <p className="text-gray-800">
                                    <span className="font-medium">Category:</span>{" "}
                                    {student.category}
                                </p>
                                <p className="text-gray-800">
                                    <span className="font-medium">Roll-No:</span>{" "}
                                    {student.rollNo}
                                </p>
                                <p className="text-gray-800">
                                    <span className="font-medium">Research Area:</span>{" "}
                                    {student.researchArea}
                                </p>
                                <p className="text-gray-800">
                                    <span className="font-medium">Email:</span>{" "}
                                    <a
                                        href={`mailto:${student.email}`}
                                        className="text-blue-600 hover:underline block break-all"
                                    >
                                        {student.email}
                                    </a>
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}