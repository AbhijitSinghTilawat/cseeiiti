// app/components/Footer/Footer.tsx

import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden border-t border-blue-700/50">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), 
                                    radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
                    backgroundSize: '100px 100px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main footer content */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-12 border-b border-blue-700/30">

                    {/* Department Info */}
                    <div className="space-y-4">

                        {/* Logo + Title */}
                        <div className="flex items-center space-x-3 mb-4">

                            {/* Logo Container */}
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                                <img
                                    src="/png/cselogo.png"
                                    alt="CSE Logo"
                                    className="w-10 h-10 object-contain rounded-lg"
                                />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                                    CSE Department
                                </h3>
                                <p className="text-sm text-blue-300 font-medium">IIT Indore</p>
                            </div>
                        </div>

                        {/* Address + Contact */}
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Department of Computer Science and Engineering,<br />
                                    Indian Institute of Technology Indore<br />
                                    Khandwa Road, Simrol, Indore<br />
                                    Madhya Pradesh 453552
                                </p>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                                <p className="text-gray-300 text-sm">
                                    +91 731 2433 000
                                </p>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                                <a
                                    href="mailto:cse@iiti.ac.in"
                                    className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                                >
                                    cse@iiti.ac.in
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
                            Quick Links
                            <div className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { href: "/admissions", label: "Admissions" },
                                { href: "/people/faculty", label: "Faculty & Staff" },
                                { href: "/research", label: "Research" },
                                { href: "/programs", label: "Academic Programs" },
                                { href: "/contact", label: "Contact Us" },
                                { href: "/sitemap", label: "Sitemap" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium"
                                    >
                                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Academic Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
                            Academics
                            <div className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { href: "/programs/btech", label: "B.Tech (CSE)" },
                                { href: "/programs/mtech", label: "M.Tech (CS)" },
                                { href: "/programs/phd", label: "Ph.D. Programs" },
                                { href: "/teaching/courses", label: "Course Catalog" },

                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium"
                                    >
                                        <div className="w-1 h-1 bg-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect & Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
                            Connect With Us
                            <div className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                        </h3>

                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            Stay updated with the latest news, research breakthroughs, and academic events from the CSE Department.
                        </p>

                        {/* Social Links */}
                        <div className="space-y-4">


                            {/* Quick Resources */}
                            <div>
                                <h4 className="text-sm font-semibold text-blue-300 mb-3">Quick Access</h4>
                                <div className="flex flex-wrap gap-2">
                                    {[

                                        { href: "https://www.iiti.ac.in/", label: "Student Portal", icon: <ExternalLink size={12} /> },

                                    ].map((resource) => (
                                        <a
                                            key={resource.href}
                                            href={resource.href}
                                            className="group flex items-center space-x-1 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 border border-white/10 hover:border-white/20 text-xs font-medium"
                                        >
                                            {resource.icon && <span className="text-blue-300">{resource.icon}</span>}
                                            <span className="text-gray-300 group-hover:text-white">
                                                {resource.label}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="py-6">
                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                        {/* Copyright */}
                        <div className="text-center lg:text-left">
                            <p className="text-gray-400 text-sm">
                                &copy; {new Date().getFullYear()} Department of Computer Science & Engineering,{" "}
                                <span className="text-blue-300 font-medium">IIT Indore</span>. All rights reserved.
                            </p>
                        </div>


                    </div>

                    {/* Accreditation */}
                    <div className="text-center mt-4 pt-4 border-t border-blue-700/30">
                        <p className="text-gray-500 text-xs">
                            An Institute of National Importance under the Institutes of Technology Act, 1961
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}


// // app/components/Footer/Footer.tsx

// import Link from "next/link";

// export default function Footer() {
//     return (
//         <footer className="bg-gray-900 text-white mt-16 pt-10 pb-6 border-t border-indigo-700">
//             <div className="container mx-auto px-4">
//                 {/* Main footer section: Links, Contact, and Address */}
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-6">
//                     {/* Column 1: Department name and address */}
//                     <div>
//                         <h3 className="text-xl font-bold text-indigo-400 mb-4">CSE Department</h3>
//                         <p className="text-gray-400 text-sm">
//                             Department of Computer Science and Engineering,<br />
//                             Indian Institute of Technology Indore<br />
//                             [City, ZIP Code]
//                         </p>
//                         <p className="mt-4 text-sm">
//                             <span className="font-semibold">Phone:</span> +91 98765 43210
//                         </p>
//                     </div>

//                     {/* Column 2: Quick Links */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//                         <ul className="space-y-2 text-sm">
//                             <li>
//                                 <Link
//                                     href="/admissions"
//                                     className="text-gray-400 hover:text-indigo-400 transition duration-300"
//                                 >
//                                     Admissions
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link
//                                     href="/faculty"
//                                     className="text-gray-400 hover:text-indigo-400 transition duration-300"
//                                 >
//                                     Faculty
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link
//                                     href="/contact"
//                                     className="text-gray-400 hover:text-indigo-400 transition duration-300"
//                                 >
//                                     Contact Us
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link
//                                     href="/sitemap"
//                                     className="text-gray-400 hover:text-indigo-400 transition duration-300"
//                                 >
//                                     Sitemap
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Column 3: Academic Links */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4">Academics</h3>
//                         <ul className="space-y-2 text-sm">
//                             <li>
//                                 <Link
//                                     href="/programs/btech"
//                                     className="text-gray-400 hover:text-indigo-400 transition duration-300"
//                                 >
//                                     B.Tech (CSE)
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link
//                                     href="/programs/mtech"
//                                     className="text-gray-400 hover:text-indigo-400 transition duration-300"
//                                 >
//                                     M.Tech (CS)
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link
//                                     href="/research"
//                                     className="text-gray-400 hover:text-indigo-400 transition duration-300"
//                                 >
//                                     Research Labs
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link
//                                     href="/resources"
//                                     className="text-gray-400 hover:text-indigo-400 transition duration-300"
//                                 >
//                                     Student Resources
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Column 4: Social Media and Announcements */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
//                         {/* You can add social media icons here (e.g., Twitter, LinkedIn) */}
//                         <p className="text-gray-400 text-sm">
//                             Follow us on social media for the latest updates and announcements.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Copyright Section */}
//                 <div className="text-center text-sm text-gray-500 pt-4">
//                     &copy; {new Date().getFullYear()} CSE Department, [Institute Name]. All rights reserved.
//                 </div>
//             </div>
//         </footer>
//     );
// }
