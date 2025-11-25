// फ़ाइल: app/about/contact/page.tsx

import React from 'react';
// आइकन्स के लिए, यह Navbar से अलग फ़ाइल है इसलिए यहाँ import करना होगा
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactUsPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">

            {/* --- 1. पेज का टाइटल --- */}
            <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center border-b-2 border-blue-200 pb-4">
                Contact Us
            </h1>

            {/* --- 2. मुख्य संपर्क कार्ड --- */}
            <div className="bg-white p-8 rounded-lg shadow-2xl border border-gray-200">

                {/* HOD का नाम */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-800 mb-2">
                        Head of Department
                    </h2>
                    <p className="text-3xl font-bold text-gray-900">
                        Dr. Ranveer Singh
                    </p>
                </div>

                <div className="space-y-6 text-lg text-gray-700">

                    {/* पता */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 pt-1">
                            <MapPin className="h-6 w-6 text-blue-600" />
                        </div>
                        <address className="not-italic leading-relaxed">
                            Department of Computer Science & Engineering,
                            <br />
                            Indian Institute of Technology Indore,
                            <br />
                            Simrol, Khandwa Road, Indore 453552
                        </address>
                    </div>

                    {/* ई-मेल */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 pt-1">
                            <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="leading-relaxed">
                            <a href="mailto:ranveer@iiti.ac.in" className="block hover:text-blue-700 hover:underline">
                                ranveer [AT] iiti [dot] ac [dot] in
                            </a>
                            <a href="mailto:hodcse@iiti.ac.in" className="block hover:text-blue-700 hover:underline">
                                hodcse [AT] iiti [dot] ac [dot] in
                            </a>
                        </div>
                    </div>

                    {/* फ़ोन नंबर */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 pt-1">
                            <Phone className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="leading-relaxed">
                            <a href="tel:+917316603224" className="block hover:text-blue-700">
                                +91-731-6603224
                            </a>
                            <a href="tel:+917316603503" className="block hover:text-blue-700">
                                Office of Head: Ms Ujavala +91-731-6603503
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}