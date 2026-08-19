'use client';

import React from 'react';
import styles from './InfrastructureShared.module.css';

export default function PharmacognosyLabs() {
    return (
        <section className={styles.sectionAlt}>
            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    <div className={styles.imageFrame}>
                        <img
                            src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80"
                            alt="Pharmacognosy & Phytochemistry Lab"
                        />
                    </div>
                    <div>
                        <span className={styles.eyebrow}>Natural Products & Phytochemistry</span>
                        <h2 className={styles.title}>Pharmacognosy labs</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Dedicated to the extraction, isolation, identification, and standardization of crude herbal drugs, botanical tissues, and active phytoconstituents.
                        </p>
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureCardAlt}>
                                <h4 className={styles.featureTitle}>Soxhlet Extraction</h4>
                                <p className={styles.featureDesc}>Continuous solvent extractors for natural active isolates.</p>
                            </div>
                            <div className={styles.featureCardAlt}>
                                <h4 className={styles.featureTitle}>Herbarium Museum</h4>
                                <p className={styles.featureDesc}>Rich library of authentic plant and mineral specimens.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}