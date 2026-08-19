'use client';

import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import styles from './AlumniDirectory.module.css';

const directory = [
    {
        name: 'Dr. Rajesh Varma',
        batch: 'B. Pharm (Batch 2012)',
        role: 'Principal Research Scientist',
        company: 'Novartis Global R&D, Hyderabad',
    },
    {
        name: 'Dr. Sneha Reddy',
        batch: 'Pharm.D (Batch 2016)',
        role: 'Clinical Pharmacotherapy Lead',
        company: 'Apollo Hospitals, Chennai',
    },
    {
        name: 'K. Sai Krishna',
        batch: 'M. Pharm (Batch 2018)',
        role: 'Manager — Analytical Quality Assurance',
        company: "Dr. Reddy's Laboratories, Vizag",
    },
];

export default function AlumniDirectory() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.headerBlock}>
                    <span className={styles.eyebrow}>Member Profiles</span>
                    <h2 className={styles.title}>Alumni Directory</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Explore our alumni network representing leading pharmaceutical corporations,
                        research centers, and tertiary hospitals worldwide.
                    </p>
                </div>

                <div className={styles.grid}>
                    {directory.map((item, idx) => (
                        <div key={idx} className={styles.card}>
                            <h3 className={styles.cardTitle}>{item.name}</h3>
                            <p className={styles.cardBatch}>{item.batch}</p>

                            <div className={styles.infoRow}>
                                <Briefcase size={15} className={styles.icon} />
                                <span className={styles.roleText}>{item.role}</span>
                            </div>

                            <div className={styles.infoRow}>
                                <MapPin size={15} className={styles.icon} />
                                <span className={styles.companyText}>{item.company}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}