'use client';

import React from 'react';
import styles from './InfrastructureShared.module.css';

export default function Library() {
    return (
        <section className={styles.sectionAlt}>
            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    <div className={styles.imageFrame}>
                        <img
                            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80"
                            alt="Central Knowledge Resource Library"
                        />
                    </div>
                    <div>
                        <span className={styles.eyebrow}>Knowledge Resource Center</span>
                        <h2 className={styles.title}>Library</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            A fully automated, air-conditioned learning repository housing thousands of pharmaceutical volumes, pharmacopoeias, print journals, and e-learning terminals.
                        </p>
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureCardAlt}>
                                <h4 className={styles.featureTitle}>10,000+ Textbooks</h4>
                                <p className={styles.featureDesc}>IP, BP, USP, and national & international print journals.</p>
                            </div>
                            <div className={styles.featureCardAlt}>
                                <h4 className={styles.featureTitle}>Digital E-Library</h4>
                                <p className={styles.featureDesc}>DELNET and ScienceDirect subscriptions for scholars.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}