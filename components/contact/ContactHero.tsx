'use client';

import React from 'react';
import styles from './ContactHero.module.css';

export default function ContactHero() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Column: Title & Text */}
                <div className={styles.leftCol}>
                    <h1 className={styles.title}>Contact Us</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.description}>
                        We're here to help and answer any question you might have. We look forward to hearing from you.
                    </p>

                    {/* Mobile/Tablet Fallback Image */}
                    <div className={styles.mobileImageWrapper}>
                        <img
                            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80"
                            alt="Jagan's College of Pharmacy Campus Building"
                        />
                    </div>
                </div>

                {/* Empty Spacer Column for Desktop Alignment */}
                <div className="hidden lg:block lg:col-span-7 h-full" />
            </div>

            {/* Right Edge Desktop Curved Campus Image */}
            <div className={styles.desktopImageWrapper}>
                <div className={styles.desktopImageInner}>
                    <img
                        src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80"
                        alt="Jagan's College of Pharmacy Campus Building"
                    />
                </div>
            </div>
        </section>
    );
}