// lib/content.tsx
import React from 'react';

// --- MARQUEE (टेक्स्ट स्लाइडर) ---
// यहाँ आप टेक्स्ट स्लाइडर के आइटम बदल सकते हैं
export const marqueeItems = [
    {
        id: 1,
        text: "Ph.D. Admissions 2025-26 are now OPEN. Apply Now!",
        href: "/admissions", // लिंक (अगर नहीं चाहिए तो null कर दें)
        isStrong: true // टेक्स्ट को बोल्ड (font-semibold) करने के लिए
    },
    {
        id: 2,
        text: "Welcome to the Department of Computer Science & Engineering, IIT Indore.",
        href: null, // यह सिर्फ टेक्स्ट है, लिंक नहीं
        isStrong: false
    },
    {
        id: 3,
        text: "Upcoming Workshop on 'Quantum Computing' next week.",
        href: "/events",
        isStrong: true
    },

    // { 
    //   id: 4, 
    //   text: "यहाँ एक और ज़रूरी खबर जोड़ें", 
    //   href: "#", 
    //   isStrong: true 
    // },
];


// --- NEWS (खबरें) ---
// यहाँ आप अपनी खबरें बदल सकते हैं या नई जोड़ सकते हैं
export const newsItems = [
    {
        id: 1,
        content: (
            <>
                Professor Kapil Ahuja, receives the <strong>Presidential National Teachers Awards 2024</strong>.
            </>
        )
    },
    {
        id: 2,
        content: (
            <>
                Mr. Mukul Jain, of CSE receives <strong>The President of India Gold Medal</strong> in the 2024 Convocation.
            </>
        )
    },
    {
        id: 3,
        content: (
            <>
                Ms. Aditya Dixit, Ph.D. Student, has been awarded with the Institute a Best Research Paper Award 2024.
            </>
        )
    },

];


// --- EVENTS (इवेंट्स) ---
// यहाँ आप अपने इवेंट्स बदल सकते हैं या नए जोड़ सकते हैं
export const eventItems = [
    { id: 1, text: "TEQIP course on Introduction to Scientific Computing in Engineering", href: "#" },
    { id: 2, text: "TEQIP course on Fundamental of Data Analytics", href: "#" },
    { id: 3, text: "Expert talk by Prof. Potala Revan", href: "#" },
];


// --- RECRUITMENT (भर्ती) ---
// यहाँ आप अपने रिक्रूटमेंट लिंक बदल सकते हैं या नए जोड़ सकते हैं
export const recruitmentItems = [
    { id: 1, text: "Advertisement for Admission to Ph.D. Program for Academic Year 2025-2026", href: "/admissions" },
    { id: 2, text: "Faculty Recruitment", href: "/join" },
];


// // lib/content.tsx
// import React from 'react';

// // --- NEWS (खबरें) ---
// // यहाँ आप अपनी खबरें बदल सकते हैं या नई जोड़ सकते हैं
// export const newsItems = [
//     {
//         id: 1,
//         content: (
//             <>
//                 Professor Kapil Ahuja, receives the <strong>Presidential National Teachers Awards 2024</strong>.
//             </>
//         )
//     },
//     {
//         id: 2,
//         content: (
//             <>
//                 Mr. Mukul Jain, of CSE receives <strong>The President of India Gold Medal</strong> in the 2024 Convocation.
//             </>
//         )
//     },
//     {
//         id: 3,
//         content: (
//             <>
//                 Ms. Aditya Dixit, Ph.D. Student, has been awarded with the Institute a Best Research Paper Award 2024.
//             </>
//         )
//     },

//     // {
//     //   id: 4,
//     //   content: (
//     //     <>
//     //       यहाँ अपनी <strong>नई खबर</strong> जोड़ें।
//     //     </>
//     //   )
//     // },
// ];


// // --- EVENTS (इवेंट्स) ---
// // यहाँ आप अपने इवेंट्स बदल सकते हैं या नए जोड़ सकते हैं
// export const eventItems = [
//     { id: 1, text: "TEQIP course on Introduction to Scientific Computing in Engineering", href: "#" },
//     { id: 2, text: "TEQIP course on Fundamental of Data Analytics", href: "#" },
//     { id: 3, text: "Expert talk by Prof. Potala Revan", href: "#" },
//     // { id: 4, text: "नया इवेंट यहाँ जोड़ें", href: "#" },
// ];


// // --- RECRUITMENT (भर्ती) ---
// // यहाँ आप अपने रिक्रूटमेंट लिंक बदल सकते हैं या नए जोड़ सकते हैं
// export const recruitmentItems = [
//     { id: 1, text: "Advertisement for Admission to Ph.D. Program for Academic Year 2025-2026", href: "/admissions" },
//     { id: 2, text: "Faculty Recruitment", href: "/join" },
//     // { id: 3, text: "नया लिंक यहाँ जोड़ें", href: "#" },
// ];