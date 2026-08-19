import React from 'react';
import PlacementsHero from '@/components/placements/PlacementsHero';
import PlacementStats from '@/components/placements/PlacementStats';
import TrainingCellSection from '@/components/placements/TrainingCellSection';
import TopRecruitersSection from '@/components/placements/TopRecruitersSection';

export default function PlacementsPage() {
    return (
        <main className="flex flex-col">
            {/* 1. Placements Hero Banner */}
            <PlacementsHero />

            {/* 2. Key Placement Milestones & Statistics */}
            <PlacementStats />

            {/* 3. Training & Development Cell */}
            <TrainingCellSection />

            {/* 4. Top Corporate Recruiters */}
            <TopRecruitersSection />
        </main>
    );
}