'use client';

import React from 'react';
import styles from './InfrastructureShared.module.css';

export default function CampusOverview() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    <div>
                        <span className={styles.eyebrow}>Campus & Facilities</span>
                        <h1 className={styles.title}>Campus Overview</h1>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Spread across a serene, green campus, Jagan&apos;s College of Pharmacy offers a purpose-built environment designed exclusively for high-standard pharmaceutical education, clinical training, and translational research.
                        </p>
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureCard}>
                                <h4 className={styles.featureTitle}>Lush Green Setting</h4>
                                <p className={styles.featureDesc}>Pollution-free atmosphere built for focused learning.</p>
                            </div>
                            <div className={styles.featureCard}>
                                <h4 className={styles.featureTitle}>Centralized Block</h4>
                                <p className={styles.featureDesc}>Interconnected academic and administrative wings.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageFrame}>
                        <img
                            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
                            alt="Jagan's College of Pharmacy Campus Overview"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}