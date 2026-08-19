'use client';

import React from 'react';
import styles from './AcademicsHero.module.css';

export default function AcademicsHero() {
    return (
        <section className={styles.section}>
            {/* Background Image */}
            <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1920&q=80"
                alt="Pharmaceutical laboratory research and academics"
                className={styles.bgImage}
            />

            {/* Dark Emerald Brand Overlay */}
            <div className={styles.overlay} />

            {/* Hero Content */}
            <div className={styles.container}>
                <span className={styles.eyebrow}>Excellence in Pharmaceutical Pedagogy</span>
                <h1 className={styles.title}>Academic Framework</h1>
                <div className={styles.accentLine} />
                <p className={styles.description}>
                    Fostering rigorous scientific inquiry, evidence-based clinical training, and PCI-aligned curriculum delivery guided by distinguished faculty and doctoral researchers.
                </p>
            </div>
        </section>
    );
}