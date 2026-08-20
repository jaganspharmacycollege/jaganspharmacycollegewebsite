import React from 'react';
import CoursesHero from '@/components/courses/CoursesHero';
import CoursesOfferedGrid from '@/components/courses/CoursesOfferedGrid';
import JagansAdvantage from '@/components/courses/JagansAdvantage';
import CoursesCTA from '@/components/courses/CoursesCTA';
export default function CoursesPage() {
    return (
        <main className="min-h-screen bg-[#FAF8F5]">
            <CoursesHero />
            <CoursesOfferedGrid />
            <JagansAdvantage />
            {/*<CoursesCTA />*/}
        </main>
    );
}