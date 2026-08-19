import React from 'react';
import styles from '../CampusLifeLayout.module.css';

export default function AntiRaggingPage() {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Safe & Secure Campus</span>
                    <h1 className={styles.title}>Anti-Ragging</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Jagan&apos;s College of Pharmacy strictly enforces a Zero-Tolerance Policy toward ragging in compliance with PCI, UGC, and Supreme Court directives.
                    </p>
                </div>

                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Anti-Ragging Measures & Helpline</h3>
                    <div className={styles.list}>
                        <div className={styles.listItem}>
                            <span className={styles.dot} />
                            <span><strong>Anti-Ragging Committee:</strong> Active squad conducting 24/7 surprise vigilance checks across campus, hostels, and buses.</span>
                        </div>
                        <div className={styles.listItem}>
                            <span className={styles.dot} />
                            <span><strong>CCTV Surveillance:</strong> 24/7 high-definition monitoring throughout all corridors, gates, mess halls, and common areas.</span>
                        </div>
                        <div className={styles.listItem}>
                            <span className={styles.dot} />
                            <span><strong>Toll-Free Helpline:</strong> National Anti-Ragging Helpline: 1800-180-5522 | Campus Helpline: +91 861 2345678.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}