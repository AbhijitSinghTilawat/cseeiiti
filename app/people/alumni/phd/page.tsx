import React from "react";
import { allAlumniData } from "@/lib/alumniData";

export default function GraduatedPhDPage() {
    const alumni: any[] = (allAlumniData as any).graduatedPhD ?? [];

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold text-blue-900">Graduated PhD Alumni</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {alumni.map((person: any, idx: number) => {
                    const key = person.rollno ?? person.id ?? `phd-${idx}`;
                    // ensure absolute path (leading slash)
                    const imageSrc = (person.imageUrl ?? person.img ?? "").startsWith("/")
                        ? (person.imageUrl ?? person.img)
                        : `/${person.imageUrl ?? person.img}`;

                    const thesis = person.thesisTitle ?? person.thesis ?? person.Thesistitle ?? "";
                    const year = person.yearOfGraduation ?? person.year ?? "";

                    return (
                        <div key={key} className="bg-white shadow-lg rounded-xl p-4 text-center border border-gray-100">
                            {/* No onError here — server component */}
                            <img
                                src={imageSrc || "/png/default-avatar.png"}
                                alt={person.name ?? "Alumni"}
                                className="w-32 h-32 mx-auto rounded-full object-cover"
                            />

                            <h3 className="font-bold mt-4 text-lg">{person.name ?? "Unnamed"}</h3>

                            {person.rollno && (
                                <p className="text-sm text-gray-700 mt-1"><span className="font-semibold">Roll No:</span> {person.rollno}</p>
                            )}

                            {person.supervisor && (
                                <p className="text-sm text-gray-700 mt-1"><span className="font-semibold">Supervisor:</span> {person.supervisor}</p>
                            )}

                            {person.specialization && (
                                <p className="text-sm text-gray-700 mt-1"><span className="font-semibold">Specialization:</span> {person.specialization}</p>
                            )}

                            {year && (
                                <p className="text-sm text-gray-700 mt-1"><span className="font-semibold">Year:</span> {year}</p>
                            )}

                            {thesis && <p className="text-xs text-gray-500 mt-2 italic">Thesis: {thesis}</p>}

                            {person.profileLink && (
                                <a href={person.profileLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
                                    View Profile
                                </a>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
