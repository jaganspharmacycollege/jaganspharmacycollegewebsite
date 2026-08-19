import React from 'react';
import CampusLifeHero from '@/components/campus-life/CampusLifeHero';
import LifeAtJagans from '@/components/campus-life/LifeAtJagans';
import CampusHighlights from '@/components/campus-life/CampusHighlights';
import StudentClubs from '@/components/campus-life/StudentClubs';
import StudentTestimonials from '@/components/campus-life/StudentTestimonials';
export default function CampusLifePage() {
    return (
        <main className="min-h-screen bg-[#FAF8F5]">
            <CampusLifeHero />
            <LifeAtJagans />
            <CampusHighlights />
            <StudentClubs />
            <StudentTestimonials />
        </main>
    );
}