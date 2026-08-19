'use client';

import React from 'react';
import styles from './InfrastructureShared.module.css';

export default function SportsFacility() {
    return (
        <section className={styles.sectionAlt} style={{ borderBottom: 'none' }}>
            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    <div className={styles.imageFrame}>
                        <img
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80"
                            alt="Sports & Athletic Grounds"
                        />
                    </div>
                    <div>
                        <span className={styles.eyebrow}>Recreation & Wellness</span>
                        <h2 className={styles.title}>Sports Facility</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Comprehensive indoor and outdoor athletic grounds including dedicated courts for Volleyball, Basketball, Badminton, Cricket turf, Table Tennis, Chess, and an equipped gymnasium.
                        </p>
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureCardAlt}>
                                <h4 className={styles.featureTitle}>Outdoor Grounds</h4>
                                <p className={styles.featureDesc}>Full-size cricket turf, volleyball, and basketball courts.</p>
                            </div>
                            <div className={styles.featureCardAlt}>
                                <h4 className={styles.featureTitle}>Indoor Sports Hub</h4>
                                <p className={styles.featureDesc}>Equipped gym, badminton courts, chess, and table tennis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}