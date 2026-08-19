import React from 'react';
import AboutCollegeSection from '@/components/about/AboutCollegeSection';
import AboutLeadershipSection from '@/components/about/AboutLeadershipSection';
import AboutApprovalsSection from '@/components/about/AboutApprovalsSection';
import AboutAdministrationSection from '@/components/about/AboutAdministrationSection';

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* 1. College */}
            <AboutCollegeSection />

            {/* 2. Leadership */}
            <AboutLeadershipSection />

            {/* 3. Approvals & Affiliations */}
            <AboutApprovalsSection />

            {/* 4. Administration */}
            <AboutAdministrationSection />
        </div>
    );
}