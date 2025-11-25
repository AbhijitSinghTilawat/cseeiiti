// File: app/contact/page.tsx

import React from 'react';
import Image from 'next/image';

// --- 1. Data Array for All "How to Reach" Options ---
const reachOptions = [
    {
        title: "From Indore Railway Station / Bus Stand",
        distance: "Approximately 24.4 km",
        time: "Around 50 minutes",
        options: [
            "Book Taxi/Auto (fare approx. INR 350–400) up to IIT Indore, Simrol Campus"
        ],
        note: "Ask the driver to follow the route via Tejaji Nagar, which is the shortest route to IIT Indore from Indore Railway Station.",
        mapImage: "/maps/railway_map.png",
        mapLink: "https://tinyurl.com/Rail-station-to-IIT-Indore"
    },
    {
        title: "From Indore Airport",
        distance: "Approximately 35.3 km",
        time: "Around 1 hour 6 minutes",
        options: [
            "Book Taxi/Auto (fare approx. INR 500–600) up to IIT Indore, Simrol Campus"
        ],
        note: "Ask the driver to use the Tejaji Nagar route, the shortest path from the airport to IIT Indore.",
        mapImage: "/maps/airport_map.png",
        mapLink: "http://tinyurl.com/Airport-to-IIT-Indore"
    },
    {
        title: "From Chartered Bus via Bhopal",
        distance: "Approximately 200 km",
        time: "Around 3 hours 30 minutes",
        options: [
            "Book Bus/Shared Taxi (fare approx. INR 350–400) from Chartered Bus Point, Bhopal"
        ],
        note: "Ask the driver to follow the Tejaji Nagar route to reach IIT Indore, Simrol from AICTSL Main Office, opposite MGM College, Indore.",
        mapImage: "/maps/bhopal_map.png",
        mapLink: "https://tinyurl.com/y7k9wpes"
    }
];

// --- 2. Page Component ---
export default function HowToReachPage() {
    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">

                {/* --- Page Title --- */}
                <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">
                    How To Reach?
                </h1>

                {/* --- Grid Layout (3 Columns on Desktop, 1 on Mobile) --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {reachOptions.map((option, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden flex flex-col"
                        >
                            {/* --- Card Header (Title) --- */}
                            <div className="bg-blue-900 text-white p-6">
                                <h2 className="text-2xl font-semibold text-center">
                                    {option.title}
                                </h2>
                            </div>

                            {/* --- Card Content --- */}
                            <div className="p-6 space-y-4 flex-grow">
                                <p className="text-gray-700">
                                    (Distance: {option.distance}; Travel time: {option.time})
                                </p>

                                <ul className="list-disc list-inside space-y-2 text-gray-800">
                                    {option.options.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                <p className="text-gray-700">
                                    <strong className="font-semibold text-gray-900">Note:</strong> {option.note}
                                </p>
                            </div>

                            {/* --- Clickable Map Image --- */}
                            <div className="p-4 bg-gray-100 border-t border-gray-200">
                                <a
                                    href={option.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={option.mapImage}
                                        alt={`Map for ${option.title}`}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto rounded-md shadow-md cursor-pointer hover:opacity-90 transition"
                                    />
                                </a>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
}
