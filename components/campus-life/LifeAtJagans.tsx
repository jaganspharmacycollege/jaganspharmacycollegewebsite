'use client';

import React from 'react';
import { Building2, UserCheck, Briefcase, ShieldCheck } from 'lucide-react';
import styles from './LifeAtJagans.module.css';

const pillars = [
    {
        title: 'Modern Infrastructure',
        desc: 'State-of-the-art classrooms, smart labs and advanced research facilities.',
        icon: Building2,
        iconBg: 'bg-[#EBF7F2] text-[#053B2A]',
    },
    {
        title: 'Experienced Faculty',
        desc: 'Learn from dedicated educators and industry professionals.',
        icon: UserCheck,
        iconBg: 'bg-[#EBF7F2] text-[#053B2A]',
    },
    {
        title: 'Industry Exposure',
        desc: 'Workshops, seminars and industrial visits to keep you ahead.',
        icon: Briefcase,
        iconBg: 'bg-[#EBF7F2] text-[#053B2A]',
    },
    {
        title: 'Safe & Secure Campus',
        desc: '24/7 security and a safe environment for all students.',
        icon: ShieldCheck,
        iconBg: 'bg-[#EBF7F2] text-[#053B2A]',
    },
];

export default function LifeAtJagans() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Section Heading with Gold Line */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Life at Jagan's</h2>
                    <div className={styles.accentLine} />
                </div>

                {/* Grid Layout */}
                <div className={styles.mainGrid}>
                    {/* Left Column: Subtitle + Image */}
                    <div className={styles.leftCol}>
                        <p className={styles.subText}>
                            Our campus is designed to inspire, engage and empower students to become confident professionals and responsible citizens.
                        </p>
                        <div className={styles.imageFrame}>
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                                alt="Students studying in library at Jagan's College"
                            />
                        </div>
                    </div>

                    {/* Right Column: Cards */}
                    <div className={styles.rightCol}>
                        <div className={styles.rightGrid}>
                            {pillars.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className={styles.pillarCard}>
                                        <div className={`${styles.iconCircle} ${item.iconBg}`}>
                                            <Icon size={24} strokeWidth={1.5} />
                                        </div>

                                        <div className={styles.cardHeader}>
                                            <h3 className={styles.pillarTitle}>{item.title}</h3>
                                            <div className={styles.goldDash} />
                                        </div>

                                        <p className={styles.pillarDesc}>{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}