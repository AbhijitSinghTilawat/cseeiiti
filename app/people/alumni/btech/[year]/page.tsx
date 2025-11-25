// app/people/alumni/btech/[year]/page.tsx
import React from "react";
import Link from "next/link";
import { allAlumniData } from "@/lib/alumniData";

type Props = {
  params: { year: string | undefined | null } | Promise<{ year: string | undefined | null }>;
};

/**
 * Ensure image path starts with a leading slash and is safe for use in <img src>.
 * Returns placeholder when input is falsy or encoding fails.
 */
function normalizeImgPath(raw?: string | null, placeholder = "/png/avatar-placeholder.png") {
  if (!raw) return placeholder;
  const withLeading = raw.startsWith("/") ? raw : `/${raw}`;
  try {
    // encodeURI so spaces and special chars don't break src
    return encodeURI(withLeading);
  } catch {
    return placeholder;
  }
}

export default async function BTechAlumniYearPage({ params }: Props) {
  // Next.js may pass params as a Promise in some contexts — unwrap safely
  const { year } = (await params) ?? { year: undefined };
  const safeYear = typeof year === "string" ? year : "";

  // Type-safe indexing: cast to indexable Record so TS allows dynamic keys
  const alumniRaw = (allAlumniData as Record<string, any[]>)[safeYear] ?? [];

  // Ensure we have an array, then sort by name (safely)
  const alumni = Array.isArray(alumniRaw)
    ? alumniRaw.slice().sort((a, b) => ((a?.name ?? "") as string).localeCompare((b?.name ?? "") as string))
    : [];

  const displayYear = safeYear ? safeYear.replace(/-/g, "–") : "Unknown";
  const placeholder = "/png/avatar-placeholder.png";

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">
            BTech Alumni – Batch of {displayYear}
          </h1>
          <p className="text-sm text-gray-600 mt-1">{alumni.length} alumni found</p>
        </div>

        <Link
          href="/people/alumni"
          className="inline-block text-sm px-3 py-2 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800"
        >
          ← Back to Alumni index
        </Link>
      </div>

      {alumni.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {alumni.map((person: any, idx: number) => {
            const imgSrc = normalizeImgPath(person.imageUrl ?? person.img ?? person.image ?? placeholder, placeholder);
            const id = person.id ?? person.rollno ?? person.name ?? `al-${idx}`;

            return (
              <article
                key={id}
                className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-105 w-full max-w-[190px] sm:max-w-[220px]"
                aria-label={`Alumnus ${person.name ?? "Alumnus"}`}
              >
                <div className="flex flex-col items-center justify-center pt-6 pb-4 bg-white">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-md overflow-hidden">
                    {/* Use plain <img> to avoid Next Image validation issues with dynamic/outside paths */}
                    <img
                      src={imgSrc}
                      alt={person.name ?? "Alumnus"}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        if (!target.dataset.fallback) {
                          target.src = placeholder;
                          target.dataset.fallback = "1";
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="bg-blue-900 text-white px-3 py-3 text-center flex flex-col justify-center gap-1 min-h-[90px]">
                  <h3 className="font-bold text-sm sm:text-[0.95rem] uppercase tracking-wide leading-tight">
                    {person.name ?? "Unnamed"}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-200 font-mono">
                    {person.id ?? person.rollno ?? ""}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <p className="text-lg text-gray-700 text-center">Alumni data for the batch of {displayYear} is not yet available.</p>
      )}
    </div>
  );
}
