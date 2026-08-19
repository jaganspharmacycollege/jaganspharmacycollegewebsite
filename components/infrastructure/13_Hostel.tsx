'use client';

import React from 'react';
import styles from './InfrastructureShared.module.css';

export default function Hostel() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    <div>
                        <span className={styles.eyebrow}>Student Living</span>
                        <h2 className={styles.title}>Hostel</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Secure residential hostel buildings for boys and girls offering well-furnished rooms, 24/7 power backup, purified RO water, hygienic dining, and round-the-clock security surveillance.
                        </p>
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureCard}>
                                <h4 className={styles.featureTitle}>Separate Buildings</h4>
                                <p className={styles.featureDesc}>Individual secure hostels for male and female scholars.</p>
                            </div>
                            <div className={styles.featureCard}>
                                <h4 className={styles.featureTitle}>Hygienic Dining</h4>
                                <p className={styles.featureDesc}>Nutritious vegetarian and non-vegetarian daily meals.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageFrame}>
                        <img
                            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80"
                            alt="Student Residential Hostel"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}