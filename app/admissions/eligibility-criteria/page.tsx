'use client';

import React from 'react';
import {
    GraduationCap,
    FlaskConical,
    Stethoscope,
    Sparkles,
    CheckCircle2,
} from 'lucide-react';
import styles from './EligibilityCriteriaPage.module.css';

const criteria = [
    {
        course: 'B.Pharm (4 Years)',
        level: 'Undergraduate Program',
        icon: FlaskConical,
        theme: styles.themeEmerald,
        reqs: [
            'Passed 10+2 Intermediate examination with Physics & Chemistry as compulsory subjects along with Mathematics or Biology (MPC / BiPC).',
            'Minimum 45% aggregate marks in qualifying group subjects (40% for candidates belonging to reserved categories).',
            'Valid qualifying rank in the state-level entrance examination (AP EAPCET) or fulfilling institutional category criteria.',
        ],
    },
    {
        course: 'Pharm.D (6 Years)',
        level: 'Doctoral Clinical Degree',
        icon: Stethoscope,
        theme: styles.themePurple,
        reqs: [
            'Passed 10+2 Intermediate examination with Physics, Chemistry, and Mathematics or Biology (MPC / BiPC).',
            'Or candidates holding a recognized Diploma in Pharmacy (D.Pharm) qualification from a recognized institution.',
            'Qualified rank in AP EAPCET entrance examination or recognized equivalent state norms.',
        ],
    },
    {
        course: 'M.Pharm (2 Years)',
        level: 'Postgraduate Master Degree',
        icon: Sparkles,
        theme: styles.themeAmber,
        reqs: [
            'Passed B. Pharm degree examination with a minimum of 55% aggregate marks (50% for reserved category candidates) from a recognized institution.',
            'Valid qualifying score in the national Graduate Pharmacy Aptitude Test (GPAT) or state-level AP PGECET examination.',
            'Must hold Registered Pharmacist certification with the State Pharmacy Council.',
        ],
    },
];

export default function EligibilityCriteriaPage() {
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
                        <span>Entry Requirements</span>
                    </div>
                    <h1 className={styles.title}>Eligibility Criteria</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Academic and statutory prerequisite standards required for admission into our undergraduate,
                        postgraduate, and doctoral degree programs at Jagan&apos;s College of Pharmacy.
                    </p>
                </div>

                {/* 3 Separate Responsive Course Cards */}
                <div className={styles.grid}>
                    {criteria.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.iconSquircle} ${item.theme}`}>
                                        <Icon size={24} strokeWidth={2.2} />
                                    </div>
                                    <div className={styles.headerTitles}>
                                        <span className={styles.levelTag}>{item.level}</span>
                                        <h3 className={styles.cardTitle}>{item.course}</h3>
                                    </div>
                                </div>

                                <div className={styles.divider} />

                                <div className={styles.list}>
                                    {item.reqs.map((req, i) => (
                                        <div key={i} className={styles.listItem}>
                                            <CheckCircle2 size={16} className={styles.bulletCheck} />
                                            <span className={styles.reqText}>{req}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}