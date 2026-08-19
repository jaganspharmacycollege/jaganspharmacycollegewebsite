import React from 'react';
import styles from '../CampusLifeLayout.module.css';

export default function TransportationPage() {
    const routes = [
        { title: 'Extensive Bus Network', desc: 'Fleet of modern college buses covering all major locations in Nellore, Gudur, Kovur, and surrounding regions.' },
        { title: 'GPS Tracking & Safety', desc: 'All college transport vehicles are equipped with GPS tracking, speed governors, and trained drivers.' },
        { title: 'Punctual & Convenient', desc: 'Scheduled arrivals aligned with college class timings, examination schedules, and clinical rotations.' },
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Campus Commute</span>
                    <h1 className={styles.title}>Transportation</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Safe and reliable daily transportation facilities ensuring seamless transit for students and staff.
                    </p>
                </div>
                <div className={styles.grid}>
                    {routes.map((r, i) => (
                        <div key={i} className={styles.card}>
                            <h3 className={styles.cardTitle}>{r.title}</h3>
                            <p className={styles.cardDesc}>{r.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}