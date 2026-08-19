'use client';

import React from 'react';
import styles from './InfrastructureShared.module.css';

export default function ComputerLab() {
    return (
        <section className={styles.sectionAlt}>
            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    <div className={styles.imageFrame}>
                        <img
                            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80"
                            alt="High-tech Computer Center"
                        />
                    </div>
                    <div>
                        <span className={styles.eyebrow}>Digital & Computational Pharmacy</span>
                        <h2 className={styles.title}>Computer Lab</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            High-speed computing facility equipped with 60+ latest desktop workstations, gigabit fiber internet, and licensed software for molecular modeling and biostatistics.
                        </p>
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureCardAlt}>
                                <h4 className={styles.featureTitle}>60+ High-End PCs</h4>
                                <p className={styles.featureDesc}>Dedicated workstations with UPS power backup.</p>
                            </div>
                            <div className={styles.featureCardAlt}>
                                <h4 className={styles.featureTitle}>Molecular Tools</h4>
                                <p className={styles.featureDesc}>Chemdraw, AutoDock, and SPSS statistical packages.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}