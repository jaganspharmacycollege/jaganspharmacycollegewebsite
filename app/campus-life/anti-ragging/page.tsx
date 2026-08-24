'use client';

import React from 'react';
import {
    ShieldAlert,
    UserCheck,
    Video,
    PhoneCall,
    Lock,
} from 'lucide-react';
import styles from './AntiRaggingPage.module.css';

const raggingMeasures = [
    {
        title: 'Anti-Ragging Committee & Flying Squad',
        desc: 'Active squad conducting 24/7 surprise vigilance checks across campus grounds, laboratories, residential hostels, and student bus transit routes.',
        icon: UserCheck,
        tag: '24/7 Vigilance',
        theme: styles.themeEmerald,
    },
    {
        title: 'Comprehensive CCTV Surveillance',
        desc: '24/7 high-definition IP camera monitoring throughout all academic corridors, campus gates, laboratory wings, dining mess halls, and common recreation areas.',
        icon: Video,
        tag: 'Campus Security',
        theme: styles.themeAmber,
    },
    {
        title: 'Emergency Helplines & Rapid Response',
        desc: 'National Anti-Ragging Helpline (Toll-Free): 1800-180-5522 | Campus Internal Emergency Helpline: +91 861 2345678.',
        icon: PhoneCall,
        tag: 'Emergency Support',
        theme: styles.themePurple,
        isHelpline: true,
    },
];

export default function AntiRaggingPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Ambient Parallax Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <div className={styles.eyebrowTag}>
                        <ShieldAlert size={14} className={styles.eyebrowIcon} />
                        <span>Safe &amp; Secure Campus</span>
                    </div>
                    <h1 className={styles.title}>Anti-Ragging Policy &amp; Safety</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Jagan&apos;s College of Pharmacy strictly enforces a Zero-Tolerance Policy toward ragging in compliance with UGC, statutory guidelines, and Supreme Court directives.
                    </p>
                </div>

                {/* Policy Zero-Tolerance Banner */}
                <div className={styles.policyBanner}>
                    <div className={styles.policyIconBox}>
                        <Lock size={22} />
                    </div>
                    <div className={styles.policyText}>
                        <h3 className={styles.policyTitle}>Strict Zero-Tolerance Campus</h3>
                        <p className={styles.policyDesc}>
                            Ragging in any form—physical, verbal, or mental—is strictly prohibited. Any violation attracts immediate suspension and mandatory statutory legal action.
                        </p>
                    </div>
                </div>

                {/* 3 Separate Measures Cards Grid */}
                <div className={styles.grid}>
                    {raggingMeasures.map((measure, idx) => {
                        const Icon = measure.icon;
                        return (
                            <div
                                key={idx}
                                className={`${styles.card} ${measure.isHelpline ? styles.helplineCard : ''
                                    }`}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.iconSquircle} ${measure.theme}`}>
                                        <Icon size={22} strokeWidth={2.2} />
                                    </div>
                                    <span className={styles.cardTag}>{measure.tag}</span>
                                </div>

                                <h3 className={styles.cardTitle}>{measure.title}</h3>
                                <p className={styles.cardDesc}>{measure.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}