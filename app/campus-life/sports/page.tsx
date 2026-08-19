import React from 'react';
import styles from '../CampusLifeLayout.module.css';

export default function SportsPage() {
    const sports = [
        { title: 'Outdoor Sports Arena', desc: 'Standard fields and courts for Cricket, Volleyball, Basketball, Football, and Track & Field athletics.' },
        { title: 'Indoor Sports Complex', desc: 'Dedicated spaces for Badminton, Table Tennis, Chess, and Carrom tournaments.' },
        { title: 'Annual Sports Meet', desc: 'Inter-house and inter-collegiate athletic tournaments competing for prestigious championship trophies.' },
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Athletics & Fitness</span>
                    <h1 className={styles.title}>Sports</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Promoting physical well-being, discipline, and sportsmanship through comprehensive indoor and outdoor athletic facilities.
                    </p>
                </div>
                <div className={styles.grid}>
                    {sports.map((s, i) => (
                        <div key={i} className={styles.card}>
                            <h3 className={styles.cardTitle}>{s.title}</h3>
                            <p className={styles.cardDesc}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}