'use client';

import React from 'react';
import styles from './InfrastructureShared.module.css';

export default function SeminarHallAuditorium() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    <div>
                        <span className={styles.eyebrow}>Events & Conventions</span>
                        <h2 className={styles.title}>Seminar Hall / Auditorium</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            An air-conditioned auditorium with 350+ theatrical seats, high-fidelity acoustics, motorized projection, and video conferencing capabilities for national conferences.
                        </p>
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureCard}>
                                <h4 className={styles.featureTitle}>350+ Seating Capacity</h4>
                                <p className={styles.featureDesc}>Plush acoustic theatre seating for conventions.</p>
                            </div>
                            <div className={styles.featureCard}>
                                <h4 className={styles.featureTitle}>HD Projection</h4>
                                <p className={styles.featureDesc}>Seamless hybrid video conferencing setup.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageFrame}>
                        <img
                            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
                            alt="Seminar Hall Auditorium"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}