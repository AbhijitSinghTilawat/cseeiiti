// फ़ाइल: app/about/indore/page.tsx

import React from 'react';

export default function AboutIndorePage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">

            {/* --- 1. पेज का टाइटल --- */}
            <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center border-b-2 border-blue-200 pb-4">
                About Indore
            </h1>

            {/* --- 2. आपका टेक्स्ट --- */}
            <div className="space-y-6 text-lg text-gray-800 leading-relaxed">

                {/* --- पैराग्राफ 1 --- */}
                <p>
                    Indore is the <strong className="font-semibold text-blue-800">commercial capital</strong> of
                    Madhya Pradesh with many industries in the area of mechanical
                    engineering, pharmacy and electronics. It is an <strong className="font-semibold text-blue-800">educational-hub</strong> and have
                    institutes of international repute like Raja Ramanna Center for
                    Advanced Technology (RRCAT), IUCA, and IIM Indore. Indore has young and
                    vibrant students' population. The city is well connected by road, rail
                    and air and is strategically located in close proximity to Mumbai and
                    Delhi.
                </p>

                {/* --- पैराग्राफ 2 --- */}
                <p>
                    Indore is the largest city in the state of Madhya Pradesh. It is
                    situated on the banks of the River Khan and Sarawati. The two rivulets
                    unite at the center of the city where a small temple of Sangamnath or
                    Indreshwar exists. The city of Indore derived its name from the deity
                    itself. At an altitude of 553 m above sea level on the Malwa Plateau,
                    this city is nearly the heart of the nation. With growing population,
                    the city is expanding rapidly and so is its tourism industry. Travel to
                    Indore city will present a <strong className="font-semibold text-blue-800">blissful blend of the past and the future</strong>.
                </p>

                {/* --- पैराग्राफ 3 (इतिहास) --- */}
                <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg italic text-gray-700">
                    The founders of Indore were the ancestors of the present zamindars
                    of the region which spread from the banks of Narmada to the borders of
                    Rajputana. Their headquarters were at a village called Kampel. In Mughal
                    times, the founders of these families received the title of Chaudhari,
                    which established their claim to the land. In the 18th century, the
                    control of Malwa passed to the Peshwa clan, and the Chaudharis came to
                    be known as "Mandloi"s (derived from Mandals meaning districts). The
                    Holkars conferred the title of Rao Raja upon the family. The family
                    retained its possessions of royalty, which included having an elephant,
                    Nishan, Danka and Gadi even after the advent of Holkars and also
                    retained the right of performing the first puja of Dushera (Shami Pujan)
                    before the Holkar rulers.
                </blockquote>
            </div>

        </div>
    );
}