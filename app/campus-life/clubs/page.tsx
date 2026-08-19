import React from 'react';
import styles from '../CampusLifeLayout.module.css';

export default function ClubsPage() {
    const clubs = [
        { title: 'Pharma Innovators Club', desc: 'Focused on drug formulation discussions, patent analysis, and novel pharmaceutical techniques.' },
        { title: 'Literary & Debating Society', desc: 'Cultivates public speaking, presentation clarity, and medical writing abilities.' },
        { title: 'Nature & Green Campus Club', desc: 'Drives herbal garden plantation projects and campus sustainability initiatives.' },
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Student Societies</span>
                    <h1 className={styles.title}>Clubs</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Student-run societies providing opportunities to pursue diverse passions beyond the academic syllabus.
                    </p>
                </div>
                <div className={styles.grid}>
                    {clubs.map((c, i) => (
                        <div key={i} className={styles.card}>
                            <h3 className={styles.cardTitle}>{c.title}</h3>
                            <p className={styles.cardDesc}>{c.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}