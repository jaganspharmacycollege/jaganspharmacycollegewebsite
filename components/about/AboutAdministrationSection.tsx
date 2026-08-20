'use client';

import React from 'react';
import {
    BookOpenCheck,
    FileSpreadsheet,
    ShieldCheck,
    HeartHandshake,
} from 'lucide-react';
import styles from './AboutAdministrationSection.module.css';

const adminBodies = [
    {
        icon: BookOpenCheck,
        cell: 'Academic Council',
        lead: 'Head: Vice Principal & HoDs',
        desc: 'Oversees curriculum delivery, student attendance, laboratory scheduling, and internal assessment reviews.',
        themeClass: styles.themeEmerald,
    },
    {
        icon: FileSpreadsheet,
        cell: 'Examination Cell',
        lead: 'Head: Controller of Examinations',
        desc: 'Coordinates with JNTUA for seamless scheduling, hall ticket dissemination, and board evaluations.',
        themeClass: styles.themeAmber,
    },
    {
        icon: ShieldCheck,
        cell: 'Internal Quality Assurance (IQAC)',
        lead: 'Head: IQAC Coordinator',
        desc: 'Drives continuous enhancement across teaching methodologies, laboratory safety, and faculty development programs.',
        themeClass: styles.themeBlue,
    },
    {
        icon: HeartHandshake,
        cell: 'Student Affairs & Grievance Cell',
        lead: 'Head: Dean of Student Affairs',
        desc: 'Dedicated to student well-being, campus anti-ragging policies, mentorship, and extracurricular coordination.',
        themeClass: styles.themePurple,
    },
];

export default function AboutAdministrationSection() {
    return (
        <section className={styles.section}>
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Governance &amp; Framework</span>
                    <h2 className={styles.title}>Administrative Bodies</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.headerSub}>
                        Structured leadership committees ensuring academic discipline, seamless examinations, and student welfare.
                    </p>
                </div>

                {/* 4-Card Responsive Grid */}
                <div className={styles.grid}>
                    {adminBodies.map((admin, idx) => {
                        const Icon = admin.icon;
                        return (
                            <div key={idx} className={styles.adminCard}>
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.iconBadge} ${admin.themeClass}`}>
                                        <Icon size={22} strokeWidth={2.2} />
                                    </div>
                                    <span className={styles.adminLead}>{admin.lead}</span>
                                </div>

                                <h3 className={styles.adminCellTitle}>{admin.cell}</h3>
                                <p className={styles.adminDesc}>{admin.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}