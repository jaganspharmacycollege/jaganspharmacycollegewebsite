'use client';

import React from 'react';
import styles from './InfrastructureShared.module.css';

export default function ClinicalPharmacyLab() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    <div>
                        <span className={styles.eyebrow}>Patient Care & Clinical Skills</span>
                        <h2 className={styles.title}>Phrmacology / clinical pharmacy lab</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Designed specifically for Pharm.D training, featuring simulated clinical patient interaction booths, electronic drug information databases, and therapeutic drug monitoring systems.
                        </p>
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureCard}>
                                <h4 className={styles.featureTitle}>Counseling Cabins</h4>
                                <p className={styles.featureDesc}>Dedicated booths for patient medication counseling practice.</p>
                            </div>
                            <div className={styles.featureCard}>
                                <h4 className={styles.featureTitle}>Drug Info Center</h4>
                                <p className={styles.featureDesc}>Micromedex and Lexicomp clinical pharmacotherapy portals.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageFrame}>
                        <img
                            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                            alt="Clinical Pharmacy & Patient Care Practice"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}