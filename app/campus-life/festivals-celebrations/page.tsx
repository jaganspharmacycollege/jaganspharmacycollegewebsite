import React from 'react';
import styles from '../CampusLifeLayout.module.css';

export default function FestivalsCelebrationsPage() {
    const fests = [
        { title: 'World Pharmacists Day (Sept 25)', desc: 'Campus rallies, scientific poster presentations, pharmacist oath ceremony, and health screening camps.' },
        { title: 'National Pharmacy Week', desc: 'Week-long celebrations dedicated to advancing public awareness about the pharmacy profession.' },
        { title: 'Traditional Festive Celebrations', desc: 'Grand celebrations for Sankranti, Diwali, Dussehra, Eid, and Christmas fostering cultural unity.' },
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Festive Spirit</span>
                    <h1 className={styles.title}>Festivals & Celebrations</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Celebrating professional healthcare milestones, national festivals, and cultural harmony throughout the year.
                    </p>
                </div>
                <div className={styles.grid}>
                    {fests.map((f, i) => (
                        <div key={i} className={styles.card}>
                            <h3 className={styles.cardTitle}>{f.title}</h3>
                            <p className={styles.cardDesc}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}