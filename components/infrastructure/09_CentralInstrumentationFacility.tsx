'use client';

import React from 'react';
import styles from './InfrastructureShared.module.css';

export default function CentralInstrumentationFacility() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    <div>
                        <span className={styles.eyebrow}>Advanced Analytical Research</span>
                        <h2 className={styles.title}>Central instrumentation facility</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            A centralized, climate-controlled research core housing state-of-the-art analytical equipment supporting postgraduate theses and industrial projects.
                        </p>
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureCard}>
                                <h4 className={styles.featureTitle}>HPLC Systems</h4>
                                <p className={styles.featureDesc}>Gradient HPLC units with UV-Vis and PDA detection.</p>
                            </div>
                            <div className={styles.featureCard}>
                                <h4 className={styles.featureTitle}>FTIR & UV-Vis</h4>
                                <p className={styles.featureDesc}>Infrared and spectrophotometric assay validation.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageFrame}>
                        <img
                            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80"
                            alt="Central Instrumentation Facility HPLC"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}