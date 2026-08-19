'use client';

import React from 'react';
import styles from './InfrastructureShared.module.css';

export default function HerbalGarden() {
    return (
        <section className={styles.sectionAlt}>
            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    <div className={styles.imageFrame}>
                        <img
                            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80"
                            alt="Medicinal Herbal Garden"
                        />
                    </div>
                    <div>
                        <span className={styles.eyebrow}>Botanical Diversity</span>
                        <h2 className={styles.title}>Herbal Garden</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Our landscaped botanical garden spans significant campus ground, cultivating over 120+ authentic varieties of aromatic and therapeutic medicinal plants.
                        </p>
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureCardAlt}>
                                <h4 className={styles.featureTitle}>120+ Plant Species</h4>
                                <p className={styles.featureDesc}>Rare therapeutic species used for pharmacognosy research.</p>
                            </div>
                            <div className={styles.featureCardAlt}>
                                <h4 className={styles.featureTitle}>Live Study Zone</h4>
                                <p className={styles.featureDesc}>Provides real specimens for student herbal formulations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}