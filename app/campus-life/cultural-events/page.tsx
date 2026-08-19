import React from 'react';
import styles from '../CampusLifeLayout.module.css';

export default function CulturalEventsPage() {
    const events = [
        { title: 'Annual Cultural Fest - TARANG', desc: 'Three days of vibrant music, drama, traditional and modern dance, and arts competitions.' },
        { title: 'Talent Hunt & Freshers Night', desc: 'Welcoming first-year students to showcase their talents in performing arts.' },
        { title: 'Traditional Attire & Ethnic Day', desc: 'Celebrating regional traditions, festive cuisines, and cultural diversity.' },
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Arts & Expression</span>
                    <h1 className={styles.title}>Cultural Events</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Vibrant celebrations of creativity, traditional Indian heritage, and stage performances on our open-air auditorium.
                    </p>
                </div>
                <div className={styles.grid}>
                    {events.map((e, i) => (
                        <div key={i} className={styles.card}>
                            <h3 className={styles.cardTitle}>{e.title}</h3>
                            <p className={styles.cardDesc}>{e.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}