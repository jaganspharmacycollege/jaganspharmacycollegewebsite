'use client';

import React from 'react';
import { FlaskConical, Microscope, BookOpen, HeartHandshake, Trophy, Music } from 'lucide-react';
import styles from './StudentClubs.module.css';

const clubs = [
    { name: 'Pharma Club', icon: FlaskConical },
    { name: 'Research Club', icon: Microscope },
    { name: 'Literary Club', icon: BookOpen },
    { name: 'NSS', icon: HeartHandshake },
    { name: 'Sports Club', icon: Trophy },
    { name: 'Cultural Club', icon: Music },
];

export default function StudentClubs() {
    return (
        <section className={styles.section}>
            <div className={styles.card}>
                {/* Left Section: Heading & Horizontal Icon List */}
                <div className={styles.leftSection}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Student Activities & Clubs</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.subText}>
                            Join clubs, explore your passions and create unforgettable memories.
                        </p>
                    </div>

                    {/* 6 Clubs Horizontal Row */}
                    <div className={styles.clubsGrid}>
                        {clubs.map((club, idx) => {
                            const Icon = club.icon;
                            return (
                                <div key={idx} className={styles.clubWrapper}>
                                    <div className={styles.clubItem}>
                                        <div className={styles.iconColor}>
                                            <Icon size={28} strokeWidth={1.3} />
                                        </div>
                                        <h3 className={styles.clubName}>{club.name}</h3>
                                    </div>

                                    {idx !== clubs.length - 1 && (
                                        <div className={styles.verticalDivider} />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Section: Group Student Photo Flush to Edge */}
                <div className={styles.rightImageWrapper}>
                    <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                        alt="Jagan's College Student Clubs Group"
                    />
                </div>
            </div>
        </section>
    );
}