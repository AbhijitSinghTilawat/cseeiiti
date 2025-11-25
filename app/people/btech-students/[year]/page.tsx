import React from 'react';
import Image from 'next/image';
import { allStudentsData } from '@/lib/studentData';

export default async function BTechYearPage(props: { params: Promise<{ year: string }> }) {
    const { year } = await props.params;
    const yearKey = year as keyof typeof allStudentsData;
    const students = allStudentsData[yearKey] || [];

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8 sm:mb-10 text-center">
                {year} BTech Students
            </h1>

            {students.length > 0 ? (
                <div
                    className="
                        grid 
                        grid-cols-2          /* mobile: 2 card per row */
                        sm:grid-cols-2       /* small: 2 cards per row */
                        md:grid-cols-3       /* md: 3 */
                        lg:grid-cols-6       /* lg: 6 */
                        gap-4 sm:gap-6 lg:gap-8
                        justify-items-center /* center cards in each cell */
                    "
                >
                    {students.map((student) => (
                        <div
                            key={student.id}
                            className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden
                                       border border-gray-200 transform transition-transform duration-300 hover:scale-105
                                       w-full max-w-[190px] sm:max-w-[200px]"
                        >
                            {/* BIG CARD TOP AREA */}
                            <div className="flex flex-col items-center justify-center pt-6 pb-4 bg-white">
                                {/* PASSPORT-SIZE (1:1) IMAGE INSIDE CARD */}
                                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-md overflow-hidden">
                                    <Image
                                        src={student.imageUrl}       // or student.profileImagePath
                                        alt={`Photo of ${student.name}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* TEXT BAND (SAME HEIGHT FOR ALL) */}
                            <div className="bg-blue-900 text-white px-3 py-3 text-center
                                            flex flex-col justify-center gap-1 min-h-[90px]">
                                <h3 className="font-bold text-sm sm:text-[0.9rem] uppercase tracking-wide leading-tight">
                                    {student.name}
                                </h3>
                                <p className="text-xs sm:text-sm text-blue-200 font-mono">
                                    {student.id /* or student.rollNo */}
                                </p>
                            </div>

                            {/* OPTIONAL white strip at bottom */}
                            <div className="h-3 bg-white" />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-lg text-gray-700 text-center">
                    Student data for the batch of {year} is not yet available.
                </p>
            )}
        </div>
    );
}
