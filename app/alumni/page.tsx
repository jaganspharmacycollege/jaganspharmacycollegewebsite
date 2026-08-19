import React from 'react';
import {
    AlumniAssociation,
    AlumniRegistration,
    AlumniDirectory,
    AlumniMeet,
    AlumniEvents,
    AlumniAchievements,
} from '@/components/alumni';

export default function AlumniPage() {
    return (
        <main className="flex flex-col">
            {/* 1. Alumni Association */}
            <AlumniAssociation />

            {/* 2. Alumni Registration */}
            <AlumniRegistration />

            {/* 3. Alumni Directory */}
            <AlumniDirectory />

            {/* 4. Alumni Meet */}
            <AlumniMeet />

            {/* 5. Alumni Events */}
            <AlumniEvents />

            {/* 6. Alumni Achievements */}
            <AlumniAchievements />
        </main>
    );
}