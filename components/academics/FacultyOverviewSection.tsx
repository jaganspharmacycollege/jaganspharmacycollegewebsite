'use client';

import React from 'react';
import styles from './FacultyOverviewSection.module.css';

const facultyMembers = [
    { name: 'Dr. K. Srinivasulu', role: 'Principal & Professor', dept: 'Pharmaceutics', exp: '20+ Years Exp | Ph.D' },
    { name: 'Dr. M. Venkata Ramana', role: 'Professor & HoD', dept: 'Pharmaceutical Analysis', exp: '16+ Years Exp | Ph.D' },
    { name: 'Dr. S. Hariprasad', role: 'Professor & HoD', dept: 'Pharmacology', exp: '14+ Years Exp | Ph.D' },
    { name: 'Dr. P. Anitha', role: 'Associate Professor', dept: 'Pharmacy Practice', exp: '11+ Years Exp | Pharm.D' },
];

export default function FacultyOverviewSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Mentorship & Research</span>
                    <h2 className={styles.title}>Faculty & Research Guides</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our faculty members possess doctoral credentials, numerous Scopus-indexed research publications, and patents in pharmaceutical science.
                    </p>
                </div>

                <div className={styles.grid}>
                    {facultyMembers.map((fac, idx) => (
                        <div key={idx} className={styles.card}>
                            <h3 className={styles.facultyName}>{fac.name}</h3>
                            <p className={styles.facultyRole}>{fac.role}</p>
                            <p className="text-xs font-semibold text-emerald-800 mt-1">{fac.dept}</p>
                            <p className={styles.facultyExp}>{fac.exp}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}