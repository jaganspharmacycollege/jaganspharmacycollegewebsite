'use client';

import React from 'react';
import styles from './TopRecruitersSection.module.css';

const recruiters = [
    { name: "Dr. Reddy's Labs", sector: 'Formulation & R&D' },
    { name: 'Sun Pharma', sector: 'Manufacturing & QC' },
    { name: 'Aurobindo Pharma', sector: 'Analytical & Production' },
    { name: 'Cipla Ltd', sector: 'Clinical & QA' },
    { name: 'Hetero Drugs', sector: 'API & Formulation' },
    { name: 'Divi’s Laboratories', sector: 'Synthesis & Testing' },
    { name: 'Apollo Hospitals', sector: 'Clinical Pharmacy' },
    { name: 'Novartis', sector: 'Pharmacovigilance' },
    { name: 'IQVIA', sector: 'Clinical Data Management' },
    { name: 'Lupin Pharma', sector: 'Regulatory Affairs' },
    { name: 'Biocon', sector: 'Biologics & Research' },
    { name: 'MedPlus Health', sector: 'Community Pharmacy' },
];

export default function TopRecruitersSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.eyebrow}>Industry Alliances</p>
                    <h2 className={styles.title}>Our Top Recruiters</h2>
                    <div className={styles.accentLine} />
                </div>

                <div className={styles.grid}>
                    {recruiters.map((r, idx) => (
                        <div key={idx} className={styles.recruiterCard}>
                            <h3 className={styles.companyName}>{r.name}</h3>
                            <p className={styles.companySector}>{r.sector}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}