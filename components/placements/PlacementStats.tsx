'use client';

import React from 'react';
import styles from './PlacementStats.module.css';

const stats = [
    { number: '92%+', label: 'Placement Rate', desc: 'Across B.Pharm, Pharm.D & M.Pharm' },
    { number: '60+', label: 'Recruiting Companies', desc: 'MNCs, Hospitals & R&D Units' },
    { number: '₹ 8.5 LPA', label: 'Highest Package', desc: 'Offered in R&D and Clinical Research' },
    { number: '₹ 4.2 LPA', label: 'Average Package', desc: 'Across core pharmaceutical branches' },
];

export default function PlacementStats() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {stats.map((s, idx) => (
                        <div key={idx} className={styles.statCard}>
                            <div className={styles.statNumber}>{s.number}</div>
                            <div className={styles.statLabel}>{s.label}</div>
                            <p className={styles.statDesc}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}