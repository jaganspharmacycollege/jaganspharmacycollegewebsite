'use client';

import React from 'react';
import styles from './AlumniShared.module.css';

export default function AlumniMeet() {
    return (
        <section className={styles.sectionAlt}>
            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    <div>
                        <span className={styles.eyebrow}>Reunion & Networking</span>
                        <h2 className={styles.title}>Alumni Meet</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Our Annual Alumni Homecoming Meet brings together graduates across all batches to reconnect with professors, mentor current students, exchange industrial insights, and celebrate their shared foundation at Jagan&apos;s College of Pharmacy.
                        </p>
                    </div>
                    <div className={styles.imageFrame}>
                        <img
                            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
                            alt="Annual Alumni Homecoming Meet"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}