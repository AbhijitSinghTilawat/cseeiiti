import { getFacultyMembers } from "@/lib/facultyData";

export default async function FacultyPage() {
    const facultyMembers = await getFacultyMembers();

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="container mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-indigo-600 pb-2 mb-8">
                    💻 Faculty Members
                </h1>
                <p className="text-lg text-gray-700 mb-10">
                    Our department has experienced and highly qualified faculty members
                    dedicated to teaching and research excellence.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facultyMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-[1.02] h-96 overflow-hidden"
                        >
                            <div className="p-6 flex flex-col items-center text-center h-full">

                                {/* Fixed Top Section */}
                                <img
                                    src={
                                        member.profileImagePath ||
                                        "https://placehold.co/150x150/cccccc/000000?text=NA"
                                    }
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-indigo-200 flex-shrink-0"
                                />

                                <h2 className="text-2xl font-bold text-indigo-700 mb-1">
                                    {member.name}
                                </h2>

                                {member.education && (
                                    <p className="text-sm font-medium text-gray-500 mb-2 italic">
                                        {member.education}
                                    </p>
                                )}

                                <p className="text-md font-semibold text-gray-600 mb-4">
                                    {member.designation}
                                </p>

                                {/* Scrollable Section */}
                                <div className="space-y-2 w-full text-sm overflow-y-auto flex-grow custom-scrollbar">


                                    <p className="text-gray-800 scroll-anim">
                                        <span className="font-medium">Specialization:</span>{" "}
                                        {member.specialization}
                                    </p>

                                    <p className="text-gray-800 break-all scroll-anim">
                                        <span className="font-medium">Email:</span>{" "}
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {member.email}
                                        </a>
                                    </p>

                                    <p className="text-gray-800 scroll-anim">
                                        <span className="font-medium">Contact:</span>{" "}
                                        {member.contact || "N/A"}
                                    </p>

                                </div>

                                <a
                                    href={member.profileUrl || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300 text-sm"
                                >
                                    View Full Profile
                                </a>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}
