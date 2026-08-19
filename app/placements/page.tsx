import React from 'react';
import PlacementsHero from '@/components/placements/PlacementsHero';
import PlacementStats from '@/components/placements/PlacementStats';
import PlacedStudentsSection from '@/components/placements/PlacedStudentsSection';
import TrainingCellSection from '@/components/placements/TrainingCellSection';
import TopRecruitersSection from '@/components/placements/TopRecruitersSection';

export default function PlacementsPage() {
    return (
        <main className="flex flex-col">
            {/* 1. Placements Hero Banner */}
            <PlacementsHero />

            {/* 2. Key Placement Milestones & Statistics */}
            <PlacementStats />

            {/* 3. Featured Placed Students (Zigzag Layout) */}
            <PlacedStudentsSection />

            {/* 4. Training & Development Cell */}
            <TrainingCellSection />

            {/* 5. Top Corporate Recruiters */}
            <TopRecruitersSection />
        </main>
    );
}