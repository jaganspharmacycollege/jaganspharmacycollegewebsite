import React from 'react';
import AdmissionsHero from '@/components/admissions/AdmissionsHero';
import AdmissionProcess from '@/components/admissions/AdmissionProcess';
import EligibilityAndDocs from '@/components/admissions/EligibilityAndDocs';
import AdmissionsCTABanner from '@/components/admissions/AdmissionsCTABanner';
import AdmissionsFAQAndHelp from '@/components/admissions/AdmissionsFAQAndHelp';
export default function AdmissionsPage() {
    return (
        <main className="min-h-screen bg-[#FAF8F5]">
            <AdmissionsHero />
            <AdmissionProcess />
            <EligibilityAndDocs />
            <AdmissionsCTABanner />
            <AdmissionsFAQAndHelp />
        </main>
    );
}