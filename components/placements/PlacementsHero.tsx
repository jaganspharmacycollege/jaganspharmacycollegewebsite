'use client';

import React from 'react';
import styles from './PlacementsHero.module.css';

export default function PlacementsHero() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <span className={styles.eyebrow}>Career Opportunities</span>
                <h1 className={styles.title}>Training & Placements</h1>
                <div className={styles.accentLine} />
                <p className={styles.description}>
                    Empowering pharmaceutical graduates with high-impact clinical competencies, industrial readiness, and direct recruitment linkages with world-leading healthcare enterprises.
                </p>
            </div>
        </section>
    );
}