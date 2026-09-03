import React from 'react';
import {
    CampusOverview,
    Classrooms,
    PharmaceuticsLabs,
    PharmaceuticalChemistryLabs,
    PharmacologyLabs,
    PharmacognosyLabs,
    ClinicalPharmacyLab,
    ComputerLab,
    AnimalHouse,
    Library,
    SeminarHallAuditorium,
    HerbalGarden,
    Hostel,
    SportsFacility,
} from '@/components/infrastructure';

export default function InfrastructurePage() {
    return (
        <main className="flex flex-col">
            {/* 1. Campus Overview */}
            <CampusOverview />

            {/* 2. Classrooms */}
            <Classrooms />

            {/* 3. Pharmaceutics Laboratories */}
            <PharmaceuticsLabs />

            {/* 4. Pharmaceutics Chemistry labs */}
            <PharmaceuticalChemistryLabs />

            {/* 5. Phrmacology labs */}
            <PharmacologyLabs />

            {/* 6. Pharmacognosy labs */}
            <PharmacognosyLabs />

            {/* 7. Phrmacology / clinical pharmacy lab */}
            <ClinicalPharmacyLab />

            {/* 8. Computer Lab */}
            <ComputerLab />

            {/* 9. Central instrumentation facility */}
            <AnimalHouse />

            {/* 10. Library */}
            <Library />

            {/* 11. Seminar Hall / Auditorium */}
            <SeminarHallAuditorium />

            {/* 12. Herbal Garden */}
            <HerbalGarden />

            {/* 13. Hostel */}
            <Hostel />

            {/* 14. Sports Facility */}
            <SportsFacility />
        </main>
    );
}