'use client';

import React from 'react';
import { FlaskConical, Users, Briefcase, Award } from 'lucide-react';
import styles from './JagansAdvantage.module.css';

const advantages = [
    {
        icon: FlaskConical,
        title: 'Modern Labs &\nInfrastructure',
        description: 'State-of-the-art facilities for practical learning',
        iconTheme: styles.iconMint,
    },
    {
        icon: Users,
        title: 'Experienced &\nExpert Faculty',
        description: 'Learn from highly qualified and dedicated faculty',
        iconTheme: styles.iconPurple,
    },
    {
        icon: Briefcase,
        title: 'Industry\nCollaborations',
        description: 'Strong tie-ups for internships and placements',
        iconTheme: styles.iconPeach,
    },
    {
        icon: Award,
        title: 'Holistic Student\nDevelopment',
        description: 'Focus on academics, ethics and leadership',
        iconTheme: styles.iconMint,
    },
];

export default function JagansAdvantage() {
    return (
        <section className={styles.section}>
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Why Choose Us</span>
                    <h2 className={styles.title}>The Jagan&apos;s Advantage</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.subText}>
                        Providing a world-class academic environment designed to foster innovation, clinical excellence, and high career growth.
                    </p>
                </div>

                {/* 4 Separate Cards Grid */}
                <div className={styles.grid}>
                    {advantages.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className={styles.card}>
                                <div className={styles.cardHeaderRow}>
                                    <div className={`${styles.iconSquircle} ${item.iconTheme}`}>
                                        <Icon size={24} strokeWidth={1.8} />
                                    </div>
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                </div>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}