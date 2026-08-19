import React from 'react';
import styles from '../CampusLifeLayout.module.css';

export default function StudentActivitiesPage() {
    const activities = [
        { title: 'Community Health Camps', desc: 'Students actively participate in free medical diagnostic and medication counseling drives across rural Nellore.' },
        { title: 'Pharma Quizzes & Debates', desc: 'Regular inter-departmental intellectual competitions focusing on clinical pharmacy and drug discoveries.' },
        { title: 'Drug Awareness Rallies', desc: 'Public health awareness campaigns on rational antibiotic use, immunization, and disease prevention.' },
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Campus Engagement</span>
                    <h1 className={styles.title}>Student Activities</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our campus offers vibrant student activities that develop leadership, civic awareness, teamwork, and clinical communication skills.
                    </p>
                </div>
                <div className={styles.grid}>
                    {activities.map((a, i) => (
                        <div key={i} className={styles.card}>
                            <h3 className={styles.cardTitle}>{a.title}</h3>
                            <p className={styles.cardDesc}>{a.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}