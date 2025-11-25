import { getStaffMembers } from "@/lib/StaffData"; // Correct function imported

export default async function StaffPage() {
    // Fetches staff members
    const staffMembers = await getStaffMembers();

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="container mx-auto">
                {/* Updated Title and Emoji */}
                <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-indigo-600 pb-2 mb-8">
                    👥 Staff Members
                </h1>

                {/* Updated Description */}
                <p className="text-lg text-gray-700 mb-10">
                    Our department's dedicated technical and administrative staff.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Use staffMembers variable here */}
                    {staffMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-[1.02] flex flex-col items-center text-center"
                        >
                            <img
                                src={
                                    member.profileImagePath ||
                                    "https://placehold.co/150x150/cccccc/000000?text=NA"
                                }
                                alt={member.name}
                                // Updated class to be square, like your image
                                className="w-40 h-40 rounded-lg mb-4 object-cover border-4 border-indigo-200"
                            />

                            <h2 className="text-2xl font-bold text-indigo-700 mb-1">
                                {member.name}
                            </h2>
                            <p className="text-md font-semibold text-gray-600 mb-4">
                                {member.designation}
                            </p>

                            <div className="space-y-2 w-full">
                                {/* Specialization block is removed */}

                                <p className="text-gray-800">
                                    <span className="font-medium">Email:</span>{" "}
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="text-blue-600 hover:underline block break-all"
                                    >
                                        {member.email}
                                    </a>
                                </p>

                                {/* Added Tel block */}
                                <p className="text-gray-800">
                                    <span className="font-medium">Tel:</span>{" "}
                                    {member.tel || "N/A"}
                                </p>
                            </div>

                            {/* "View Full Profile" button is removed */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}