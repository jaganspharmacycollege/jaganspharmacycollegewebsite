'use client';

import React from 'react';
import styles from './AlumniShared.module.css';

export default function AlumniAssociation() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    <div>
                        <span className={styles.eyebrow}>Global Network</span>
                        <h1 className={styles.title}>Alumni Association</h1>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            The Jagan&apos;s College of Pharmacy Alumni Association fosters lifelong bonds between the college and its worldwide graduate network. Our alumni community includes researchers, clinical pharmacologists, industrial directors, regulatory executives, and healthcare entrepreneurs globally.
                        </p>
                    </div>
                    <div className={styles.imageFrame}>
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                            alt="Jagan's Alumni Association Network"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}