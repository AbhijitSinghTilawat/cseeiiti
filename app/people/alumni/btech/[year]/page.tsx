import React from "react";
import Image from "next/image";
import Link from "next/link";
import { allAlumniData } from "@/lib/studentData"; // <-- अगर तुम्हारी फ़ाइल का नाम alumniData.ts है तो बदलकर "@/lib/alumniData" रखो

type Props = {
  params: {
    year: string;
  };
};

export default function BTechAlumniYearPage({ params }: Props) {
  const { year } = params; // await हटाया गया
  const alumniRaw = allAlumniData[year] ?? [];
  const alumni = alumniRaw.slice().sort((a, b) => a.name.localeCompare(b.name));
  const displayYear = year.replace(/-/g, "–");
  const placeholder = "/png/avatar-placeholder.png";

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">
            BTech Alumni – Batch of {displayYear}
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            {alumni.length} alumni found
          </p>
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
          {alumni.map((person) => (
            <article
              key={person.id}
              className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-105 w-full max-w-[190px] sm:max-w-[220px]"
              aria-label={`Alumnus ${person.name}`}
            >
              <div className="flex flex-col items-center justify-center pt-6 pb-4 bg-white">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-md overflow-hidden">
                  <Image
                    src={person.imageUrl || placeholder}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 120px, 128px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-blue-900 text-white px-3 py-3 text-center flex flex-col justify-center gap-1 min-h-[90px]">
                <h3 className="font-bold text-sm sm:text-[0.95rem] uppercase tracking-wide leading-tight">
                  {person.name}
                </h3>
                <p className="text-xs sm:text-sm text-blue-200 font-mono">
                  {person.id}
                </p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-700 text-center">
          Alumni data for the batch of {displayYear} is not yet available.
        </p>
      )}
    </div>
  );
}



// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { allAlumniData } from "@/lib/alumniData";

// type Props = {
//   params: {
//     year: string;
//   };
// };

// export default async function BTechAlumniYearPage({ params }: Props) {
//   const { year } = await params;
//   const alumniRaw = allAlumniData[year] ?? [];
//   const alumni = alumniRaw.slice().sort((a, b) => a.name.localeCompare(b.name));
//   const displayYear = year.replace(/-/g, "–");
//   const placeholder = "/png/avatar-placeholder.png";

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="flex items-center justify-between mb-8 gap-4">
//         <div>
//           <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">
//             BTech Alumni – Batch of {displayYear}
//           </h1>
//           <p className="text-sm text-gray-600 mt-1">
//             {alumni.length} alumni found
//           </p>
//         </div>

//         <Link
//           href="/people/alumni"
//           className="inline-block text-sm px-3 py-2 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800"
//         >
//           ← Back to Alumni index
//         </Link>
//       </div>

//       {alumni.length > 0 ? (
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
//           {alumni.map((person) => (
//             <article
//               key={person.id}
//               className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-105 w-full max-w-[190px] sm:max-w-[220px]"
//               aria-label={`Alumnus ${person.name}`}
//             >
//               <div className="flex flex-col items-center justify-center pt-6 pb-4 bg-white">
//                 <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-md overflow-hidden">
//                   <Image
//                     src={person.imageUrl || placeholder}
//                     alt={person.name}
//                     fill
//                     sizes="(max-width: 640px) 80px, (max-width: 1024px) 120px, 128px"
//                     className="object-cover"
//                   />
//                 </div>
//               </div>

//               <div className="bg-blue-900 text-white px-3 py-3 text-center flex flex-col justify-center gap-1 min-h-[90px]">
//                 <h3 className="font-bold text-sm sm:text-[0.95rem] uppercase tracking-wide leading-tight">
//                   {person.name}
//                 </h3>
//                 <p className="text-xs sm:text-sm text-blue-200 font-mono">
//                   {person.id}
//                 </p>
//               </div>
//             </article>
//           ))}
//         </div>
//       ) : (
//         <p className="text-lg text-gray-700 text-center">
//           Alumni data for the batch of {displayYear} is not yet available.
//         </p>
//       )}
//     </div>
//   );
// }
