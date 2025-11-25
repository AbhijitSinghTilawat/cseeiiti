"use client";

import React, { useState } from "react";
import { allAlumniData } from "@/lib/alumniData";

/**
 * Small client-side image component that uses an onError handler safely
 * (must be in a Client Component).
 */
function ImageWithFallback({ src, alt, className, fallback }) {
  const [currentSrc, setCurrentSrc] = useState(src || fallback);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (currentSrc !== fallback) setCurrentSrc(fallback);
      }}
    />
  );
}

export default function GraduatedMTechPage() {
  const alumni = allAlumniData.graduatedMTech || [];

  // Put a default fallback image file at: public/alumini/default-avatar.jpg
  const FALLBACK = "/alumini/default-avatar.jpg";

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-blue-900">Graduated MTech Alumni</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {alumni.map((person) => {
          // support multiple possible fields used across your data
          const src = person.imageUrl || person.img || person.image || FALLBACK;

          return (
            <div
              key={person.rollno}
              className="bg-white shadow-lg rounded-xl p-4 text-center border border-gray-200"
            >
              <ImageWithFallback
                src={src}
                fallback={FALLBACK}
                alt={person.name || "Alumni"}
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />

              <h3 className="font-bold mt-4 text-lg">{person.name}</h3>

              <p className="text-sm text-gray-700 mt-1">
                <span className="font-semibold">Roll No:</span> {person.rollno}
              </p>

              {person.specialization && (
                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-semibold">Specialization:</span> {person.specialization}
                </p>
              )}

              {person.supervisor && (
                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-semibold">Supervisor:</span> {person.supervisor}
                </p>
              )}

              {person.yearOfGraduation && (
                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-semibold">Graduation Year:</span> {person.yearOfGraduation}
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
          );
        })}
      </div>
    </div>
  );
}
