'use client';

import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import styles from './AlumniShared.module.css';

const directory = [
    {
        name: 'Dr. Rajesh Varma',
        batch: 'B.Pharm (Batch 2012)',
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
        batch: 'M.Pharm (Batch 2018)',
        role: 'Manager - Analytical Quality Assurance',
        company: 'Dr. Reddy’s Laboratories, Vizag',
    },
];

export default function AlumniDirectory() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div>
                    <span className={styles.eyebrow}>Member Profiles</span>
                    <h2 className={styles.title}>Alumni Directory</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Explore our alumni network representing leading pharmaceutical corporations, research centers, and tertiary hospitals worldwide.
                    </p>
                </div>

                <div className={styles.grid}>
                    {directory.map((item, idx) => (
                        <div key={idx} className={styles.card}>
                            <h3 className={styles.cardTitle}>{item.name}</h3>
                            <p className="text-xs font-bold text-[#b86e00] uppercase tracking-wider mb-3">
                                {item.batch}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-700 mb-1.5 font-medium">
                                <Briefcase size={14} className="text-[#053b2a] flex-shrink-0" />
                                <span>{item.role}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <MapPin size={14} className="text-[#053b2a] flex-shrink-0" />
                                <span>{item.company}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}