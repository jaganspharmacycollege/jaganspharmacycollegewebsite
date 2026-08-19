'use client';

import React from 'react';
import styles from './TrainingCellSection.module.css';

const trainingPrograms = [
    {
        title: 'Pre-Placement Training & Soft Skills',
        desc: 'Regular modules covering aptitude tests, group discussions, clinical case presentations, and technical mock interviews conducted by corporate HR mentors.',
    },
    {
        title: 'Hospital & Clinical Rotations',
        desc: 'Comprehensive clinical bedside training, medical chart analysis, and patient pharmacotherapy assessments in accredited partner teaching hospitals.',
    },
    {
        title: 'Industrial R&D Internships',
        desc: 'Hands-on summer internships covering formulation manufacturing, regulatory quality assurance, analytical HPLC, and drug safety databases.',
    },
];

export default function TrainingCellSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Skill Enhancement Framework</span>
                    <h2 className={styles.title}>Training & Development Cell</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our specialized Training and Placement Cell bridges academia and corporate expectations through continuous personality development, technical workshops, and direct industry mentoring.
                    </p>
                </div>

                <div className={styles.grid}>
                    {trainingPrograms.map((item, idx) => (
                        <div key={idx} className={styles.cellCard}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}