import React from 'react';
import styles from '../CampusLifeLayout.module.css';

export default function SeminarWorkshopsPage() {
    const workshops = [
        { title: 'Hands-on HPLC & Analytical Validation', desc: 'Intensive two-day workshops conducted by senior instrumentation scientists.' },
        { title: 'Pharmacovigilance & Drug Safety', desc: 'Training sessions on ADR reporting protocols and global safety database software.' },
        { title: 'National Pharmacy Seminars', desc: 'Annual conferences featuring guest lectures from renowned international professors.' },
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Knowledge Enhancement</span>
                    <h1 className={styles.title}>Seminar & Workshops</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Continuous skill development workshops, hands-on simulation training, and national pharmacy seminars.
                    </p>
                </div>
                <div className={styles.grid}>
                    {workshops.map((w, i) => (
                        <div key={i} className={styles.card}>
                            <h3 className={styles.cardTitle}>{w.title}</h3>
                            <p className={styles.cardDesc}>{w.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}