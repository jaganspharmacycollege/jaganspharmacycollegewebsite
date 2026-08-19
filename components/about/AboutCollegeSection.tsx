'use client';

import React from 'react';
import styles from './AboutCollegeSection.module.css';

export default function AboutCollegeSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div>
                    <span className={styles.eyebrow}>About Our Institution</span>
                    <h1 className={styles.title}>College</h1>
                    <div className={styles.accentLine} />

                    <p className={styles.description}>
                        Established with a vision to deliver excellence in pharmacy education and scientific innovation, Jagan&apos;s College of Pharmacy provides students with comprehensive clinical knowledge, cutting-edge laboratory facilities, and experiential research opportunities.
                    </p>

                    <p className={styles.description}>
                        Our sprawling green campus is equipped with smart classrooms, advanced analytical instruments, an extensive digital library, and dedicated spaces designed to prepare future-ready pharmacists and healthcare researchers.
                    </p>

                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statVal}>15+</div>
                            <div className={styles.statLabel}>Years of Educational Excellence</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statVal}>3500+</div>
                            <div className={styles.statLabel}>Graduated Pharmacists</div>
                        </div>
                    </div>
                </div>

                <div className={styles.imageFrame}>
                    <img
                        src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
                        alt="Jagan's College of Pharmacy Campus Building"
                    />
                </div>
            </div>
        </section>
    );
}