'use client';

import React from 'react';
import styles from './InfrastructureShared.module.css';

export default function PharmacologyLabs() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    <div>
                        <span className={styles.eyebrow}>Experimental Pharmacology</span>
                        <h2 className={styles.title}>Phrmacology labs</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Specialized in preclinical pharmacological screening, drug mechanism studies, and bioassays conforming to CPCSEA guidelines.
                        </p>
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureCard}>
                                <h4 className={styles.featureTitle}>Organ Bath Setups</h4>
                                <p className={styles.featureDesc}>Automated student organ baths for bioassay recordings.</p>
                            </div>
                            <div className={styles.featureCard}>
                                <h4 className={styles.featureTitle}>CAL Software</h4>
                                <p className={styles.featureDesc}>Computer-assisted pharmacology simulation models.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageFrame}>
                        <img
                            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80"
                            alt="Pharmacology Laboratory Setup"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}