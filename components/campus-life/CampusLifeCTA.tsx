'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, ArrowRight } from 'lucide-react';

export default function CampusLifeCTA() {
    return (
        <section className="py-8 max-w-7xl mx-auto px-4">
            <div className="bg-[#042F24] rounded-2xl px-6 sm:px-10 py-5 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">

                {/* Left Section: White Circle Icon Badge & Headline */}
                <div className="flex items-center gap-5 text-center sm:text-left">
                    <div className="w-13 h-13 rounded-full bg-white text-[#042F24] flex items-center justify-center shrink-0 shadow-xs">
                        <Building2 size={24} strokeWidth={1.4} />
                    </div>

                    <h3 className="text-base sm:text-lg font-serif font-bold text-white max-w-lg leading-snug">
                        Experience a campus that shapes<br className="hidden sm:inline" /> your future and inspires your journey.
                    </h3>
                </div>

                {/* Right Section: Dual CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0 justify-center sm:justify-end">
                    {/* Filled Amber Button */}
                    <Link
                        href="/contact#tour"
                        className="bg-[#C66A00] hover:bg-[#A85A00] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl transition flex items-center justify-center gap-2 w-full sm:w-auto shadow-2xs"
                    >
                        Take a Campus Tour <ArrowRight size={15} />
                    </Link>

                    {/* Outline Transparent Button */}
                    <Link
                        href="/contact"
                        className="bg-transparent hover:bg-white/10 text-white border border-white/80 text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl transition flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                        Enquire Now <ArrowRight size={15} />
                    </Link>
                </div>

            </div>
        </section>
    );
}