'use client';

import React from 'react';
import styles from './DepartmentsSection.module.css';

const departments = [
    {
        title: 'Department of Pharmaceutics',
        desc: 'Specializes in drug dosage formulation, novel drug delivery systems (NDDS), biopharmaceutics, physical pharmacy, and industrial scale-up technologies.',
        tags: ['Tableting Lab', 'Sterile Lab', 'Dissolution Testing'],
    },
    {
        title: 'Department of Pharmaceutical Chemistry & Analysis',
        desc: 'Focuses on organic synthesis, medicinal drug design, structure-activity relationships (SAR), spectroscopic analysis, and quality assurance.',
        tags: ['Spectroscopy Lab', 'HPLC & Chromatography', 'Wet Chemistry'],
    },
    {
        title: 'Department of Pharmacology',
        desc: 'Dedicated to understanding drug actions, preclinical pharmacokinetics, toxicological evaluations, animal behavioral studies, and molecular screening.',
        tags: ['CPCSEA Animal House', 'Organ Bath Labs', 'Toxicology Unit'],
    },
    {
        title: 'Department of Pharmacognosy & Phytochemistry',
        desc: 'Engaged in natural product isolation, herbal medicines, plant tissue culture, phytochemical evaluation, and traditional herbal formulations.',
        tags: ['Herbal Garden', 'Extraction Lab', 'Morphology Lab'],
    },
    {
        title: 'Department of Pharmacy Practice (Hospital & Clinical)',
        desc: 'Centered around clinical patient care, hospital ward rounds, prescription audit, adverse drug reaction (ADR) monitoring, and patient pharmacotherapy.',
        tags: ['Ward Round Units', 'Drug Info Center', 'Patient Counseling'],
    },
];

export default function DepartmentsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Disciplines & Divisions</span>
                    <h2 className={styles.title}>Academic Departments</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our specialized departments are powered by advanced research laboratories, experienced faculty, and rigorous curriculum frameworks.
                    </p>
                </div>

                <div className={styles.grid}>
                    {departments.map((dept, idx) => (
                        <div key={idx} className={styles.card}>
                            <h3 className={styles.cardTitle}>{dept.title}</h3>
                            <p className={styles.cardDesc}>{dept.desc}</p>
                            <div className={styles.highlights}>
                                {dept.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className={styles.badge}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}