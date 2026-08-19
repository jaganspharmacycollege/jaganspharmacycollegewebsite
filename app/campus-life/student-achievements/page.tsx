import React from 'react';
import styles from '../CampusLifeLayout.module.css';

export default function StudentAchievementsPage() {
    const achievements = [
        { title: 'JNTUA University Rank Holders', desc: 'Consistently securing top ranks and gold medals in university annual board examinations.' },
        { title: 'National Level Paper Presentations', desc: 'First prizes won by our scholars at the Indian Pharmaceutical Congress (IPC) and national conferences.' },
        { title: 'GPAT & NIPER Qualifiers', desc: 'High percentage of final year B.Pharm students securing top percentiles in national entrance exams.' },
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Pride of Jagan&apos;s</span>
                    <h1 className={styles.title}>Student Achievements</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Celebrating outstanding milestones, university awards, and research recognitions attained by our students.
                    </p>
                </div>
                <div className={styles.grid}>
                    {achievements.map((a, i) => (
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