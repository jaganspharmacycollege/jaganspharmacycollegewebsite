import React from 'react';
import AcademicsHero from '@/components/academics/AcademicsHero';
import DepartmentsSection from '@/components/academics/DepartmentsSection';
import AcademicCalendarSection from '@/components/academics/AcademicCalendarSection';
import FacultyOverviewSection from '@/components/academics/FacultyOverviewSection';

export default function AcademicsPage() {
    return (
        <main className="flex flex-col">
            {/* 1. Academics Hero Banner */}
            <AcademicsHero />

            {/* 2. Academic Departments */}
            <DepartmentsSection />

            {/* 3. Academic Calendar & Exam Schedules */}
            <AcademicCalendarSection />

            {/* 4. Faculty & Research Mentors */}
            <FacultyOverviewSection />
        </main>
    );
}