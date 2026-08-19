'use client';

import React from 'react';
import styles from './InfrastructureShared.module.css';

export default function PharmaceuticsLabs() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    <div>
                        <span className={styles.eyebrow}>Formulation & Manufacturing</span>
                        <h2 className={styles.title}>Pharmaceutics Laboratories</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Designed for novel dosage form preparation, pilot-scale manufacturing, and physical pharmacy experiments conforming strictly to Good Laboratory Practices (GLP).
                        </p>
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureCard}>
                                <h4 className={styles.featureTitle}>Tableting Unit</h4>
                                <p className={styles.featureDesc}>Rotary tablet presses, coating pans, and capsule fillers.</p>
                            </div>
                            <div className={styles.featureCard}>
                                <h4 className={styles.featureTitle}>Sterile Cleanroom</h4>
                                <p className={styles.featureDesc}>Laminar airflow hoods for aseptic ophthalmic formulations.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageFrame}>
                        <img
                            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80"
                            alt="Pharmaceutics Formulation Laboratory"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}