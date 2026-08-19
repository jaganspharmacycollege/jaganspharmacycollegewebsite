import React from 'react';
import {
    HomeHeroSection,
    HomeCoursesEnquirySection,
    HomeAboutStatsSection,
    HomeFeaturesBar,
    HomeAcademicWhyCampusSection,
    HomeCampusGlimpseSection,
    HomeBottomInfoSection,
} from '@/components/home';

export default function HomePage() {
    return (
        <main className="flex flex-col">
            {/* 1. Hero Section with Top Highlights & Actions */}
            <HomeHeroSection />

            {/* 2. Courses Offered & Enquire Today Form */}
            <HomeCoursesEnquirySection />

            {/* 3. About Us & Key Numbers Section */}
            <HomeAboutStatsSection />

            {/* 4. Facilities & Highlights Icon Bar */}
            <HomeFeaturesBar />

            {/* 5. Academic Cells, Why Choose Us & Campus Life Block */}
            <HomeAcademicWhyCampusSection />

            {/* 6. Campus Photo Glimpse Grid */}
            <HomeCampusGlimpseSection />

            {/* 7. Approvals, Placements & Testimonial Footer Cards */}
            <HomeBottomInfoSection />
        </main>
    );
}