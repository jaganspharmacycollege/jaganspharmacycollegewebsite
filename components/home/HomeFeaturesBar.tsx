'use client';

import React from 'react';
import { Microscope, Users, Monitor, BookOpen, Home, Briefcase } from 'lucide-react';
import styles from './HomeFeaturesBar.module.css';

const features = [
    {
        icon: Microscope,
        title: 'Modern Laboratories',
        sub: 'Advanced research labs',
        themeClass: styles.theme0,
        floatClass: styles.floatA,
    },
    {
        icon: Users,
        title: 'Expert Faculty',
        sub: 'Ph.D & industry veterans',
        themeClass: styles.theme1,
        floatClass: styles.floatB,
    },
    {
        icon: Monitor,
        title: 'Smart Classrooms',
        sub: 'Digital ICT-enabled halls',
        themeClass: styles.theme2,
        floatClass: styles.floatC,
    },
    {
        icon: BookOpen,
        title: 'Digital Library',
        sub: 'National & e-journals',
        themeClass: styles.theme3,
        floatClass: styles.floatA,
    },
    {
        icon: Home,
        title: 'Hostel Facility',
        sub: 'Secure on-campus living',
        themeClass: styles.theme4,
        floatClass: styles.floatB,
    },
    {
        icon: Briefcase,
        title: 'Placement Support',
        sub: 'Dedicated recruitment cell',
        themeClass: styles.theme5,
        floatClass: styles.floatC,
    },
];

export default function HomeFeaturesBar() {
    return (
        <section className={styles.section}>
            <div className={styles.ambientOrbLeft} />
            <div className={styles.ambientOrbRight} />

            <div className={styles.container}>
                <div className={styles.cardsGrid}>
                    {features.map((item, idx) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={idx}
                                className={`${styles.featureCard} ${item.floatClass}`}
                            >
                                <div className={`${styles.iconBox} ${item.themeClass}`}>
                                    <Icon size={22} strokeWidth={2.1} />
                                </div>
                                <h4 className={styles.title}>{item.title}</h4>
                                <p className={styles.sub}>{item.sub}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}