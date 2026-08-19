'use client';

import React from 'react';
import { FlaskConical, Users, Briefcase, Award } from 'lucide-react';
import styles from './JagansAdvantage.module.css';

const advantages = [
    {
        icon: FlaskConical,
        title: 'Modern Labs &\nInfrastructure',
        description: 'State-of-the-art facilities for practical learning',
        iconBg: 'bg-[#EBF7F2] text-[#053B2A]',
    },
    {
        icon: Users,
        title: 'Experienced &\nExpert Faculty',
        description: 'Learn from highly qualified and dedicated faculty',
        iconBg: 'bg-[#F3E8FF] text-purple-800',
    },
    {
        icon: Briefcase,
        title: 'Industry\nCollaborations',
        description: 'Strong tie-ups for internships and placements',
        iconBg: 'bg-[#FFF3E6] text-[#B86E00]',
    },
    {
        icon: Award,
        title: 'Holistic Student\nDevelopment',
        description: 'Focus on academics, ethics and leadership',
        iconBg: 'bg-[#EBF7F2] text-[#053B2A]',
    },
];

export default function JagansAdvantage() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Column: Heading */}
                <div className={styles.leftCol}>
                    <p className={styles.eyebrow}>Why Choose Us</p>
                    <h2 className={styles.title}>
                        The Jagan's<br />Advantage
                    </h2>
                </div>

                {/* Right Column: 4 Features with Vertical Dividers */}
                <div className={styles.rightCol}>
                    <div className={styles.grid}>
                        {advantages.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className={styles.advantageItem}>
                                    {/* Top Row: Icon + Title */}
                                    <div className={styles.topRow}>
                                        <div className={`${styles.iconCircle} ${item.iconBg}`}>
                                            <Icon size={20} strokeWidth={1.5} />
                                        </div>
                                        <h3 className={styles.itemTitle}>{item.title}</h3>
                                    </div>

                                    {/* Subtitle / Description */}
                                    <p className={styles.description}>{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}