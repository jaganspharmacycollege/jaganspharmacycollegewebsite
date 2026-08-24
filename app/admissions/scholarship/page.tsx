'use client';

import React from 'react';
import { Building2, Sparkles, Award, GraduationCap } from 'lucide-react';
import styles from './ScholarshipPage.module.css';

const schemes = [
    {
        icon: Building2,
        badgeText: 'State Scheme',
        title: 'State Government Fee Reimbursement (JVD Scheme)',
        desc: 'Full tuition fee reimbursement and post-matric financial assistance provided by the Government of Andhra Pradesh for eligible SC, ST, BC, EBC, Minority, and Kapu students.',
        theme: styles.themeEmerald,
    },
    {
        icon: Sparkles,
        badgeText: 'National Fellowship',
        title: 'GPAT National Fellowship (For M.Pharm)',
        desc: 'Monthly stipend of ₹12,400 awarded by AICTE / Ministry of Education to GPAT-qualified candidates admitted into regular postgraduate programs.',
        theme: styles.themeAmber,
    },
    {
        icon: Award,
        badgeText: 'Trust Scholarship',
        title: 'Merit-Cum-Means Institutional Scholarships',
        desc: 'Special tuition fee concessions provided by the Jagan Educational Trust for top academic rank holders, sports achievers, and economically underprivileged students.',
        theme: styles.themePurple,
    },
];

export default function ScholarshipPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Ambient Parallax Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <div className={styles.eyebrowTag}>
                        <GraduationCap size={15} className={styles.eyebrowIcon} />
                        <span>Financial Assistance</span>
                    </div>
                    <h1 className={styles.title}>Scholarships &amp; Financial Aid</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        We facilitate multiple government welfare programs and trust-backed institutional scholarships
                        to ensure that financial constraints never hinder quality pharmaceutical education.
                    </p>
                </div>

                {/* 3-Card Responsive Grid */}
                <div className={styles.grid}>
                    {schemes.map((scheme, idx) => {
                        const Icon = scheme.icon;
                        return (
                            <div key={idx} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.iconSquircle} ${scheme.theme}`}>
                                        <Icon size={24} strokeWidth={2.2} />
                                    </div>
                                    <span className={styles.badgePill}>{scheme.badgeText}</span>
                                </div>

                                <h3 className={styles.cardTitle}>{scheme.title}</h3>
                                <p className={styles.cardDesc}>{scheme.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}