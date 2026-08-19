'use client';

import React from 'react';
import { FileText, UserCheck, Building2, GraduationCap, MessageSquareCode } from 'lucide-react';
import styles from './ContactFeatures.module.css';

const features = [
    { icon: FileText, label: 'Easy Admission Process' },
    { icon: UserCheck, label: 'Expert & Qualified Faculty' },
    { icon: Building2, label: 'Modern Labs & Infrastructure' },
    { icon: GraduationCap, label: 'Holistic Student Development' },
    { icon: MessageSquareCode, label: 'Placement Support & Guidance' },
];

export default function ContactFeatures() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {features.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className={styles.featureItem}>
                                <div className={styles.iconColor}>
                                    <Icon size={32} strokeWidth={1.5} />
                                </div>
                                <h4 className={styles.label}>{item.label}</h4>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}