'use client';

import React from 'react';
import Link from 'next/link';
import {
    GraduationCap,
    Sparkles,
    ArrowRight,
    Award,
    BookOpenCheck,
} from 'lucide-react';
import styles from './FacultyOverviewSection.module.css';

const facultyMembers = [
    {
        name: 'Dr. K. Srinivasulu',
        role: 'Principal & Professor',
        dept: 'Pharmaceutics',
        exp: '20+ Years Exp | Ph.D',
        theme: styles.themeEmerald,
    },
    {
        name: 'Dr. M. Venkata Ramana',
        role: 'Professor & HoD',
        dept: 'Pharmaceutical Analysis',
        exp: '16+ Years Exp | Ph.D',
        theme: styles.themeAmber,
    },
    {
        name: 'Dr. S. Hariprasad',
        role: 'Professor & HoD',
        dept: 'Pharmacology',
        exp: '14+ Years Exp | Ph.D',
        theme: styles.themePurple,
    },
    {
        name: 'Dr. P. Anitha',
        role: 'Associate Professor',
        dept: 'Pharmacy Practice',
        exp: '11+ Years Exp | Pharm.D',
        theme: styles.themeTeal,
    },
];

export default function FacultyOverviewSection() {
    return (
        <section className={styles.section}>
            {/* Ambient Parallax Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Mentorship &amp; Research</span>
                    </div>
                    <h2 className={styles.title}>Faculty &amp; Research Guides</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our faculty members possess doctoral credentials, numerous Scopus-indexed research publications, and patents in pharmaceutical science[cite: 19].
                    </p>
                </div>

                {/* 4 Faculty Cards Responsive Grid */}
                <div className={styles.grid}>
                    {facultyMembers.map((fac, idx) => (
                        <div key={idx} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={`${styles.avatarSquircle} ${fac.theme}`}>
                                    <GraduationCap size={22} strokeWidth={2.2} />
                                </div>
                                <span className={styles.expBadge}>{fac.exp.split('|')[0].trim()}</span>
                            </div>

                            <div className={styles.cardBody}>
                                <h3 className={styles.facultyName}>{fac.name}</h3>
                                <p className={styles.facultyRole}>{fac.role}</p>

                                <div className={styles.deptBadge}>
                                    <BookOpenCheck size={13} className={styles.deptIcon} />
                                    <span>{fac.dept}</span>
                                </div>

                                <div className={styles.qualificationRow}>
                                    <Award size={13} className={styles.qualIcon} />
                                    <span>{fac.exp.split('|')[1]?.trim() || 'Doctoral Guide'}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Directory Overview Footer Link */}
                <div className={styles.sectionFooter}>
                    <Link href="/academics/faculty" className={styles.exploreDirectoryLink}>
                        <span>View Complete Faculty Directory &amp; Research Profiles</span>
                        <ArrowRight size={16} className={styles.footerArrow} />
                    </Link>
                </div>
            </div>
        </section>
    );
}