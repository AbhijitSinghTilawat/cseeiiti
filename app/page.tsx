"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  FlaskConical,
  Mail,
  BookOpen,
  GraduationCap,
  Calendar,
  ChevronRight
} from "lucide-react";

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Marquee from "react-fast-marquee";

import { newsItems, eventItems, recruitmentItems, marqueeItems } from '../lib/content';

export default function Home() {

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 4000 })]
  );

  const slides = [
    { imgSrc: "/sliderimage/1.png", title: "13th Convocation" },
    { imgSrc: "/sliderimage/2.jpg", title: "ICCCNT 2025 is being held at IIT Indore from July 6–11, 2025" },
    { imgSrc: "/sliderimage/3.jpeg", title: "Farewell of Prof. N. S. Chaudhari" },
    { imgSrc: "/sliderimage/4.jpeg", title: "Symposium 3.0" },
    { imgSrc: "/sliderimage/5.jpeg", title: "CSE Faculty Members" },
    { imgSrc: "/sliderimage/6.jpg", title: "International Collaboration" },
    { imgSrc: "/sliderimage/7.jpg", title: " CSE Faculty Members with Director, IIT Indoren" },
    { imgSrc: "/sliderimage/8.jpg", title: " Research Projects and Publication Statistics from 2014 to 2025" },
    { imgSrc: "/sliderimage/9.jpg", title: "Major Research Areas of the Department" },
    { imgSrc: "/sliderimage/10.jpg", title: "Major Research Areas of the Department" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-800 text-gray-900 dark:text-white font-sans">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 2%, transparent 0%), 
                              radial-gradient(circle at 75px 75px, currentColor 2%, transparent 0%)`,
            backgroundSize: '100px 100px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="text-center">

            <div className="flex justify-center mb-6">
              <div className="w-[clamp(96px,12vw,240px)]">
                <Image
                  src="/png/cselogo.png"
                  alt="CSE Department Logo"
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-contain animate-float-slow"
                  priority
                />
              </div>
            </div>

            <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 dark:bg-blue-400/10 rounded-full border border-blue-500/30 dark:border-blue-400/30 mb-4">
              <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300 tracking-wide">
                DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
              </span>
            </div>

            <h1 className="text-[clamp(1.75rem,4.5vw,3.75rem)] font-bold tracking-tight mb-3">
              <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 dark:from-blue-100 dark:via-blue-300 dark:to-cyan-200 bg-clip-text text-transparent">
                CSE IITI
              </span>
            </h1>

            <h2 className="text-[clamp(0.95rem,1.8vw,1.5rem)] text-gray-600 dark:text-gray-300 mb-6 font-medium tracking-wide">
              भारतीय प्रौद्योगिकी संस्थान इंदौर • Indian Institute of Technology Indore
            </h2>

            <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] max-w-3xl mx-auto mb-8 leading-relaxed text-gray-700 dark:text-gray-300 font-light">
              Pioneering excellence in computer science education, research, and innovation. We are committed to shaping the future of technology through cutting-edge research and world-class academic programs.
            </p>

          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-slate-900 dark:bg-slate-700 text-white py-3 shadow-inner border-y border-blue-500/30">
        <Marquee speed={55} pauseOnHover gradient={false}>
          {marqueeItems.map((item) => {
            const itemClasses = `mx-6 sm:mx-10 md:mx-16 text-[clamp(0.8rem,1.4vw,1rem)] tracking-wide ${item.isStrong ? "font-semibold" : "font-normal opacity-85"}`;
            if (item.href) {
              return (
                <Link key={item.id} href={item.href} className={`${itemClasses} hover:text-blue-300 transition-colors duration-200`}>
                  {item.text}
                </Link>
              );
            }
            return <span key={item.id} className={itemClasses}>{item.text}</span>;
          })}
        </Marquee>
      </div>

      {/* News & Highlights — LARGER Banner */}
      <section className="py-12 md:py-16 bg-slate-100/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-[clamp(1.25rem,2.8vw,2.5rem)] font-bold text-gray-900 dark:text-white mb-2">
              News & Highlights
            </h2>
            <p className="text-[clamp(0.9rem,1.4vw,1.125rem)] text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Stay updated with our latest announcements and events.
            </p>
          </div>

          <div
            className="overflow-hidden rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50"
            ref={emblaRef}
            role="region"
            aria-label="News slider"
          >
            <div className="flex">
              {slides.map((slide, index) => (
                <div className="min-w-full flex-none" key={index}>
                  {/* Responsive wrapper: mobile small height, larger heights on bigger screens */}
                  <div
                    className="
                      relative w-full
                      h-[240px]        /* mobile */
                      sm:h-[300px]     /* small tablets */
                      md:h-[380px]     /* tablets */
                      lg:h-[420px]     /* desktop */
                      xl:h-[480px]     /* large desktop */
                      bg-slate-900/30 dark:bg-black/30
                      rounded-2xl overflow-hidden flex items-center justify-center
                    "
                  >
                    {/* Image: mobile = cover (fills), sm+ = contain (show whole image) */}
                    <Image
                      src={slide.imgSrc}
                      alt={slide.title}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1100px"
                      // Use Tailwind responsive object-fit classes: default (mobile) uses cover, from sm up use contain
                      className="rounded-2xl object-cover sm:object-contain object-center"
                      style={{ objectPosition: 'center' }}
                    />

                    {/* gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl pointer-events-none" />

                    {/* Title */}
                    <div className="absolute left-4 right-4 bottom-4 text-white">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold drop-shadow">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Academics */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
        <div className="text-center mb-10">
          <h2 className="text-[clamp(1.25rem,2.8vw,2.5rem)] font-bold text-gray-900 dark:text-white mb-2">
            Academics
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="flex flex-col bg-white dark:bg-slate-800/60 shadow-2xl rounded-2xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-blue-500/10 hover:border-blue-500/50">
            <h3 className="text-[clamp(1rem,1.6vw,1.5rem)] font-bold mb-3 text-blue-700 dark:text-blue-300">Undergraduate Program</h3>
            <p className="text-[clamp(0.9rem,1.2vw,1rem)] text-gray-600 dark:text-gray-300 mb-4 flex-grow">
              The B.Tech. Program in Computer Science Engineering is a four-year program with selection through the Joint Entrance Examination...
            </p>
            <Link href="/programs/btech" className="mt-2 inline-block text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300">
              Read more
            </Link>
          </div>

          <div className="flex flex-col bg-white dark:bg-slate-800/60 shadow-2xl rounded-2xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-blue-500/10 hover:border-blue-500/50">
            <h3 className="text-[clamp(1rem,1.6vw,1.5rem)] font-bold mb-3 text-blue-700 dark:text-blue-300">Masters Program</h3>
            <p className="text-[clamp(0.9rem,1.2vw,1rem)] text-gray-600 dark:text-gray-300 mb-4 flex-grow">
              MS Research program of the Department of Computer Science & Engineering is a two years research oriented Masters program...
            </p>
            <Link href="/programs/mstech" className="mt-2 inline-block text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300">
              Read more
            </Link>
          </div>

          <div className="flex flex-col bg-white dark:bg-slate-800/60 shadow-2xl rounded-2xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-blue-500/10 hover:border-blue-500/50">
            <h3 className="text-[clamp(1rem,1.6vw,1.5rem)] font-bold mb-3 text-blue-700 dark:text-blue-300">Doctoral Program</h3>
            <p className="text-[clamp(0.9rem,1.2vw,1rem)] text-gray-600 dark:text-gray-300 mb-4 flex-grow">
              Department of Computer Science and Engineering at Indore offers Doctor of Philosophy (PhD) program in almost all current areas...
            </p>
            <Link href="/programs/phd" className="mt-2 inline-block text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300">
              Read more
            </Link>
          </div>
        </div>
      </section>

      {/* News / Events / Recruitment — EQUAL SIZE CONTAINERS WITH SCROLL */}
      <section className="bg-slate-100/50 dark:bg-slate-900/50 py-12 md:py-20 border-t border-gray-200 dark:border-gray-700/50">
        <div className="max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* NEWS */}
          <div className="flex flex-col">
            <div className="bg-blue-900 text-white p-3 rounded-t-lg shadow-lg">
              <h3 className="text-sm md:text-lg font-bold tracking-wide">NEWS (2025)</h3>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-b-lg shadow-lg 
              border-x border-b border-gray-200 dark:border-gray-700 
              overflow-y-auto h-[clamp(300px,40vh,500px)]">
              <ul className="space-y-3">
                {newsItems.map((item) => (
                  <li key={item.id} className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                      {item.content}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* EVENTS */}
          <div className="flex flex-col">
            <div className="bg-blue-900 text-white p-3 rounded-t-lg shadow-lg">
              <h3 className="text-sm md:text-lg font-bold tracking-wide">EVENTS</h3>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-b-lg shadow-lg 
              border-x border-b border-gray-200 dark:border-gray-700 
              overflow-y-auto h-[clamp(300px,40vh,500px)]">
              <ul className="space-y-3">
                {eventItems.map((item) => (
                  <li key={item.id} className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <Link href={item.href} className="text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RECRUITMENT */}
          <div className="flex flex-col">
            <div className="bg-blue-900 text-white p-3 rounded-t-lg shadow-lg">
              <h3 className="text-sm md:text-lg font-bold tracking-wide">RECRUITMENT</h3>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-b-lg shadow-lg 
              border-x border-b border-gray-200 dark:border-gray-700 
              overflow-y-auto h-[clamp(300px,40vh,500px)]">
              <ul className="space-y-3">
                {recruitmentItems.map((item) => (
                  <li key={item.id} className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    <Link href={item.href} className="text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-semibold">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
