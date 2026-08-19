import React from 'react';
import styles from '../CampusLifeLayout.module.css';

export default function CanteenPage() {
    const features = [
        { title: 'Fresh & Hygienic Meals', desc: 'Serves freshly cooked South & North Indian breakfast, full meals, healthy snacks, and fresh fruit juices.' },
        { title: 'Affordable Student Pricing', desc: 'Subsidized nutritious food options designed specifically to meet student dietary needs.' },
        { title: 'Vibrant Social Hub', desc: 'A spacious, clean dining hall that provides a welcoming space for group study discussions and relaxation.' },
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Dining & Refreshment</span>
                    <h1 className={styles.title}>Canteen</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        A modern, hygienic cafeteria serving balanced meals, refreshing beverages, and quick bites throughout the day.
                    </p>
                </div>
                <div className={styles.grid}>
                    {features.map((f, i) => (
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