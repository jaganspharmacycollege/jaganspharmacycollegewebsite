'use client';

import React from 'react';
import styles from './InfrastructureShared.module.css';

export default function PharmaceuticalChemistryLabs() {
    return (
        <section className={styles.sectionAlt}>
            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    <div className={styles.imageFrame}>
                        <img
                            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80"
                            alt="Pharmaceutical Chemistry Laboratory"
                        />
                    </div>
                    <div>
                        <span className={styles.eyebrow}>Synthesis & Medicinal Chemistry</span>
                        <h2 className={styles.title}>Pharmaceutics Chemistry labs</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Equipped with individual chemical fume hoods, precision heating mantles, and reaction workstations for synthetic organic, inorganic, and medicinal chemistry experiments.
                        </p>
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureCardAlt}>
                                <h4 className={styles.featureTitle}>Fume Hood Stations</h4>
                                <p className={styles.featureDesc}>High-suction ducted exhaust hoods ensuring safety.</p>
                            </div>
                            <div className={styles.featureCardAlt}>
                                <h4 className={styles.featureTitle}>Synthesis Workbenches</h4>
                                <p className={styles.featureDesc}>Equipped with distillation setups and magnetic stirrers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}