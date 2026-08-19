'use client';

import React from 'react';
import styles from './AboutAdministrationSection.module.css';

const adminBodies = [
    {
        cell: 'Academic Council',
        lead: 'Head: Vice Principal & HoDs',
        desc: 'Oversees curriculum delivery, student attendance, laboratory scheduling, and internal assessment reviews.',
    },
    {
        cell: 'Examination Cell',
        lead: 'Head: Controller of Examinations',
        desc: 'Coordinates with JNTUA for seamless scheduling, hall ticket dissemination, and board evaluations.',
    },
    {
        cell: 'Internal Quality Assurance (IQAC)',
        lead: 'Head: IQAC Coordinator',
        desc: 'Drives continuous enhancement across teaching methodologies, laboratory safety, and faculty development programs.',
    },
    {
        cell: 'Student Affairs & Grievance Cell',
        lead: 'Head: Dean of Student Affairs',
        desc: 'Dedicated to student well-being, campus anti-ragging policies, mentorship, and extracurricular coordination.',
    },
];

export default function AboutAdministrationSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.eyebrow}>Governance & Framework</p>
                    <h2 className={styles.title}>Administration</h2>
                    <div className={styles.accentLine} />
                </div>

                <div className={styles.grid}>
                    {adminBodies.map((admin, idx) => (
                        <div key={idx} className={styles.adminCard}>
                            <div>
                                <span className={styles.adminLead}>{admin.lead}</span>
                                <h3 className={styles.adminCellTitle}>{admin.cell}</h3>
                            </div>
                            <p className={styles.adminDesc}>{admin.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}