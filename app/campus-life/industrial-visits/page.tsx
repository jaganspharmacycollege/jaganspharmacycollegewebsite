import React from 'react';
import styles from '../CampusLifeLayout.module.css';

export default function IndustrialVisitsPage() {
    const visits = [
        { title: 'Formulation & Manufacturing Units', desc: 'Guided tours to GMP-certified solid dosage and sterile parenteral pharmaceutical production plants.' },
        { title: 'Analytical & Quality Control Labs', desc: 'Exposure to industrial HPLC, GC-MS instruments, and stability chamber operations.' },
        { title: 'Clinical Research Organizations (CRO)', desc: 'Visits to leading bioequivalence and clinical trial centers across Hyderabad and Chennai.' },
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Real-World Industry Exposure</span>
                    <h1 className={styles.title}>Industrial Visits</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Mandatory educational tours to leading pharmaceutical manufacturing plants and R&D facilities to bridge theory and industry practice.
                    </p>
                </div>
                <div className={styles.grid}>
                    {visits.map((v, i) => (
                        <div key={i} className={styles.card}>
                            <h3 className={styles.cardTitle}>{v.title}</h3>
                            <p className={styles.cardDesc}>{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}