'use client';

import React from 'react';
import styles from './InfrastructureShared.module.css';

export default function Classrooms() {
    return (
        <section className={styles.sectionAlt}>
            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    <div className={styles.imageFrame}>
                        <img
                            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80"
                            alt="Smart Classrooms"
                        />
                    </div>
                    <div>
                        <span className={styles.eyebrow}>Learning Spaces</span>
                        <h2 className={styles.title}>Classrooms</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Our spacious, well-ventilated lecture halls are acoustically treated and equipped with modern multimedia teaching aids, LCD projectors, high-speed Wi-Fi, and smart podiums for technology-driven instructions.
                        </p>
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureCardAlt}>
                                <h4 className={styles.featureTitle}>Multimedia Podiums</h4>
                                <p className={styles.featureDesc}>Projectors and interactive digital boards in all halls.</p>
                            </div>
                            <div className={styles.featureCardAlt}>
                                <h4 className={styles.featureTitle}>Tiered Seating</h4>
                                <p className={styles.featureDesc}>Ergonomic gallery seating ensuring clear line of sight.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}