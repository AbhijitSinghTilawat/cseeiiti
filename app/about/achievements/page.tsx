// फ़ाइल: app/about/achievements/page.tsx

import React from 'react';
import { Trophy } from 'lucide-react'; // सुंदर आइकॉन के लिए
import Link from 'next/link';

// --- 1. आपका पूरा Achievements डेटा ---
const achievementsData = [
    "Huge congratulations to Niyati Totala (CE), Neel Kalpesh kumar Parikh (CSE) and Bhoomil Gohel (CSE) , students from the IIT Indore,for winning the gold medal at the Global Best M-GOV Awards 2023 ceremony during the World Government Summit. They created Blockbill which is a blockchain-based receipt generation app providing users with digital receipts for all their transactions.",
    "Ms. Preeti Jha, Ph.D. Student of CSE has secured the inaugural VPP Menon Gold Medal for the best Ph.D. dissertation work by a female student.",
    "Graduating student, Mr. Shah Miten Haresh, of CSE will receive The Institute Silver Medal in the 10th Convocation of IIT Indore.",
    "Graduating student, Mr. Akshay Prakash and Mr. Gaurav Kumar, of CSE will receive The Best BTech Project (BTP) Award in the 10th Convocation of IIT Indore.",
    "Graduating student, Mr. Kasturi Ajit Sharma, of CSE receives The Institute Silver Medal in the 2021 Convocation of IIT Indore.",
    "THE World University Rankings 2022: Indian Institute of Technology Indore ranked 201–250 globally and 2nd in India in Computer Science.",
    "Dr. Aruna Tiwari, Associate Professor, CSE for representing India as an Artificial Intelligence expert in the Internationalist Podcast series on \"Impact of the digital revolution on higher education\", organized by the Association of Commonwealth Universities, UK on June 8, 2021.",
    "THE World University Rankings 2021: Indian Institute of Technology Indore ranked 251–300 globally and 2nd in India in Computer Science.",
    "Team ByteBandits Vishnunarayan K, Mrigank Krishan, Vaibhav Anand & Sarthak Jain (representing IIT Indore) has secured the 1st place (India) and 8th globally in CSAW CTF (Finals) 2020 held online.",
    "Graduating student, Mr. Saptarshi Ghosh, of CSE receives The President of India Gold Medal in the 2020 Convocation of IIT Indore.",
    "Ms. Arushi Jain, of CSE receives The Institute Silver Medal in the 2020 Convocation of IIT Indore.",
    "Team FenmentTree of CSE, IIT Indore consisting of Mr. Kumar Abhinav, Mr. GVS Akhil and Mr. Kalpit Kothari made it to the World Finals of the ICPC 2020.",
    "Team ByteBandits of CSE, IIT Indore consisting of Mrigank Krishan, Vaibhav Anand, Vishnunarayan K I and Sarthak Jain secured 1st place in India and 9th globally in CSAW CTF (Finals) 2019 held at IIT Kanpur from November 6 - 9, 2019. More Details'",
    "Graduating student, Mr. Rahul Choudhary, of CSE receives The President of India Gold Medal in the 2019 Convocation of IIT Indore.",
    "Graduating student, Ms. Apoorva Joshi, of CSE receives The Institute Silver Medal in the 2019 Convocation of IIT Indore.",
    "Graduating student, Mr. Vinit Haresh Shah, of CSE receives The Institute Silver Medal in the 2019 Convocation of IIT Indore.",
    "Graduating students, Mr. E Ranjith Kumar and Mr. Prajwal Chandra Nalla, of CSE receives The Award for Best BTech Project (BTP) in the 2019 Convocation of IIT Indore.",
    "THE World University Rankings 2020: Indian Institute of Technology Indore ranked 251–300 in Computer Science. More Details'",
    "Graduating student, Mr. Vedaanta Agarwalla, of CSE receives The President of India Gold Medal in the 6th Convocation of IIT Indore.",
    "Graduating student, Mr. Varun Vinayak Joglekar, of CSE receives the Silver Medal in the 6th Convocation of IIT Indore.",
    "Aacademic CTF team of IIT Indore, ByteBandits, secured 2nd position in India and 16th position globally at CSAW CTF 2018 - the largest student-driven cybersecurity competition and awareness event globally.",
    "Graduating student, Mr. Aishwary Gagrani, of CSE receives the Silver Medal in the 5th Convocation of IIT Indore.",
    "Graduating student, Mr. Chaware Ketan Uday, of CSE receives The President of India Gold Medal in the 5th Convocation of IIT Indore."
];

// --- 2. पेज कंपोनेंट ---
export default function AchievementsPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">

            {/* --- 1. पेज का टाइटल --- */}
            <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center border-b-2 border-blue-200 pb-4">
                CSE Achievements
            </h1>

            {/* --- 2. उपलब्धियों की लिस्ट --- */}
            <div className="space-y-8">

                {achievementsData.map((achievement, index) => {
                    // 'More Details' लिंक के लिए टेक्स्ट को अलग करें
                    const parts = achievement.split("More Details'");
                    const text = parts[0];
                    const hasMoreDetails = parts.length > 1;

                    return (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-shadow duration-300 hover:shadow-xl"
                        >
                            <div className="flex items-start space-x-4">
                                {/* आइकॉन */}
                                <div className="flex-shrink-0 pt-1">
                                    <Trophy className="h-8 w-8 text-yellow-500" />
                                </div>

                                {/* टेक्स्ट */}
                                <div className="flex-1">
                                    <p className="text-lg text-gray-800 leading-relaxed">
                                        {text}
                                        {/* अगर 'More Details' है, तो लिंक दिखाएँ */}
                                        {hasMoreDetails && (
                                            <Link
                                                href="#" // <-- यहाँ असली लिंक डालें
                                                className="text-blue-600 font-semibold hover:underline ml-2"
                                            >
                                                (More Details)
                                            </Link>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}