'use client';

import React from 'react';
import styles from './AlumniShared.module.css';

export default function AlumniAchievements() {
    return (
        <section className={styles.sectionAlt} style={{ borderBottom: 'none' }}>
            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    <div className={styles.imageFrame}>
                        <img
                            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
                            alt="Distinguished Alumni Achievements"
                        />
                    </div>
                    <div>
                        <span className={styles.eyebrow}>Pride & Milestones</span>
                        <h2 className={styles.title}>Alumni Achievements</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Our graduates continue to excel across the healthcare ecosystem—earning international patent grants, holding top corporate executive positions, leading clinical hospital wings, and pioneering pharma-tech innovations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}