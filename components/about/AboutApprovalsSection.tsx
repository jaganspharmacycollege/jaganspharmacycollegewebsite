'use client';

import React from 'react';
import { ShieldCheck, Building2, Award } from 'lucide-react';
import styles from './AboutApprovalsSection.module.css';

const approvals = [
    {
        icon: ShieldCheck,
        title: 'AICTE Approved',
        authority: 'Apex Technical Body',
        desc: 'Approved by the All India Council for Technical Education, New Delhi, ensuring all pharmaceutical curricula, research labs, and faculty adhere strictly to national statutory standards.',
        themeClass: styles.themeEmerald,
    },
    {
        icon: Building2,
        title: 'JNTU Anantapur (JNTUA)',
        authority: 'Affiliating University',
        desc: 'Permanently affiliated to Jawaharlal Nehru Technological University Anantapur for all undergraduate (B. Pharm), postgraduate (M. Pharm), and doctoral (Pharm.D) degree programs.',
        themeClass: styles.themeAmber,
    },
    {
        icon: Award,
        title: 'Govt. of Andhra Pradesh',
        authority: 'State Recognition',
        desc: 'Recognized by the Department of Technical Education and Government of Andhra Pradesh for upholding high educational benchmarks and clinical healthcare training.',
        themeClass: styles.themeBlue,
    },
];

export default function AboutApprovalsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Statutory Recognition</span>
                    <h2 className={styles.title}>Approvals &amp; Affiliations</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.headerSub}>
                        Accredited and approved by recognized national statutory boards and government authorities.
                    </p>
                </div>

                {/* 3-Card Grid */}
                <div className={styles.grid}>
                    {approvals.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className={styles.approvalCard}>
                                <div className={styles.cardTop}>
                                    <div className={`${styles.cardIcon} ${item.themeClass}`}>
                                        <Icon size={26} strokeWidth={2.2} />
                                    </div>
                                    <span className={styles.cardSubtitle}>{item.authority}</span>
                                </div>

                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}