'use client';

import React from 'react';
import { Microscope, Users, Monitor, BookOpen, Home, Briefcase } from 'lucide-react';
import styles from './HomeFeaturesBar.module.css';

const features = [
    { icon: Microscope, title: 'Modern Laboratories', sub: 'State-of-the-art labs' },
    { icon: Users, title: 'Experienced Faculty', sub: 'Qualified & dedicated' },
    { icon: Monitor, title: 'Smart Classrooms', sub: 'ICT enabled' },
    { icon: BookOpen, title: 'Rich Library', sub: 'Digital & Print Resources' },
    { icon: Home, title: 'Hostel Facility', sub: 'Safe & Comfortable' },
    { icon: Briefcase, title: 'Placement Support', sub: 'Training & Guidance' },
];

export default function HomeFeaturesBar() {
    return (
        <div className={styles.bar}>
            <div className={styles.container}>
                {features.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div key={idx} className={styles.featureItem}>
                            <Icon size={26} className={styles.icon} />
                            <div>
                                <p className={styles.title}>{item.title}</p>
                                <p className={styles.sub}>{item.sub}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}