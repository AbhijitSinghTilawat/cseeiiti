import { allAlumniData } from "@/lib/alumniData";

export default function GraduatedMSPage() {
    const alumni = allAlumniData.graduatedMS; // <-- MS ka data yahi hai

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold text-blue-900">Graduated MS Alumni</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {alumni.map((person, index) => (
                    <div
                        key={person.rollno ?? person.id ?? index}
                        className="bg-white shadow-lg rounded-xl p-4 text-center border border-gray-100"
                    >
                        <img
                            src={person.imageUrl}
                            className="w-32 h-32 mx-auto rounded-full object-cover"
                            alt={person.name}
                        />

                        <h3 className="font-bold mt-4 text-lg">{person.name}</h3>

                        {person.rollno && (
                            <p className="text-sm text-gray-700">
                                <span className="font-semibold">Roll No:</span> {person.rollno}
                            </p>
                        )}

                        {person.supervisor && (
                            <p className="text-sm text-gray-700 mt-1">
                                <span className="font-semibold">Supervisor:</span> {person.supervisor}
                            </p>
                        )}

                        {person.yearOfGraduation && (
                            <p className="text-sm text-gray-700 mt-1">
                                <span className="font-semibold">Year:</span> {person.yearOfGraduation}
                            </p>
                        )}

                        {person.specialization && (
                            <p className="text-sm text-gray-700 mt-1">
                                <span className="font-semibold">Specialization:</span> {person.specialization}
                            </p>
                        )}

                        {person.profileLink && (
                            <a
                                href={person.profileLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
                            >
                                View Profile
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
