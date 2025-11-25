// फ़ाइल: app/research/publications/books/page.tsx

import React from 'react';

// --- 1. आपका पूरा Books डेटा ---
const booksData = [
    "Anirban Sengupta, \"High-Level Synthesis based Methodologies for Hardware Security, Trust and IP Protection\", The Institute of Engineering and Technology (IET), July 2024",
    "Anirban Sengupta, \"Physical Biometrics for Hardware Security of DSP and Machine Learning Coprocessors\", The Institute of Engineering and Technology (IET), July 2023, Book DOI: 10.1049/PBCS080E",
    "Anirban Sengupta, \"Secured Hardware Accelerators for DSP and Image Processing Applications\",The Institute of Engineering and Technology (IET), Jan 2021, Print: 978-1-83953-306-8, eBook: 978-1-83953-307-5",
    "Anirban Sengupta, \"Frontiers in Securing IP Cores - Forensic detective control and obfuscation techniques\", The Institute of Engineering and Technology (IET), 2020, ISBN-10: 1-83953-031-6, ISBN-13: 978-1-83953-031-9",
    "Anirban Sengupta, Saraju P. Mohanty, \"IP Core Protection and Hardware-Assisted Security for Consumer Electronics\", The Institute of Engineering and Technology (IET), 2019, Book ISBN: 978-1-78561-799-7, e-ISBN: 978-1-78561-800-0",
    "Anirban Sengupta, Sudeb Dasgupta, Virendra Singh, Rohit Sharma, SK Vishvakarma, \"VLSI Design and Test\", Springer Nature - Communications in Computer and Information Science, Vol. 1066, 2019, Book ISBN: 978-981-329-767-8"
];

// --- 2. पेज कंपोनेंट ---
export default function BooksPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">
                Books
            </h1>

            {/* किताबों की लिस्ट */}
            <div className="space-y-6">
                {booksData.map((book, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-lg border border-gray-200"
                    >
                        <div className="flex items-start">
                            {/* आपकी "count wise" गिनती */}
                            <span className="text-xl font-bold text-blue-800 mr-4">
                                {index + 1}.
                            </span>
                            {/* किताब का टेक्स्ट */}
                            <p className="text-gray-700 leading-relaxed flex-1">
                                {book}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}